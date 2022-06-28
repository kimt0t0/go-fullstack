"use strict";

var http = require('http'); //importe le package HTTP natif de Node


var app = require('./app'); //importe l'application fonctionnant avec Express


app.set('port', process.env.PORT || 3000); //création d'un serveur avec une fonction exécutée à chaque appel vers ce serveur:

var server = http.createServer(function (req, res) {
  res.end("Voici la réponse du serveur!"); //réponse du serveur à l'appelant
});
server.listen(process.env.PORT || 3000); //le serveur écoute soit le port indiqué par la plateforme, soit port 3000 par défaut
//Exécuter 'node server' depuis la console pour démarrer le serveur!
//# sourceMappingURL=server.dev.js.map
