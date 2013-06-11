'use strict';
/*global $: false, angular: false */

// Create the main module that represents the whole application.
// The empty array must be passed even when the module
// doesn't depend on any other modules.
// Otherwise it tries to return a reference to an existing module.
var app = angular.module('RoutesDemo', ['ui.state', 'my-directives']);

/*
app.config(function ($routeProvider) {
  $routeProvider
    .when('/baseball', {
      templateUrl: 'partials/baseball.html',
      view: 'center'
      // don't need to specify if ng-controller is used in baseball.html
      //controller: 'BaseballCtrl'
    })
    .when('/hockey', {
      templateUrl: 'partials/hockey.html',
      view: 'center'
      // don't need to specify if ng-controller is used in hockey.html
      //controller: 'HockeyCtrl'
    })
    .otherwise({
      redirectTo: '/baseball'
    });
*/
app.config(function ($stateProvider) {
  $stateProvider
    .state('baseball', {
      url: '/baseball',
      views: {
        'center': {
          templateUrl: 'partials/baseball.html'
        },
        'logo': {
          templateUrl: 'partials/mlb.html'
        }
      }
    })
    .state('hockey', {
      url: '/hockey',
      views: {
        'center': {
          templateUrl: 'partials/hockey.html'
        },
        'logo': {
          templateUrl: 'partials/nhl.html'
        }
      }
    });
});

app.controller('NavCtrl', function ($scope, $location, $state) {
  var ul = $('ul.nav');

  function selectNavButton(sport) {
    ul.children('li.active').removeClass('active');
    ul.find('li > a#' + sport).parent().addClass('active');
  }

  $scope.setRoute = function (event) {
    event.preventDefault(); // IMPORTANT!
    var sport = event.target.id;
    selectNavButton(sport);
    $location.path('/' + sport);
  };

  var sport = $location.path().substring(1); // removes leading slash
  if (!sport) sport = 'baseball';
  $state.transitionTo(sport); // sets the initial state
  selectNavButton(sport);
});
