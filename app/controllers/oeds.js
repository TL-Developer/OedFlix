var Oeds = [
  {
    titulo: 'Pesca-vogais',
    caminho: 'oeds/1/index.html',
    imagem: 'oeds/1/capa.png'
  },
  {
    titulo: 'Pontuacao',
    caminho: 'oeds/2/index.html',
    imagem: 'oeds/2/capa.png'
  },
  {
    titulo: 'CH-LH-NH',
    caminho: 'oeds/3/index.html',
    imagem: 'oeds/3/capa.png'
  }
];

module.exports = function(app){

  var controller = {};

  controller.listOed = function(req, res){

    res.json(Oeds);

  };

  return controller;

};
