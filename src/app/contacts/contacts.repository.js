export default class ContactsRepository {

	constructor($http, Utils) {
		this.$http = $http;
		this.Utils = Utils;

		this.apiUrl = Utils.apiUrl();
	}

	findAll() {
		return this.$http
			.get(`${this.apiUrl}/contacts`)
			.then((response) => {
				return response.data;
			});
	}
}

ContactsRepository.$inject = ['$http', 'Utils'];
