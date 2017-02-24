import {EVENTS} from './events';

export default function requestsInterceptor(
	$q,
	$rootScope,
	UserCredentialsService) {

	var interceptor = {
		request: (config) => {
			config.headers['authToken'] = UserCredentialsService.getAuthenticationToken();
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

requestsInterceptor.$inject = ['$q', '$rootScope', 'UserCredentialsService'];
