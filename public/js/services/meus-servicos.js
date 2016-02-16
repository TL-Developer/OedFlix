angular.module('OedFlix')

.factory('Oeds', ['$resource', function($resource){
  return $resource('/oeds');
}])
.factory('Disciplinas', ['$resource', function($resource){
  return $resource('/dashboard/disciplinas');
}]);
