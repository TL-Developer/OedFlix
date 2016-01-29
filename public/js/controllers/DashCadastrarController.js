angular.module('OedFlix').controller('DashCadastrarController',['$scope','Oeds', function($scope, Oeds){

  $scope.dropzoneConfig = {
    'options': {
      'url': '/dashboard/sendOed'
    },
    'eventHandlers': {
      'sending': function (file, xhr, formData) {
        console.log('sending');
      },
      'success': function (file, response) {
        console.log('success');
        console.log(file);
        console.log(response);
      }
    }
  };

}]);
