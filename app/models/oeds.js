var mongoose = require('mongoose');

module.exports = function(){

  var Schema = new mongoose.Schema({
    titulo: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    disciplina: {
      type: String,
      required: true
    },
    ano: {
      type: Number,
      required: true
    },
    created: {
      type: Date,
      default: Date.now
    }
  });

  return mongoose.model('Oeds', Schema);

};
