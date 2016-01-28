angular.module('OedFlix').factory('Oeds', ['$resource', function($resource){

  return $resource('/oeds');

}]);
