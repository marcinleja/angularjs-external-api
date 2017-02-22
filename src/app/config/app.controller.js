export default class ApplicationController {
	constructor(AuthenticationService) {
		this.AuthenticationService = AuthenticationService;
	}

	logout() {
		this.AuthenticationService.logout();
	}
}

ApplicationController.$inject = ['AuthenticationService'];
