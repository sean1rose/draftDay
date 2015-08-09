'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LeagueParamatersSchema = new Schema({
  name: String,
  rounds: Number,
  teams: Number,
  email: String,
});

module.exports = mongoose.model('LeagueParamaters', LeagueParamatersSchema);