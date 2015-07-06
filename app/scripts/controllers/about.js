'use strict';

/**
 * @ngdoc function
 * @name carlosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the carlosApp
 */
angular.module('carlosApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
