angular.module('OedFlix').controller('DashCadastrarController',['$scope','Oeds','Disciplinas', function($scope, Oeds, Disciplinas, $http){

  $scope.disciplinas = [];

  Disciplinas.query(function(disciplinas){
    $scope.disciplinas = disciplinas;
  }, function(err){
    console.log(err);
    console.log('Não foi possível obter as disciplinas')
  });


}]);
