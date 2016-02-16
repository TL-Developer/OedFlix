var disciplinas = [
  {nome: 'Portugues', qtdOeds: 5},
  {nome: 'Matemática', qtdOeds: 3},
  {nome: 'Geôgrafia', qtdOeds: 2},
  {nome: 'Ciências', qtdOeds: 3},
  {nome: 'História', qtdOeds: 1},
  {nome: 'Espanhol', qtdOeds: 2}
];

module.exports = function(){

  var controller = {};

  controller.getDisciplinas = function(req, res){
    res.json(disciplinas);
  };

  return controller;
};
