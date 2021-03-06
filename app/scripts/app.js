'use strict';

angular.module('itemsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'windowsAzure'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
    })
      .otherwise({
        redirectTo: '/'
      });
  });
