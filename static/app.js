'use strict';
(function ()
		{
var materialApp = angular
.module('materialApp', [
    'materialApp.routes',
    'ui.router',
    'ngMaterial',
    'ngSanitize',
    'jkAngularCarousel',
    'angular-carousel-3d',
    'HtmlTemplateCache',
    'appCtrl',
    'homeCtrl'
]).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('pink');
});
})();