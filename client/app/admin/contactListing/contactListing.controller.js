'use strict';

angular.module('webRtcApp')
  .controller('ContactListingCtrl', function ($scope) {
    $scope.message = 'Hello';
    var vm = this;
    vm.hello = function () {
    	alert ("coucou");
    };
  });
