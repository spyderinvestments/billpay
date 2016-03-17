'use strict';

app.service('userService', function($http, $state) {

  this.register = function(user) {
    return $http({
      method: 'POST',
      url: '/users/register',
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`
      },
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      }
    });

  }

  this.login = function(email, password) {
    return $http({
      method: 'POST',
      url: '/users/login',
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`
      },
      data: {
        email: email,
        password: password,
      }
    });
  }


});
