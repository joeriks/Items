'use strict';

angular.module('itemsApp', ['windowsAzure'])
  .controller('MainCtrl', function ($scope, mobileServiceClientService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
