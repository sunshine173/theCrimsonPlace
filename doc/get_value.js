module.exports = function safeGetValue(obj, path) {
  var pathArr = path.split('.');
  var tempNode = obj;
  for (var i = 0; i < pathArr.length; i++) {
    tempNode = tempNode[pathArr[i]];
    if (tempNode === undefined || tempNode === null) {
      return undefined;
    }
  }

  return tempNode;
};