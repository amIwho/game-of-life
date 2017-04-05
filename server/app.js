require('./staticServer');
const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({port: 3001});
const socketHandler = require('./socketHandler');

wss.binaryType = "arraybuffer";
wss.on('connection', socketHandler);
