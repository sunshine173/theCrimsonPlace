//http请求路由
import api =  require('../../api/system_api');

export function setRouters(httpServer) {
    httpServer.get('/api/basic/:apiname', onRequest);
    httpServer.post('/api/basic/:apiname', onRequest);
}

function onRequest(req, res,next) {
    let apiName = req.params.apiname;
    if (apiName && api[apiName]) {
        let params = req.body || {};
        api[apiName].call(null, params, normalCallback.bind(res));
    }
    else {
        return res.send(`Unknown api ${apiName}`);
    }
  }

function normalCallback(err, result) {
    if (err) return this.send({status:500, msg:err.message});
    return this.send(result);
}