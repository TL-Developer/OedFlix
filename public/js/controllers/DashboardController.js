angular.module('OedFlix').controller('DashboardController',['$scope','Oeds','Disciplinas', function($scope, Oeds, Disciplinas){

  $scope.filtro = '';


  // Lista Oeds
  $scope.oeds = [];

  Oeds.query(function(oeds){
    $scope.oeds = oeds;
  }, function(err){
    console.log(err);
    console.log('Não foi possível listar os oeds')
  });


  // Lista Disciplinas
  $scope.disciplinas = [];

  Disciplinas.query(function(disciplinas){
    $scope.disciplinas = disciplinas;
  }, function(err){
    console.log(err);
    console.log('Não foi possível listar as disciplinas')
  });

}]);
