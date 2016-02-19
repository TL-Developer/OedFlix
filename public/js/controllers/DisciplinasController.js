angular.module('OedFlix').controller('DisciplinasController',['$scope','Disciplinas','$http','$timeout', function($scope, Disciplinas, $http,$timeout){

  $scope.disciplinas = [];
  $scope.mensagem = '';

  Disciplinas.query(function(disciplinas){
    $scope.disciplinas = disciplinas;
  }, function(err){
    console.log(err);
    console.log('Não foi possível obter as disciplinas')
  });

  $scope.addDisciplina = function(){
    var disciplina = {nome: this.disciplina};
    $http.post('/dashboard/disciplinas', disciplina).then(function(data){
        $scope.mensagem = 'Discplina salva com sucesso';
        $timeout(function() {
            $scope.mensagem = '';
        }, 3000);
        $scope.disciplinas.push(disciplina);
      }, function(err) {
        console.log(err);
        $scope.mensagem = 'Não foi possível salvar a disciplina';
        $timeout(function() {
            $scope.mensagem = '';
        }, 2000);
      });
  };

  $scope.removeDisciplina = function(disciplina){

  };

}]);
