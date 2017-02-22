import angular from 'angular';
import uirouter from 'angular-ui-router';

import routeConfig from './login.routes';
import LoginController from './login.controller';

export default angular.module('leadscore.login', [uirouter])
  .config(routeConfig)
  .controller('LoginController', LoginController)
  .name;
