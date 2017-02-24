import angular from 'angular';
import uirouter from 'angular-ui-router';

import RequestsInterceptor from './requests-interceptor';
import AuthenticationService from './authentication.service';
import LoginService from './login.service';
import UserCredentialsService from './user-credentials.service';
import stateAuthentication from './state-authentication';


export default angular.module('leadscore.security', [uirouter])
	.factory('RequestsInterceptor', RequestsInterceptor)
	.factory('AuthenticationService', AuthenticationService)
	.service('LoginService', LoginService)
	.service('UserCredentialsService', UserCredentialsService)
	.run(stateAuthentication)
	.name;
