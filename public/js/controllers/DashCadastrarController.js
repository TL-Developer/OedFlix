angular.module('OedFlix').controller('DashCadastrarController',['$scope','Oeds','Disciplinas','$http', '$timeout', function($scope, Oeds, Disciplinas, $http, $timeout){


  $scope.mensagem = '';
  $scope.oedEnviado = '';
  $scope.disciplinas = [];

  Disciplinas.query(function(disciplinas){
    $scope.disciplinas = disciplinas;
  }, function(err){
    console.log(err);
    console.log('Não foi possível obter as disciplinas')
  });

  $scope.enviarOed = function(){
    $scope.oedEnviado = 'ok';
  };

  $scope.cadastrarOed = function(oed){

    var extension = oed.path.substr(oed.path.length - 4);

    var newOed = {
      titulo: oed.titulo,
      disciplina: oed.disciplina,
      ano: oed.ano,
      path: oed.path = oed.path.replace(extension, '')
    };

    $http.post('/oeds', newOed).then(function(success){
      $scope.mensagem = 'oed cadastrado com sucesso!';

      $timeout(function(){
        $scope.mensagem = '';
      }, 3000);

    }, function(err){
      $scope.mensagem = 'não foi possível cadastrar este oed';
    });
  };

  $scope.uploadRarOrZip = false;

  $scope.fileNameChanged = function(file){
    var fileName = file[0].name;

    if(fileName.search(/.zip/i) != -1 || fileName.search(/.rar/i) != -1){
      $scope.uploadRarOrZip = true;
    }else{
      console.log('não')
    }
  };


}]);
