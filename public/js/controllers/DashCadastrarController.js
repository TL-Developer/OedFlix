angular.module('OedFlix').controller('DashCadastrarController',['$scope','Oeds','Disciplinas','$http', function($scope, Oeds, Disciplinas, $http){


  $scope.mensagem = '';

  $scope.disciplinas = [];

  Disciplinas.query(function(disciplinas){
    $scope.disciplinas = disciplinas;
  }, function(err){
    console.log(err);
    console.log('Não foi possível obter as disciplinas')
  });

  $scope.enviarOed = function(form){
    $scope.oedEnviado = 'ok';
  };

  $scope.cadastrarOed = function(oed){
    console.log(oed);
    $scope.mensagem = 'Oed cadastrado com sucesso';
  };


}]);
