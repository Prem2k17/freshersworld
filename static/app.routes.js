'use strict';
(function ()
		{		  
angular.module('materialApp.routes', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/home');

    // UI Router States
    // Inserting Page title as State Param
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/views/home.html',
            controller:'homeCtrl',
            params: {
                title: "Freshersworld"
            }
        });

    

});

})();