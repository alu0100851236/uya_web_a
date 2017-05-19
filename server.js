

    // importar
    var express = require('express');
     
    // instanciar
    var app = express();
     var port = 9000;
    // ruteo
    app.get('/', function(req, res){
      res.sendfile(__dirname + './index.html');
    });
    app.get('/about', function(req, res){
      res.sendfile(__dirname + './quienes_somos.html');
    });
     
    // escuchar
    app.listen(port);
     
    console.log("Servidor Express escuchando en modo %s", app.settings.env);