import angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angular-toastr';

import services from './services/services.module';
import security from './security/security.module';
import common from './common/common.module';
import config from './config/config.module';
import login from './login/login.module';
import contacts from './contacts/contacts.module';

import '../style/leadscore.less';

const MODULE_NAME = 'leadscore';

angular.module('leadscore', [
  'ui.router',
  'ui.bootstrap',
  'toastr',
  services,
  security,
  common,
  config,
  login,
  contacts
]);

export default MODULE_NAME;
