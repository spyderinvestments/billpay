'use strict';

var app = angular.module('mainApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', { url: '/', templateUrl: '/templates/home.html' })
    .state('login', { url: '/login', templateUrl: './templates/login.html', controller: 'loginCtrl' })
    .state('dashboard', { url: '/dashboard', templateUrl: './templates/dashboard.html', controller: 'dashboardCtrl' })

})

.run(function(){
  console.log('Ready');
})
