module.exports = function(app){

  var controller = {}
    , Disciplinas = app.models.disciplinas;


  // RETRIVE
  controller.getDisciplinas = function(req, res){
    Disciplinas.find().exec().then(function(disciplinas){
      res.json(disciplinas);
    }, function(err){
      console.log('Não foi possível listar as disciplinas');
      console.log(err);
    });
  };

  // CREATE
  controller.saveDisciplinas = function(req, res){
    var disciplina = req.body
      , _id = req.body._id;

    if(_id){
      Disciplinas.findByIdAndUpdate(_id, req.body).exec().then(function(disciplina){
        res.json(disciplina);
      },
      function(erro){
        console.error(erro);
        res.status(500).json(erro);
      });
    }else{
      Disciplinas.create(disciplina).then(function(disciplina){
        res.status(201).json(disciplina);
      },
      function(erro){
        console.log(erro);
        res.status(500).json(erro);
      });
    }

    res.end();
  };

  // DELETE
  controller.removeDisciplinas = function(req, res){
    console.log(req.body);
  };

  // UPDATE

  return controller;
};
