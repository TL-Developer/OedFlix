angular.module('OedFlix').controller('OedsController',['$scope','Oeds', function($scope, Oeds){

  $scope.oeds = [];

  Oeds.query(function(oeds){
    $scope.oeds = oeds;
    console.log($scope.oeds);
  }, function(err){
    console.log(err);
    console.log('Não foi possível listar os oeds')
  });

}]);
