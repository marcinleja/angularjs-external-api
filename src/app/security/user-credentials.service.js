export default class UserCredentialsService {

	constructor(BrowserStorage) {
		this.BrowserStorage = BrowserStorage;
		this.userCredentialsKey = 'ls.userCredentials';
	}

	getUserCredentials() {
		return this.BrowserStorage.get(this.userCredentialsKey);
	}

	getAuthenticationToken() {
		var userCredentials = this.BrowserStorage.get(this.userCredentialsKey);
		if (userCredentials !== null) {
			return userCredentials.authToken;
		} else {
			return null;
		}
	}

	saveUserCredentials(userCredentials) {
		this.BrowserStorage.set(this.userCredentialsKey, this._prepareUserCredentialsForStorage(userCredentials));
	}

	_prepareUserCredentialsForStorage(userCredentials) {
		delete userCredentials.token.expires;
		let userCredentialsReadyForStorage = Object.assign(userCredentials.user, userCredentials.token);
		userCredentialsReadyForStorage.integrations = userCredentials.integrations;
		return userCredentialsReadyForStorage;
	}

	clearUserCredentials() {
		this.BrowserStorage.remove(this.userCredentialsKey);
	}
}

UserCredentialsService.$inject = ['BrowserStorage'];
