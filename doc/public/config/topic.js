module.exports = [
  {
    "apiDescription": "1 获得所有主题列表",
    "apiName": "get topic info list",
    "path": "usercenter/topic/topiclist",
    "apiGroup": "topic",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "[lastaddtime]":0,
      "pagesize":0
    },
    "paramsDesc": {
      "[lastaddtime]":"当前已拉取的最后一个主题的新建时间",
      "pagesize":"一页拉取主题个数"
    },
    "success":{
      "list":[
        {
          "id":1,
          "name":"",
          "description":"",
          "prodCount":1,
          "noteCount":1,
          "isPrivate":true,
          "addTime":1,
          "pics":[""]
        }
      ]
    },
    "successDesc": {
      "id":"主题id",
      "name":"主题名称",
      "description":"主题描述",
      "prodCount":"主题下的商品数",
      "noteCount":"主题下的笔记数",
      "isPrivate":"是否仅自己可见",
      "pics":"主题下最近导入的商品和笔记的前4张图片的url",
      "shareUrl":"主题分享url",
      "addTime":"主题新建时间"
    }
  },
  {
    "apiDescription": "2 根据主题id获取主题基本信息",
    "apiName": "get topic info by id",
    "path": "usercenter/topic/topicinfo",
    "apiGroup": "topic",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "topicid":1
    },
    "paramsDesc": {
      "topicid":"主题id"
    },
    "success":{
      "id":1,
      "name":"",
      "description":"",
      "prodCount":1,
      "noteCount":1,
      "isPrivate":true,
      "shareUrl":"",
      "pics":[""]
    },
    "successDesc": {
      "id":"主题id",
      "name":"主题名称",
      "description":"主题描述",
      "prodCount":"主题下的商品数",
      "noteCount":"主题下的笔记数",
      "isPrivate":"是否仅自己可见",
      "shareUrl":"主题分享的链接",
      "pics":"最近添加到主题的item图片url"
    }
  },
  {
    "apiDescription": "3 获取主题内的item列表",
    "apiName": "get topic items",
    "path": "usercenter/topic/topicitems",
    "apiGroup": "topic",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "topicid":1,
      "[lastaddtime]":0,
      "pagesize":0
    },
    "paramsDesc": {
      "topicid":"主题id",
      "[lastaddtime]":"当前已拉取的最后一个item的导入时间",
      "pagesize":"一页拉取item个数"
    },
    "success":{
      "list":[
        {
          "type":1,
          "id": "936955c5-5327-468c-bc01-77fefd688f95",
          "description": "T2顶级组合套餐 玫瑰花茶+茉莉花茶，100摄氏度热水200mls浸泡1个茶匙3-5分钟即可\n饮用方式：热饮！350/组",
          "price": 350.00,
          "picUrl": "http://pc2.img.ymatou.com/G02/shangou/M05/DE/1B/CgvUBFc77dKAAkXNAAB3ZQzZNuI674-lists_ls.jpg",
          "productType":2,
          "label":"",
          "nickName":"",
          "noteSource":"",
          "addTime":1
        }
      ]
    },
    "successDesc": {
      "type":"item 类型 <br/>1:商品<br/>2:笔记",
      "id":"导入item的id",
      "description":"导入item的标题",
      "addTime":"导入的时间 毫秒",
      "price":"商品价格",
      "picUrl":"导入item的图片",
      "productType":"商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品",
      "label":"用户【自定义标签】里的第一个标签",
      "noteSource":"笔记来源<br/>0：买家添加<br/>1：历史数据 <br/>2：运营添加 <br/>3：买手添加",
      "nickName":"用户名字"
    }
  },
  {
    "apiDescription": "4 新建主题",
    "apiName": "create topic",
    "path": "usercenter/topic/topic",
    "apiGroup": "topic",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "name":"",
      "[description]":"",
      "isprivate":false,
      "username":"",
      "useravatarurl":""
    },
    "paramsDesc": {
      "name":"主题名字",
      "[description]":"主题描述",
      "isprivate":"是否仅自己可见，true:不会被推荐到大首页",
      "username":"用户名",
      "useravatarurl":"用户头像url"
    },
    "success":{
      "success":true,
      "msg":"",
      "topicId":1
    },
    "successDesc": {
      "success":"操作是否成功",
      "msg":"失败的信息",
      "topicId":"主题id"
    }
  },
  {
    "apiDescription": "5 删除主题",
    "apiName": "del topic",
    "path": "usercenter/topic/topic",
    "apiGroup": "topic",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "delete",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "topicid":1
    },
    "paramsDesc": {
      "topicid":"主题id"
    },
    "success":{
      "success":true,
      "msg":""
    },
    "successDesc": {
      "success":"操作是否成功",
      "msg":"失败信息"
    }
  },
  {
    "apiDescription": "6 编辑主题信息",
    "apiName": "post change topic",
    "path": "usercenter/topic/edittopicinfo",
    "apiGroup": "topic",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "topicid":1,
      "name":"",
      "[description]":"",
      "isprivate":false
    },
    "paramsDesc": {
      "topicid":"主题id",
      "name":"主题名字",
      "[description]":"主题描述",
      "isprivate":"是否仅自己可见，true:不会被推荐到大首页"
    },
    "success":{
      "success":true,
      "msg":""
    },
    "successDesc": {
      "success":"操作是否成功",
      "msg":"失败信息"
    }
  },
  {
    "apiDescription": "7 导入items到多个主题",
    "apiName": "post item to topic additemstotopics",
    "path": "usercenter/topic/additemstotopics",
    "apiGroup": "topic",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "topicids":[1],
      "list":[
        {
          "type":1,
          "id":""
        }
      ]
    },
    "paramsDesc": {
      "topicids":"目标主题ids",
      "type":"item 类型 <br/>1:商品<br/>2:笔记",
      "id":"item id"
    },
    "success":{
      "success":true
    },
    "successDesc": {
      "success":"操作是否成功"
    }
  },
  {
    "apiDescription": "8 从主题删除items",
    "apiName": "del item to topic",
    "path": "usercenter/topic/topicitems",
    "apiGroup": "topic",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "delete",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "topicid":1,
      "list":[{"id":"","type":1}]
    },
    "paramsDesc": {
      "topicid":"目标主题id",
      "type":"item 类型 <br/>1:商品<br/>2:笔记",
      "id":"item id 商品和笔记的都放这里"
    },
    "success":{
      "success":true
    },
    "successDesc": {
      "success":"操作是否成功"
    }
  },
  {
    "apiDescription": "9 获得所有主题列表简单信息",
    "apiName": "get topic simple info list",
    "path": "usercenter/topic/simpletopiclist",
    "apiGroup": "topic",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "[lastaddtime]":0,
      "pagesize":0
    },
    "paramsDesc": {
      "[lastaddtime]":"当前已拉取的最后一个主题的新建时间",
      "pagesize":"一页拉取主题个数"
    },
    "success":{
      "list":[
        {
          "id":1,
          "name":"",
          "totalCount":1,
          "addTime":1,
          "pics":[""]
        }
      ]
    },
    "successDesc": {
      "id":"主题id",
      "name":"主题名称",
      "description":"主题描述",
      "prodCount":"主题下的商品数",
      "noteCount":"主题下的笔记数",
      "totalCount":"主题下的item总数",
      "isPrivate":"是否仅自己可见",
      "pics":"主题下最近导入的商品和笔记的前1张图片的url",
      "shareUrl":"主题分享url",
      "addTime":"主题新建时间"
    }
  }
];

