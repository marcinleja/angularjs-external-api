export default class LoginController {

	constructor($state, AuthenticationService, AlertService) {
		this.$state = $state;
		this.AuthenticationService = AuthenticationService;
		this.AlertService = AlertService;
	}

	login(credentials) {
		this.AuthenticationService.login(credentials).then(
			(successResponse) => {
				this.$state.go('app.contacts');
			},
			(errorResponse) => {
				this.AlertService.displayErrorMessage('Login or password is incorrect')
			});
	}
}

LoginController.$inject = ['$state', 'AuthenticationService', 'AlertService'];
