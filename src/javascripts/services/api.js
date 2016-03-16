'use strict';

app.service('api', function($http) {

  this.getBills = function (){
    return $http.get('/bills');
  }
});
