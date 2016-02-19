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
    // Retirando extensão .rar ou .zip para salvar
    var extension = oed.path.substr(oed.path.length - 4);
    oed.path = oed.path.replace(extension, '');
    console.log(oed);
    $scope.mensagem = 'Oed cadastrado com sucesso';
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
