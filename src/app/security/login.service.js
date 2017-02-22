export default class LoginService {

	constructor($http, Utils) {
		this.$http = $http;
		this.apiUrl = Utils.apiUrl();
	}

	login(credentials) {

		let requestData = {
			username: credentials.username,
			password: credentials.password
		}

		return this.$http.post(this.apiUrl + '/login', requestData);
	}

	logout(AuthToken) {
		return this.$http.post(this.apiUrl + '/logout', {authToken: AuthToken});
	}
}

LoginService.$inject = ['$http', 'Utils'];
