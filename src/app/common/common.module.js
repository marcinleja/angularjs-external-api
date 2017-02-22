import angular from 'angular';

import utils from './utils.service';

export default angular.module('leadscore.common', [])
  .service('Utils', utils)
  .name;
