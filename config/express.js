var express = require('express')
  , load = require('express-load')
  , bodyParser = require('body-parser')
  , flash = require('connect-flash')
  , expressSession = require('express-session')
  , cookieParser = require('cookie-parser');

module.exports = function(){
  var app = express();

  app.set('port', process.env.PORT | 3000);

  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());
  app.use(cookieParser());
  app.use(expressSession({secret: 'mySecretKey'}));
  app.use(flash());

  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};
