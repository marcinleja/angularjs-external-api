export default class ApplicationController {
	
	constructor(AuthenticationService, $state) {
		this.AuthenticationService = AuthenticationService;
		this.$state = $state;
	}

	logout() {
		this.AuthenticationService.logout();
	}
}

ApplicationController.$inject = ['AuthenticationService', '$state'];
