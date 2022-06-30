const http = require('http'); //importe le package HTTP natif de Node
const app = require('./app'); //importe l'application fonctionnant avec Express

const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port: ' + port;
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
}

//création d'un serveur avec une fonction exécutée à chaque appel vers ce serveur:
const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port' + port;
    console.log('listening on ' + bind);
})

server.listen(port); //le serveur écoute soit le port indiqué par la plateforme, soit port 3000 par défaut

//Exécuter 'node server' depuis la console pour démarrer le serveur!
