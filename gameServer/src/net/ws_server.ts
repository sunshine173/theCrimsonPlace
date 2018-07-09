import * as WebSocketServer from 'ws';
let wss = new WebSocketServer.server({ port: 8181 });
wss.on('connection', function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
        console.log(message);
    });
});

console.log('listen on 8181')