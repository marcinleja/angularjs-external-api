import angular from 'angular';
import 'angular-toastr';

import BrowserStorage from './browser-storage.service';
import AlertService from './alert.service';

export default angular.module('leadscore.services', ['toastr'])
	.service('BrowserStorage', BrowserStorage)
	.service('AlertService', AlertService)
	.name;
