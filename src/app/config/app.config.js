export default function applicationConfig($httpProvider, $locationProvider) {

	$httpProvider.interceptors.push('RequestsInterceptor');
	$locationProvider.hashPrefix('');

}

applicationConfig.$inject = ['$httpProvider', '$locationProvider'];
