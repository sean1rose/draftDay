'use strict';

angular.module('draftDayApp')
  .controller('StartCtrl', function ($scope, $location, DraftInputService) {
    
    var leagueParameters = {};

    $scope.leagueName;

    $scope.saveLeagueName = function(){
      console.error('$scope league name - ', $scope.leagueName);
      leagueParameters.name = $scope.leagueName;
      DraftInputService.saveLeagueName($scope.leagueName);
    };

    $scope.roundSelect;
    $scope.numberOfRounds = [{number: 12}, {number: 13}, {number: 14}, {number: 15}, {number: 16}, {number: 17}, {number: 18}, {number: 19}, {number: 20}];

    $scope.saveRoundAmount = function(){
      console.error('$scope round number - ', $scope.roundSelect);
      leagueParameters.rounds = $scope.roundSelect;
      DraftInputService.saveRounds($scope.roundSelect.number);
    };
    
    $scope.teamSelect;
    $scope.numberOfTeams = [{number: 6}, {number: 7}, {number: 8}, {number: 9}, {number: 10}, {number: 11}, {number: 12}, {number: 13}, {number: 14}, {number: 15}, {number: 16}];

    $scope.saveTeamAmount = function(){
      console.error('ng change called, heres the team number - ', $scope.teamSelect);
      leagueParameters.teams = $scope.teamSelect;
      DraftInputService.saveTeams($scope.teamSelect.number);
    };

    $scope.leagueEmail;

    $scope.saveLeagueEmail = function(){
      leagueParameters.email = $scope.leagueEmail;
      DraftInputService.saveLeagueEmail($scope.leagueEmail);
    };

    $scope.startDraft = function(){
      // save leagueParameters obj and send to backend
      console.error('saving - ', leagueParameters);
      // redirect to main
      $location.path('/');
    };


  });
