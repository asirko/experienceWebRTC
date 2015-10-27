'use strict';

describe('Controller: ContactListingCtrl', function () {

  // load the controller's module
  beforeEach(module('webRtcApp'));

  var ContactListingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactListingCtrl = $controller('ContactListingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
