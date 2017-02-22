import {EVENTS} from './events';

export default function authenticationService($rootScope, $q, BrowserStorage, LoginService) {

	var login,
		logout,
		isAuthenticated,
		updateAuthenticationStatus,
		getAuthenticationToken,
		_prepareUserCredentials,
		_storeAuthenticationData,
		_clearAuthenticationData,
		authenticationService;

	var loggedInUser = null;
	var userCredentialsKey = 'ls.userCredentials';

	login = function (credentials) {
		let defer = $q.defer();
		LoginService.login(credentials).then(
			(successResponse) => {
				let authData = successResponse.data;
				_storeAuthenticationData(authData);
				defer.resolve(authData.user);
			},
			(errorResponse) => {
				defer.reject(errorResponse);
			});
		return defer.promise;
	};

	logout = function () {
		return LoginService.logout(getAuthenticationToken()).then(_clearAuthenticationData, _clearAuthenticationData);
	};

	isAuthenticated = function () {
		return loggedInUser !== null;
	};

	updateAuthenticationStatus = function () {
		let user = BrowserStorage.get(userCredentialsKey);
		if (user !== null) {
			loggedInUser = user;
		} else {
			loggedInUser = null;
		}
	};

	getAuthenticationToken = function () {
		var user = BrowserStorage.get(userCredentialsKey);
		if (user !== null) {
			return user.authToken;
		} else {
			return null;
		}
	}

	_prepareUserCredentials = function (authData) {
		delete authData.token.expires;
		let userCredentials = Object.assign(authData.user, authData.token);
		userCredentials.integrations = authData.integrations;
		return userCredentials;
	}

	_storeAuthenticationData = function (authData) {
		BrowserStorage.set(userCredentialsKey, _prepareUserCredentials(authData));
		$rootScope.$broadcast(EVENTS.USER_CREDENTIALS_UPDATED);
	}

	_clearAuthenticationData = function () {
		BrowserStorage.remove(userCredentialsKey);
		$rootScope.$broadcast(EVENTS.USER_LOGGED_OUT);
	}

	authenticationService = {
		login: login,
		logout: logout,
		isAuthenticated: isAuthenticated,
		getAuthenticationToken,
		updateAuthenticationStatus: updateAuthenticationStatus
	};

	return authenticationService;
}

authenticationService.$inject = ['$rootScope', '$q', 'BrowserStorage', 'LoginService'];
