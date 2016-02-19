var mongoose = require('mongoose');

module.exports = function(){

  var Schema = new mongoose.Schema({
    nome: {
      type: String,
      required: true
    }
  });

  return mongoose.model('Disciplinas', Schema);

};
