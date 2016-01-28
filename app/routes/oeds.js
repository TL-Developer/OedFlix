module.exports = function(app){

  var controller = app.controllers.oeds;

  app.route('/oeds')
    .get(controller.listOed);

};
