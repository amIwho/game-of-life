require('./staticServer');

const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({port: 3001});

wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    ws.send(message);
  });
  ws.send('something');
});