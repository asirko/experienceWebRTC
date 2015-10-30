'use strict';

angular.module('webRtcApp').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state('admin', {
							        url: '/admin',
							        templateUrl: 'app/admin/admin.html',
							        controller: 'AdminCtrl'
      				 			 }
  					)
	      			.state('admin.accounts', {
							      					url: '/liste-comptes-utilisateurs',
							      					templateUrl: 'app/admin/contactListing/contactListing.html',
							      					controller: 'ContactListingCtrl',
							      					controllerAs: 'test'

	  					 							}
	  				)


	  				;

		$urlRouterProvider.otherwise("/");
		$locationProvider.html5Mode(true);
  });