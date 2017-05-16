'use strict';
(function ()
		{
angular.module('appCtrl', [])
.controller('appCtrl', function($mdSidenav, $stateParams, $rootScope, $scope) {

    self = this;

    $scope.apploaded = true;

    // Update title using rootscope
    self.updateTitle = function() {
        $rootScope.title = $stateParams.title;
    }

    // Run updateTitle on each state change
    $rootScope.$on('$stateChangeSuccess', self.updateTitle);

	self.toggleLeft = function() {
    	$mdSidenav('left').toggle();
    }

    self.toggleRight = function() {
    	$mdSidenav('right').toggle();
    }

});
})();