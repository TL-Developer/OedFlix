angular.module('OedFlix').controller('OedsController',['$scope','Oeds','Disciplinas', function($scope, Oeds, Categorias){

  $scope.filtro = '';

  // Listando Oeds
  $scope.oeds = [];

  Oeds.query(function(oeds){
    $scope.oeds = oeds;
  }, function(err){
    console.log(err);
    console.log('Não foi possível listar os oeds')
  });


  // Listando Categorias
  $scope.disciplinas = [];

  Categorias.query(function(disciplinas){
    $scope.disciplinas = disciplinas;
  }, function(err){
    console.log('Não foi possível listar as disciplinas');
    console.log(err);
  });

}]);
