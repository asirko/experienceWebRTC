'use strict';

angular.module('webRtcApp')
  .controller('ContactCtrl', function ($scope) {
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
  

    	console.log("Fonction send contact : ");
    	console.log(donneeForm);
    };

  });
