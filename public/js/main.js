angular.module('OedFlix', ['ngRoute']).config(function($routeProvider){

  $routeProvider.when('/oeds', {
    templateUrl: 'partials/oeds.html',
    controller: 'OedsController'
  })

  .otherwise({redirectTo: '/oeds'});

});
