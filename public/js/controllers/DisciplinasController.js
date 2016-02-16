angular.module('OedFlix').controller('DisciplinasController',['$scope','Disciplinas', function($scope, Disciplinas, $http){

  $scope.disciplinas = [];

  Disciplinas.query(function(disciplinas){
    $scope.disciplinas = disciplinas;
  }, function(err){
    console.log(err);
    console.log('Não foi possível obter as disciplinas')
  });

  $scope.addDisciplina = function(){
    var disciplina = this.disciplina;
    $scope.disciplinas.push({nome: disciplina, qtdOeds: 0});
  };

  $scope.removeDisciplina = function(disciplina){
    var index = $scope.disciplinas.indexOf(disciplina);
    $scope.disciplinas.splice(index, 1);
  };

}]);
