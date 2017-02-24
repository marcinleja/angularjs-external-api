import authenticationSerivce from '../src/app/security/authentication.service.js';

describe('AuthenticationSerivce', () => {

	let $rootScope,
		$q,
		BrowserStorage,
		LoginService,
		authenticationSerivceInstance;

	beforeEach(() => {
		angular.mock.module('leadscore');

		angular.mock.inject((_$rootScope_, _$q_, _UserCredentialsService_, _LoginService_) => {
			authenticationSerivceInstance = authenticationSerivce(_$rootScope_, _$q_, _UserCredentialsService_, _LoginService_);
		});
	});

	describe('when user is not logged in', () => {

		it('should return false when isAuthenticated is called', () => {
			expect(authenticationSerivceInstance.isAuthenticated()).toBeFalsy();
		});

	});

	describe('when user is logged in', () => {});

});
