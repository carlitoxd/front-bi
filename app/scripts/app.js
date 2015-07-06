'use strict';

/**
 * @ngdoc overview
 * @name App
 * @description
 * # App
 *
 * Main module of the application.
 */

var serverURL = 'http://localhost:1337/';


angular
  .module('app', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'app.home',
  ])
  .config(function ($routeProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise( '/home' );
  })
  .controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
    $scope.Menu = [];
     $scope.Menu = [];
  
  $scope.Menu = [
   {
    "name": "Dashboard",
    "route": "dashboard",
    "id": "1",
    "active": true,
    "icon": "fa fa-pie-chart"
  },
  {
    "name": "Reportes",
    "route": "report",
    "id": "1",
    "active": true,
    "icon": "fa fa-bars"
  },
  {
    "name": "Usuarios",
    "route": "config",
    "id": "1",
    "active": true,
    "icon": "fa fa-users",
    "SubMenu": [{
        "name": "Usuarios",
        "route": "config",
        "id": "1",
        "active": true,
        "icon": "fa fa-users"
      },{
        "name": "Roles",
        "route": "config",
        "id": "1",
        "active": true,
        "icon": "fa fa-users"
      },{
        "name": "Reportes vs Roles",
        "route": "config",
        "id": "1",
        "active": true,
        "icon": "fa fa-users"
      }]

  }];
  });
 