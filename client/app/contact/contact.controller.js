'use strict';

angular.module('webRtcApp')
.controller('ContactCtrl', function ($scope, $http) {
 $scope.formContact = {};
 $scope.errors = {};

 var donneeForm = {
    name: "",
    email: "",
    message: ""
  };

    // Fonctions contact
    $scope.sendContact = function(contactForm){
      donneeForm.name =  $scope.formContact.name;
      donneeForm.email = $scope.formContact.email;
      donneeForm.message = $scope.formContact.message;

      $http.post('/api/contacts', donneeForm).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log(response);
      });
    }

});
