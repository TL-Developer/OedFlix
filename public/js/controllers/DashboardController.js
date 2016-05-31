angular.module('OedFlix').controller('DashboardController',['$scope','Oeds','Disciplinas', '$http', '$timeout', function($scope, Oeds, Disciplinas, $http, $timeout){

  $scope.filtro = '';

  $scope.mensagem = '';


  // Lista Oeds
  $scope.oeds = [];

  var listaOeds = function(){
    Oeds.query(function(oeds){
      $scope.oeds = oeds;
    }, function(err){
      console.log(err);
      console.log('Não foi possível listar os oeds')
    });
  };
  listaOeds();

  // Lista Disciplinas
  $scope.disciplinas = [];

  Disciplinas.query(function(disciplinas){
    $scope.disciplinas = disciplinas;
  }, function(err){
    console.log(err);
    console.log('Não foi possível listar as disciplinas')
  });

  // DELETe
  $scope.removeOed = function(oed){
    var _id = oed._id;

    $http.delete('/oeds/'+_id).then(function(success){
      $scope.mensagem = 'oed removido com sucesso';
        listaOeds();
    }, function(err){
      console.log(err);
      $scope.mensagem = 'não foi possível remover estem oed';
        listaOeds();

      $timeout(function(){
        $scope.mensagem = '';
      }, 3000);
    });
  };

}]);
