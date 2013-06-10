'use strict';
/*global app: false */

app.controller('BaseballCtrl', function ($scope, baseballSvc) {
  $scope.teams = baseballSvc.getTeams();
});

app.factory('baseballSvc', function () {
  var svc = {};

  svc.getTeams = function () {
    return {
      'Red Sox': {
        name: 'Red Sox',
        city: 'Boston'
      },
      Yankees: {
        city: 'New York',
        name: 'Yankees'
      },
      Orioles: {
        city: 'Baltimore',
        name: 'Orioles'
      },
      Buccaneers: {
        city: 'Tampa Bay',
        name: 'Buccaneers'
      },
      'Blue Jays': {
        city: 'Toronto',
        name: 'Blue Jays'
      }
    };
  };

  return svc;
});
