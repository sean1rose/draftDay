/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var LeagueParamaters = require('./leagueParamaters.model');

exports.register = function(socket) {
  LeagueParamaters.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  LeagueParamaters.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('leagueParamaters:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('leagueParamaters:remove', doc);
}