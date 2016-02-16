module.exports = function(app){

  var controller = app.controllers.disciplinas;

  app.route('/dashboard/disciplinas')
    .get(controller.getDisciplinas);

};
