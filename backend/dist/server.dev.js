"use strict";

var http = require('http'); //importe le package HTTP natif de Node


var app = require('./app'); //importe l'application fonctionnant avec Express


var normalizePort = function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var errorHandler = function errorHandler(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var address = server.address();
  var bind = typeof address === 'string' ? 'pipe' + address : 'port: ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;

    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;

    default:
      throw error;
  }
}; //création d'un serveur avec une fonction exécutée à chaque appel vers ce serveur:


var server = http.createServer(app);
server.on('error', errorHandler);
server.on('listening', function () {
  var address = server.address();
  var bind = typeof address === 'string' ? 'pipe' + address : 'port' + port;
  console.log('listening on ' + bind);
});
server.listen(port); //le serveur écoute soit le port indiqué par la plateforme, soit port 3000 par défaut
//Exécuter 'node server' depuis la console pour démarrer le serveur!
//# sourceMappingURL=server.dev.js.map
