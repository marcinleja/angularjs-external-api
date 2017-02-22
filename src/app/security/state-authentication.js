import angular from 'angular';
import {EVENTS} from './events';

export default function stateAuthentication(AuthenticationService, $rootScope, $state) {

	function isPublic(state) {
		return angular.isObject(state.data) && state.data.isPublic === true;
	};

	$rootScope.$on('$stateChangeStart',
		function (event, toState) {
			if (AuthenticationService.isAuthenticated() || isPublic(toState)) {
				return;
			} else {
				event.preventDefault();
				$state.go("login");
			}
		});

	$rootScope.$on(EVENTS.USER_CREDENTIALS_UPDATED, AuthenticationService.updateAuthenticationStatus);
	$rootScope.$on(EVENTS.APPLICATION_INITIALIZED, AuthenticationService.updateAuthenticationStatus);
	$rootScope.$on(EVENTS.USER_LOGGED_OUT, function () {
		$state.go("login");
	});


	$rootScope.$broadcast(EVENTS.APPLICATION_INITIALIZED);
}

stateAuthentication.$inject = ['AuthenticationService', '$rootScope', '$state'];
