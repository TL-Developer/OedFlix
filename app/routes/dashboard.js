module.exports = function(app){

  var controller = app.controllers.dashboard;

  app.route('/dashboard/sendOed')
    .post(controller.sendOed);

};
