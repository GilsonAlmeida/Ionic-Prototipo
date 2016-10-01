angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('listagemOS', {
    url: '/page1',
    templateUrl: 'templates/listagemOS.html',
    controller: 'listagemOSCtrl'
  })

  .state('adicionarLaudo', {
    url: '/page2',
    templateUrl: 'templates/adicionarLaudo.html',
    controller: 'adicionarLaudoCtrl'
  })

  .state('visualizarLaudo', {
    url: '/visualizarLAudo',
    templateUrl: 'templates/visualizarLaudo.html',
    controller: 'visualizarLaudoCtrl'
  })

  .state('adicionarLaudoManual', {
    url: '/page4',
    templateUrl: 'templates/adicionarLaudoManual.html',
    controller: 'adicionarLaudoManualCtrl'
  })

  .state('login', {
    url: '/page3',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('listagemLaudos', {
    url: '/ListagemLaudos',
    templateUrl: 'templates/listagemLaudos.html',
    controller: 'listagemLaudosCtrl'
  })

$urlRouterProvider.otherwise('/page3')

  

});