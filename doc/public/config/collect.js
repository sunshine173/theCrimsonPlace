module.exports = [
  {
    "apiDescription": "1 检查商品是否已收藏",
    "apiName": "get collection prod",
    "path": "usercenter/collection/prod",
    "apiGroup": "collection",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "prodid":""
    },
    "paramsDesc": {
      "prodid":"商品id"
    },
    "success":{
      "isCollect":true
    },
    "successDesc": {
      "isCollect":"false:未收藏 <br/>true:已收藏"
    }
  },
  {
    "apiDescription": "2 删除(取消)商品收藏(批量)",
    "apiName": "del collection prod",
    "path": "usercenter/collection/prod",
    "apiGroup": "collection",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "delete",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "prodids":[""]
    },
    "paramsDesc": {
      "prodids":"商品ids"
    },
    "success":{
      "success":true
    },
    "successDesc": {
      "success":"是否删除成功"
    }
  },
  {
    "apiDescription": "3 收藏商品(上限2000)",
    "apiName": "post collection prod",
    "path": "usercenter/collection/prod",
    "apiGroup": "collection",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "prodid":"",
      "sellerid":1
    },
    "paramsDesc": {
      "prodid":"商品id",
      "sellerid":"商家id"
    },
    "success":{
      "success":true
    },
    "successDesc": {
      "success":"是否收藏成功"
    }
  },
  {
    "apiDescription": "4 收藏的商品列表页",
    "apiName": "get collection prod List",
    "path": "usercenter/collection/prodlist",
    "apiGroup": "collection",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "[lastaddtime]":0,
      "pagesize":10
    },
    "paramsDesc": {
      "[lastaddtime]":"最后一个商品的收藏时间(第一次不传)",
      "pagesize":"一页商品个数(上限10)"
    },
    "success":{
      "totalCount":1,
      "list":[
        {
          "id": "936955c5-5327-468c-bc01-77fefd688f95",
          "description": "T2顶级组合套餐 玫瑰花茶+茉莉花茶，100摄氏度热水200mls浸泡1个茶匙3-5分钟即可\n饮用方式：热饮！350/组",
          "addTime": 1,
          "price": 350.00,
          "picUrl": "http://pc2.img.ymatou.com/G02/shangou/M05/DE/1B/CgvUBFc77dKAAkXNAAB3ZQzZNuI674-lists_ls.jpg",
          "productType":2
        }
      ]
    },
    "successDesc": {
      "totalCount":"总数",
      "list":"收藏列表",
      "id":"商品id",
      "description":"商品标题",
      "addTime":"收藏时间(毫秒)",
      "price":"商品价格",
      "picUrl":"商品图片",
      "productType":"商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品"
    }
  },
  {
    "apiDescription": "5 获得收藏的商品总数",
    "apiName": "get collection prod count",
    "path": "usercenter/collection/prodcount",
    "apiGroup": "collection",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
    },
    "paramsDesc": {
    },
    "success":{
      "totalCount":1
    },
    "successDesc": {
      "totalCount":"收藏的商品总数"
    }
  },
  {
    "apiDescription": "6 检查笔记是否已收藏",
    "apiName": "get collection note",
    "path": "usercenter/collection/note",
    "apiGroup": "collection",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "noteid":1
    },
    "paramsDesc": {
      "noteid":"笔记id"
    },
    "success":{
      "isCollect":true
    },
    "successDesc": {
      "isCollect":"false:未收藏 <br/>true:已收藏"
    }
  },
  {
    "apiDescription": "7 删除笔记收藏(批量)",
    "apiName": "del collection note",
    "path": "usercenter/collection/note",
    "apiGroup": "collection",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "delete",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "noteids":[1]
    },
    "paramsDesc": {
      "noteids":"笔记ids"
    },
    "success":{
      "success":true
    },
    "successDesc": {
      "success":"是否删除成功"
    }
  },
  {
    "apiDescription": "8 收藏笔记(上限2000)",
    "apiName": "add collection note",
    "path": "usercenter/collection/note",
    "apiGroup": "collection",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "noteid":1
    },
    "paramsDesc": {
      "noteid":"笔记id"
    },
    "success":{
      "success":true
    },
    "successDesc": {
      "success":"是否收藏成功"
    }
  },
  {
    "apiDescription": "9 笔记列表",
    "apiName": "get collection note list",
    "path": "usercenter/collection/notelist",
    "apiGroup": "collection",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "[lastaddtime]":1,
      "pagesize":10
    },
    "paramsDesc": {
      "[lastaddtime]":"最后一个笔记的收藏时间(第一次不传)",
      "pagesize":"获取笔记数量(上限10)"
    },
    "success":{
      "totalCount":1,
      "list":[
        {
          "id":"",
          "description":"",
          "addTime":1,
          "picUrl":"",
          "label":"",
          "nickName":"",
          "noteSource":""
        }
      ]
    },
    "successDesc": {
      "totalCount":"总数",
      "nickName":"用户名字",
      "list":"收藏笔记列表",
      "id":"笔记id",
      "description":"笔记描述",
      "noteSource":"笔记来源<br/>0：买家添加<br/>1：历史数据 <br/>2：运营添加 <br/>3：买手添加",
      "addTime":"收藏时间",
      "picUrl":"笔记第一张图片url",
      "label":"用户【自定义标签】里的第一个标签"
    }
  },
  {
    "apiDescription": "a 收藏笔记数量",
    "apiName": "get collection note count",
    "path": "usercenter/collection/notecount",
    "apiGroup": "collection",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {

    },
    "paramsDesc": {

    },
    "success":{
      "totalCount":1
    },
    "successDesc": {
      "totalCount":"收藏的笔记数量"
    }
  },
  {
    "apiDescription": "b 检查多个商品是否已收藏",
    "apiName": "get collection prods",
    "path": "usercenter/collection/prods",
    "apiGroup": "collection",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "prodids":""
    },
    "paramsDesc": {
      "prodids":"商品ids 例:?prodids[0]=id&prodids[1]=id"
    },
    "success":{
      "list":[
        {
          "isCollect":true,
          "productId":""
        }
      ]
    },
    "successDesc": {
      "list":"是否收藏返回列表",
      "productId":"商品id",
      "isCollect":"false:未收藏 <br/>true:已收藏"
    }
  }
];