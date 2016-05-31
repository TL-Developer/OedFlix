module.exports = function(app){

  var controller = app.controllers.oeds;

  app.route('/oeds')
    .get(controller.listOed)
    .post(controller.createOed);

  app.route('/oeds/:_id')
    .delete(controller.removeOed);

};
