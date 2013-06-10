'use strict';
/*global $: false, angular: false */

// Create the main module that represents the whole application.
// The empty array must be passed even when the module
// doesn't depend on any other modules.
// Otherwise it tries to return a reference to an existing module.
var app = angular.module('RoutesDemo', []);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/baseball', {
      templateUrl: 'partials/baseball.html',
      controller: 'BaseballCtrl'
    })
    .when('/hockey', {
      templateUrl: 'partials/hockey.html',
      controller: 'HockeyCtrl'
    })
    .otherwise({
      redirectTo: '/baseball'
    });
});

app.controller('NavCtrl', function ($scope, $location) {
  //$locationProvider.html5mode(true);

  var ul = $('ul.nav');

  $scope.setRoute = function (event) {
    event.preventDefault(); // IMPORTANT!

    var name = event.target.id;

    // Change the selected nav button.
    ul.children('li.active').removeClass('active');
    ul.find('li > a#' + name).parent().addClass('active');

    $location.path('/' + name);
  };

  // Force starting with baseball on refresh.
  $location.path('/baseball');
});
