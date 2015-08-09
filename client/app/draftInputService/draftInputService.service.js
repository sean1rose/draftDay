'use strict';

angular.module('draftDayApp')
	.service('DraftInputService', function () {
		// AngularJS will instantiate a singleton by calling "new" on this function

		var rounds, teams, leagueName, leagueEmail;

		this.saveLeagueName = function(name){
			console.error('in service - saving leagues name - ', name);
			leagueName = name;
		};

		this.getLeagueName = function(){
			return leagueName;
		};

		this.saveRounds = function(number){
			// saves # of rounds in draft inputted by user in start component
			console.error('in service, saving # of rounds - ', number);
			rounds = number;
		};

		this.getRounds = function(){
			// returns # of rounds of draft, for use in main
			return rounds;
		};

		this.saveTeams = function(number){
			// saves # of teams in draft inputted by user in start component
			console.error('in service, saving # of teams - ', number);
			teams = number;
		};

		this.getTeams = function(){
			// returns # of teams, for use in main
			return teams;
		};

		this.saveLeagueEmail = function(email){
			console.error('in service - saving league email - ', email);
			leagueEmail = email;
		};

		this.getLeagueEmail = function(){
			return leagueEmail;
		};

	});
