module.exports = function(app){

  var controller = {}
    , Oeds = app.models.oeds;

  controller.listOed = function(req, res){

    Oeds.find().exec().then(function(oeds){
      res.json(oeds);
    }, function(err){
      console.log(err);
      console.log('Não foi possível listar os OEDS')
    });

  };

  controller.removeOed = function(req, res, next) {
    var _id = req.params._id;

    Oeds.remove({_id: _id}).exec().then(function(err){
      if (err){
        console.log('não foi possível remover este item');
        next(err);
      }else {
        console.log('removido com sucesso!');
        res.end();
      }
    });

    res.end();
  };

  controller.createOed = function(req, res){
    var oed = req.body;

    Oeds.create(oed, function(err){
      if(err){
        console.log('não foi possível salvar estem oed');
        res.status(500);
      }
      res.end();
    });
  };

  return controller;

};
