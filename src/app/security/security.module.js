import angular from 'angular';
import uirouter from 'angular-ui-router';

import AuthenticationService from './authentication.service';
import requestsInterceptor from './requests-interceptor';
import LoginService from './login.service';
import stateAuthentication from './state-authentication';


export default angular.module('leadscore.security', [uirouter])
  .factory('AuthenticationService', AuthenticationService)
  .factory('RequestsInterceptor', requestsInterceptor)
  .service('LoginService', LoginService)
  .run(stateAuthentication)
  .name;
