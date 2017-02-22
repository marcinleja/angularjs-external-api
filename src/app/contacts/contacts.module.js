import angular from 'angular';
import uirouter from 'angular-ui-router';

import routeConfig from './contacts.routes';
import ContactsController from './contacts.controller';

export default angular.module('leadscore.contacts', [uirouter])
  .config(routeConfig)
  .controller('ContactsController', ContactsController)
  .name;
