import * as WebSocketServer from 'ws';
let wss = new WebSocketServer.Server({ port: 8181 });
wss.on('connection', function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
        console.log(message);
    });
});

console.log('listen on 8181')

import { BasicApi } from "./api/basic";
console.log(BasicApi.heart(), BasicApi.warmup());