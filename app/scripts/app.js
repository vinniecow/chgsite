'use strict';

/**
 * @ngdoc overview
 * @name chgApp
 * @description
 * # chgApp
 *
 * Main module of the application.
 */
angular
  .module('chgApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl',
        controllerAs: 'services'
      })
      .when('/firm', {
        templateUrl: 'views/firm.html',
        controller: 'ServicesCtrl',
        controllerAs: 'firm'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ServicesCtrl',
        controllerAs: 'contact'
      })
      .when('/washingtonUpdate', {
        templateUrl: 'views/washingtonUpdate.html',
        controller: 'NewsCtrl',
        controllerAs: 'news'
      })
      .otherwise({
        redirectTo: '/main'
      });

   });
