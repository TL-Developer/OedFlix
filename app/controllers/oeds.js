var Oeds = [
  {
    titulo: 'Pesca vogais',
    caminho: 'oeds/1/index.html',
    imagem: 'oeds/1/capa.png',
    disciplina: 'Portugues',
    ano: 5
  },
  {
    titulo: 'Pontuacão',
    caminho: 'oeds/2/index.html',
    imagem: 'oeds/2/capa.png',
    disciplina: 'Matemática',
    ano: 5
  },
  {
    titulo: 'Ch lh e nh',
    caminho: 'oeds/3/index.html',
    imagem: 'oeds/3/capa.png',
    disciplina: 'Ciências',
    ano: 5
  }
];

module.exports = function(app){

  var controller = {};

  controller.listOed = function(req, res){

    res.json(Oeds);

  };

  return controller;

};
