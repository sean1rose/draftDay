'use strict';

angular.module('draftDayApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('start', {
        url: '/start',
        templateUrl: 'app/start/start.html',
        controller: 'StartCtrl'
      });
  });