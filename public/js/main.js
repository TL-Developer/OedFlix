angular.module('OedFlix', ['ngRoute','ngResource', 'MyDirectives','ngAnimate']).config(function($routeProvider){

  $routeProvider
    .when('/oeds', {
      templateUrl: 'partials/oeds.html',
      controller: 'OedsController'
    })

    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'DashboardController'
    })

    .when('/dashboard/cadastrar', {
      templateUrl: 'partials/dashboard-cadastrar.html',
      controller: 'DashCadastrarController'
    })

    .when('/dashboard/disciplinas', {
      templateUrl: 'partials/dashboard-disciplinas.html',
      controller: 'DisciplinasController'
    })

  .otherwise({redirectTo: '/oeds'});

});
