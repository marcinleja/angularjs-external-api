'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';

module.exports = function makeWebpackConfig() {

	var config = {};
	config.entry = isTest ? void 0 : {
		leadscore: './src/app/app.module.js'
	};

	config.output = isTest ? {} : {
		// Absolute output directory
		path: __dirname + '/dist',

		// Output path from the view of the page
		// Uses webpack-dev-server in development
		publicPath: isProd ? '/' : 'http://localhost:9000/',

		// Filename for entry points
		// Only adds hash in build mode
		filename: isProd ? '[name].[hash].js' : '[name].bundle.js',

		// Filename for non-entry points
		// Only adds hash in build mode
		chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
	};

	/**
	 * Devtool
	 * Reference: http://webpack.github.io/docs/configuration.html#devtool
	 * Type of sourcemap to use per build type
	 */
	if (isTest) {
		config.devtool = 'inline-source-map';
	} else if (isProd) {
		config.devtool = 'source-map';
	} else {
		config.devtool = 'eval-source-map';
	}

	config.module = {
		rules: [{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015'],
					cacheDirectory: true
				},
				exclude: /node_modules/
    },
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
     },
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
				loader: 'file-loader'
    },
			{
				test: /\.html$/,
				loader: 'raw-loader'
    }],

	};

	// Instrument JS files with istanbul-lib-instrument for subsequent code coverage reporting
	if (isTest) {
		config.module.rules.push({
			enforce: 'pre',
			test: /\.js$/,
			exclude: [
        /node_modules/,
        /\.spec\.js$/
      ],
			loader: 'istanbul-instrumenter-loader',
			query: {
				esModules: true
			}
		})
	}
  
	config.plugins = [
    new webpack.LoaderOptionsPlugin({
			test: /\.scss$/i,
			options: {
				postcss: {
					plugins: [autoprefixer]
				}
			}
		})
  ];

	if (!isTest) {
		config.plugins.push(
			new HtmlWebpackPlugin({
				template: './src/index.html',
				inject: 'body'
			}),
			new ExtractTextPlugin({
				filename: 'css/[name].css',
				disable: !isProd,
				allChunks: true
			})
		)
	}

	if (isProd) {
		config.plugins.push(
			new webpack.NoErrorsPlugin(),
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin(),
			new CopyWebpackPlugin([{
				from: __dirname + '/src/assets'
      }])
		)
	}

	config.devServer = {
		contentBase: './src/assets',
		stats: 'minimal'
	};

	return config;
}();
