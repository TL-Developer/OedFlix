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

  return controller;

};
