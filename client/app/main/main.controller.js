'use strict';

angular.module('draftDayApp')
  .controller('MainCtrl', function ($q, $scope, $http, socket, DraftInputService) {
    
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };


    $scope.leagueName = DraftInputService.getLeagueName();
    console.error('name of the league - ', $scope.leagueName);
    $scope.numberOfRounds = DraftInputService.getRounds();
    console.error('rounds - ', $scope.numberOfRounds);
    $scope.numberOfTeams = DraftInputService.getTeams();
    console.error('teams - ', $scope.numberOfTeams);


    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
