var unzip = require('unzip');


module.exports = function(app){

  var controller = {};

  controller.saveFileAndUpload = function(req, res){

    // ENVIAND E DEZIPANDO ARQUIVO .RAR
    var multiparty = require('multiparty');
    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files){

      var file = files.file[0];
      var fs = require('fs');

      fs.readFile(file.path, function(err, data){

        var path = './public/oeds/'+file.originalFilename;

        fs.writeFile(path, data, function(error){
          if(error){
            console.log('Não foi possível enviar a imagem', error);
          }else{
            req.flash('info', 'Flash is back!');

            fs.createReadStream('./public/oeds/'+file.originalFilename).pipe(unzip.Extract({ path: './public/oeds' }));

            fs.unlink(path, function (e) {
              if (e) throw e;
            });

            res.sendfile('./public/partials/upload-oed-success.html');

          }
        });

      });
    });
  };

  return controller;

};
