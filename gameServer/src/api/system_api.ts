export function heart(callback) {
    return callback(null, 'ok');
}

export function warmup(callback) {
    return callback(null, {success:true});
}

export function testError(callback) {
    return callback(new Error('testError'));
}

export function testPost(params, callback) {
    return callback(null, params);
}