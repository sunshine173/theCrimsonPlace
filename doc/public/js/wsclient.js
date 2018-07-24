const reqList = {};

var reqIndex = 0;

function Client(onReady, onMsg) {
    var self = this;
    var ws;
    this.createConnect(onReady, onMsg);
}

Client.prototype.createConnect = function(onReady, onMsg) {
    var self = this;
    this.ws = new WebSocket('ws://172.16.15.14:8080');

    this.ws.onopen = function connection() {
        console.log('on open')
        onReady(self.ws);
    };

    this.ws.onmessage = function incoming(message) {
        let cmd = decode(message.data);
        if (cmd && reqList[cmd.index]) {
            reqList[cmd.index](cmd.result);
            delete reqList[cmd.index];
        }
        if (cmd && cmd.type == 'msg') {
            onMsg(cmd);
        }
    };

    this.ws.onerror = function(err) {
        if (self.ws.readyState != 1) {
            //reconnect
        }
    };

    this.ws.onclose = function() {
        console.log('close');
        //reconnect
        self.ws.close();
        self.createConnect(onReady, onMsg);
    };
}

function decode(pack) {
  try {
    var cmd = JSON.parse(pack);
    return cmd;
  }
  catch (e) {
    console.log(e);
  }
  return null;
}

Client.prototype.send = function(method) {
    callback = arguments[arguments.length-1];

    params = [];
    for (var i = 1; i < arguments.length-1; i++) {
        params.push(arguments[i]);
    }

    if (this.ws.readyState == 1) {
        reqList[reqIndex] = callback;
        this.ws.send(JSON.stringify({index:reqIndex, method:method, params:params}))
        reqIndex++;
    }
}

