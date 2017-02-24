import {EVENTS} from './events';

export default function authenticationService($rootScope, $q, UserCredentialsService, LoginService) {

	var login,
		logout,
		isAuthenticated,
		updateAuthenticationStatus,
		_storeAuthenticationData,
		_clearAuthenticationData,
		authenticationService;

	var userIsLoggedIn = false;


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
		return LoginService.logout(UserCredentialsService.getAuthenticationToken()).then(_clearAuthenticationData, _clearAuthenticationData);
	};

	isAuthenticated = function () {
		return userIsLoggedIn;
	};

	updateAuthenticationStatus = function () {
		userIsLoggedIn = UserCredentialsService.getUserCredentials() !== null;
	};

	_storeAuthenticationData = function (authData) {
		UserCredentialsService.saveUserCredentials(authData);
		$rootScope.$broadcast(EVENTS.USER_CREDENTIALS_UPDATED);
	}

	_clearAuthenticationData = function () {
		UserCredentialsService.clearUserCredentials();
		$rootScope.$broadcast(EVENTS.USER_LOGGED_OUT);
	}

	authenticationService = {
		login: login,
		logout: logout,
		isAuthenticated: isAuthenticated,
		updateAuthenticationStatus: updateAuthenticationStatus
	};

	return authenticationService;
}

authenticationService.$inject = ['$rootScope', '$q', 'UserCredentialsService', 'LoginService'];
