import angular from 'angular';
import uirouter from 'angular-ui-router';

import routeConfig from './app.routes';
import applicationConfig from './app.config';
import ApplicationController from './app.controller';

export default angular.module('leadscore.config', [uirouter])
	.config(routeConfig)
	.config(applicationConfig)
	.controller('ApplicationController', ApplicationController)
	.name;
