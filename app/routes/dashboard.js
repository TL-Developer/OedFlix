module.exports = function(app){

  var controller = app.controllers.dashboard;

  app.route('/saveFileAndUpload')
    .post(controller.saveFileAndUpload);

};
