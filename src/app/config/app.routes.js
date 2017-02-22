export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
  	.state('app', {
      url: '',
      abstract: true,
      template: require('../app.html'),
      controller: 'ApplicationController',
      controllerAs: 'vm'
    })
    .state('404', {
      url: '/404',
      template: require('../unknown/404.html')
    });

    $urlRouterProvider.when('', '/contacts');
    $urlRouterProvider.otherwise('/404');
}

routes.$inject = ['$stateProvider', '$urlRouterProvider'];
