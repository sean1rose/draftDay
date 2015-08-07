'use strict';

angular.module('draftDayApp')
	.service('DraftInputService', function () {
		// AngularJS will instantiate a singleton by calling "new" on this function

		var rounds, teams;

		this.saveRounds = function(number){
			// saves # of rounds in draft inputted by user in start component
			rounds = number;
		};

		this.getRounds = function(){
			// returns # of rounds of draft, for use in main
			return rounds;
		}

		this.saveTeams = function(number){
			// saves # of teams in draft inputted by user in start component
			teams = number;
		};

		this.getTeams = function(){
			// returns # of teams, for use in main
			return teams;
		}

	});
