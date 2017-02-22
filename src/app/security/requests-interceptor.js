import {EVENTS} from './events';

export default function requestsInterceptor(
	$q,
	$rootScope,
	BrowserStorage) {


	var interceptor = {
		request: (config) => {
			// config.headers['authToken'] = this.BrowserStorage.loginTokenCookie;
			return config;
		},
		response: (response) => {
			return response;
		},
		responseError: (error) => {
			if (error.status === 401) {
				$rootScope.$broadcast(EVENTS.UNAUTHORIZED_REQUEST_OCCURED);
			}

			return $q.reject(error);
		}
	};

	return interceptor;
}

requestsInterceptor.$inject = ['$q', '$rootScope', 'BrowserStorage'];
