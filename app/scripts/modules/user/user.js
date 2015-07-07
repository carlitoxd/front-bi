angular.module( 'app.user', [
  'ui.router',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'user', {
    url: '/user',
    views: {
      "main": {
        controller: 'UserCtrl',
        templateUrl: 'scripts/modules/user/user.tpl.html'
      }
    },
    data:{ pageTitle: 'Users' }
  });
})
.controller( 'UserCtrl', function UserCtrl( $scope, dataServices,$http,$timeout) {

  
});
