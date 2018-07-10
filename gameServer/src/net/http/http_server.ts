import express = require('express');
import bodyParser = require('body-parser');
import {setRouters} from './http_routes';
export class httpServer {
   static createServer(port:number) {
    var httpServer = express();
  
    httpServer.use(bodyParser.json());
    
    setRouters(httpServer);
        
    httpServer.listen(3000);
    console.log('server listen on port:3000');
    return httpServer;
  }
}
