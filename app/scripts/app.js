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
    'app.user',
    'app.config',
    'app.report',
    'app.managers',
    'app.objects',
    'app.reportEngine',
    'app.reportTypes',
    'app.reportParamsObjects',
    'app.reportsParams',
    'app.reportObjects',
    'app.table',
    'app.dashboard'
  ])

  //Factoria para la obtención de data general para todas los controladores
.factory('dataServices', function ($http) {
  return {
        //Retorna la lista de Managers registrados
        getManagers: function () {
          return $http.get(serverURL + 'managers');
        },
       //Retorna un  Manager por ID registrado
       getManagerById: function (val) {
        return $http.get(serverURL + 'managers/'+val);
      },
          //Retorna la lista de Connections registrados
          getConnections: function () {
            return $http.get(serverURL + 'connection');
          },
        //Retorna un  Connection
        getConnectionById: function (val) {
          return $http.get(serverURL + 'connection/'+val);
        },
          //Retorna la lista de Objects registrados
          getObjects: function () {
            return $http.get(serverURL + 'objects');
          },
        //Retorna un  Objeto
        getObjectById: function (val) {
          return $http.get(serverURL + 'objects/'+val);
        },
        //Retorna listado de ReportEngines
        getReportEngines: function () {
          return $http.get(serverURL + 'reportengines');
        },
        //Retorna listado de ReportEngines
        getReportEngineById: function (val) {
          return $http.get(serverURL + 'reportengines/'+val);
        } ,
           //Retorna la lista de Tipos de Reportes
           getReportTypes: function () {
            return $http.get(serverURL + 'reporttypes');
          },
        //Retorna un Tipo de Reporte segun el ID
        getReportTypesById: function (val) {
          return $http.get(serverURL + 'reporttypes/'+val);
        },
        //Retorna un listado de los Objects Reports
        getObjectsReports: function () {
          return $http.get(serverURL + 'objectsreports');
        },
        //Retorna un ObjectReport segun el ID
        getObjectsReportsById: function (val) {
          return $http.get(serverURL + 'objectsreports/'+val);
        },
           //Retorna la lista de Tipos de parametros de reportes
           getReporstParams: function () {
            return $http.get(serverURL + 'reportsparams');
          },
        //Retorna un Tipo de parametros de reportes segun el ID
        getReportsParamsById: function (val) {
          return $http.get(serverURL + 'reportsparams/'+val);
        }


      };
    })
  .config(function ($routeProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise( '/home' );
  })
  .controller( 'AppCtrl', function AppCtrl ( $scope ) {

    $scope.user={};
     $scope.showLogin=true; 
    $scope.user.email='clmg1010@gmail.com';    
    $scope.user.password='123456789'; 

      $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Lykos' ;
    }
  });

      
    $scope.Menu = [];
     $scope.Menu = [];
  
  $scope.Menu = [
   {
    'name': 'Dashboard',
    'route': 'dashboard',
    'id': '1',
    'active': true,
    'icon': 'fa fa-pie-chart'
  },
  {
    'name': 'Reportes',
    'route': 'report',
    'id': '1',
    'active': true,
    'icon': 'fa fa-bars'
  },
  {
    'name': 'Usuarios',
    'route': '#',
    'id': '1',
    'active': true,
    'icon': 'fa fa-users',
    'SubMenu': [{
        'name': 'Usuarios',
        'route': 'user',
        'id': '1',
        'active': true,
        'icon': 'fa fa-users'
      },{
        'name': 'Roles',
        'route': 'config',
        'id': '1',
        'active': true,
        'icon': 'fa fa-users'
      },{
        'name': 'Reportes vs Roles',
        'route': 'config',
        'id': '1',
        'active': true,
        'icon': 'fa fa-users'
      }]

  },
  {
    'name': 'Configuracion',
    'route': 'config',
    'id': '1',
    'active': true,
    'icon': 'fa fa-gears',
    'SubMenu': [{
        'name': 'Managers',
        'route': 'config',
        'id': '1',
        'active': true,
        'icon': 'fa fa-gears'
      },{
        'name': 'Conexiónes',
        'route': 'config',
        'id': '1',
        'active': true,
        'icon': 'fa fa-gears'
      },{
        'name': 'Objectos',
        'route': 'config',
        'id': '1',
        'active': true,
        'icon': 'fa fa-gears'
      },{
        'name': 'Report Engine',
        'route': 'config',
        'id': '1',
        'active': true,
        'icon': 'fa fa-gears'
      },{
        'name': 'Report Types',
        'route': 'config',
        'id': '1',
        'active': true,
        'icon': 'fa fa-gears'
      },{
        'name': 'Report Objects',
        'route': 'config',
        'id': '1',
        'active': true,
        'icon': 'fa fa-gears'
      },{
        'name': 'Report Params',
        'route': 'config',
        'id': '1',
        'active': true,
        'icon': 'fa fa-gears'
      },{
        'name': 'Report Params Objects',
        'route': 'config',
        'id': '1',
        'active': true,
        'icon': 'fa fa-gears'
      }]

  }];


  });
 