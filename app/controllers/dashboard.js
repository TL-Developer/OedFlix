
module.exports = function(app){

  var controller = {};

  controller.sendOed = function(req, res, next){
    console.log(req);
    res.end()
  };

  return controller;

};
