'use strict';

//index, navbar controller
app.controller('loginCtrl', function ($scope, $state, $rootScope, userService) {
  if (localStorage.getItem("token")) {
    $state.go('dashboard');
  }

  $rootScope.loggedIn = !localStorage.getItem("token");

  $scope.register = function (user) {
    userService.register(user)
      .then(function (resp) {
        localStorage.setItem("token", resp.data);
        $rootScope.loggedIn = !localStorage.getItem("token");
        $scope.go('dashboard');
      }, function (err) {
        console.error(err.data);
        $scope.error = err.data;
      });
  }

  $scope.login = function () {
    userService.login($scope.loginEmail, $scope.loginPassword)
      .then(function (resp) {
        localStorage.setItem("token", resp.data);
        $rootScope.loggedIn = !localStorage.getItem("token");
        $state.go('dashboard');
      }, function (err) {
        $scope.error = err.data;
      });
  }

  $scope.logout = function () {
    localStorage.removeItem("token");
    $rootScope.loggedIn = !localStorage.getItem("token");
    $state.go('home');
  }

});
