module.exports = function(app){

  var controller = app.controllers.dashboard;

  app.route('/dashboard/cadastrar')
    .post(controller.saveFileAndUpload);

};
