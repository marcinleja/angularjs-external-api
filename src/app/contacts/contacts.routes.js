export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app.contacts', {
      url: '/contacts',
      parent: 'app',
      template: require('./contacts.html'),
      controller: 'ContactsController',
      controllerAs: 'vm'
    });
}

routes.$inject = ['$stateProvider', '$urlRouterProvider'];
