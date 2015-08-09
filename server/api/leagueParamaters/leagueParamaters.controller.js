'use strict';

var _ = require('lodash');
var LeagueParamaters = require('./leagueParamaters.model');

// Get list of leagueParamaterss
exports.index = function(req, res) {
  LeagueParamaters.find(function (err, leagueParamaterss) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(leagueParamaterss);
  });
};

// Get a single leagueParamaters
exports.show = function(req, res) {
  LeagueParamaters.findById(req.params.id, function (err, leagueParamaters) {
    if(err) { return handleError(res, err); }
    if(!leagueParamaters) { return res.status(404).send('Not Found'); }
    return res.json(leagueParamaters);
  });
};

// Creates a new leagueParamaters in the DB.
exports.create = function(req, res) {
  LeagueParamaters.create(req.body, function(err, leagueParamaters) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(leagueParamaters);
  });
};

// Updates an existing leagueParamaters in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  LeagueParamaters.findById(req.params.id, function (err, leagueParamaters) {
    if (err) { return handleError(res, err); }
    if(!leagueParamaters) { return res.status(404).send('Not Found'); }
    var updated = _.merge(leagueParamaters, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(leagueParamaters);
    });
  });
};

// Deletes a leagueParamaters from the DB.
exports.destroy = function(req, res) {
  LeagueParamaters.findById(req.params.id, function (err, leagueParamaters) {
    if(err) { return handleError(res, err); }
    if(!leagueParamaters) { return res.status(404).send('Not Found'); }
    leagueParamaters.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}