module.exports = [
  {
    "apiDescription": "1 获取分类首页活动信息",
    "apiName": "get activityinfo",
    "path": "nodesearch/assortment/activityinfo",
    "apiGroup": "assortment",
    "apiPermission": "无",
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
      "activity":{
        "id":1000,
        "pic":"图片",
        "href":"跳转链接",
        "type":1,
        "shareLink":"分享链接"
      }
    },
    "successDesc": {
      "activity":"活动详情",
      "id":"活动编号",
      "pic":"图片",
      "href":"跳转链接",
      "type":"跳转类型<br/>0-未知<br/>1-H5<br/>2-频道<br/>3-直播<br/>4-商品<br/>5-专题<br/>6-笔记<br/>7-消息<br/>8-订单<br/>9-买手",
      "shareLink":"分享链接"
    }
  },
  {
    "apiDescription": "2 获取分类首页运营操作位列表",
    "apiName": "get operationlist",
    "path": "nodesearch/assortment/operationlist",
    "apiGroup": "assortment",
    "apiPermission": "无",
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
      "operation":[{
        "id":1000,
        "title":"标题",
        "pic":"图片",
        "search":"搜索词",
        "type":1
      }]
    },
    "successDesc": {
      "operation":"操作位列表",
      "id":"编号",
      "title":"标题",
      "pic":"图片",
      "search":"搜索词",
      "type":"类型<br/>1-品类<br/>2-品牌<br/>3-标签"
    }
  },
  {
    "apiDescription": "3 获取分类首页大分类位列表",
    "apiName": "get biglist",
    "path": "nodesearch/assortment/biglist",
    "apiGroup": "assortment",
    "apiPermission": "无",
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
      "categoryBig":[{
        "id":1000,
        "title":"标题",
        "subTitle":"子标题",
        "pic":"图片",
        "search":"搜索词",
        "type":1
      }]
    },
    "successDesc": {
      "categoryBig":"大分类列表",
      "id":"编号",
      "title":"标题",
      "subTitle":"子标题",
      "pic":"图片",
      "search":"搜索词",
      "type":"类型<br/>1-品类<br/>2-品牌<br/>3-标签"
    }
  },
  {
    "apiDescription": "4 获取分类首页小分类位列表",
    "apiName": "get smalllist",
    "path": "nodesearch/assortment/smalllist",
    "apiGroup": "assortment",
    "apiPermission": "无",
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
      "categorySmall":{
        "pages":1,
        "items":[{
          "theme":"分类名称",
          "list":[{
            "id":1000,
            "title":"标题",
            "pic":"图片",
            "search":"搜索词",
            "type":1
          }]
        }]
      }
    },
    "successDesc": {
      "categorySmall":"分类信息",
      "categorySmallinfo":"分类信息详情",
      "itemsinfo":"分类项详情",
      "listinfo":"分类详细信息列表详情",
      "pages":"总页数",
      "items":"分类项",
      "theme":"分类名称",
      "list":"分类详细信息列表",
      "id":"编号",
      "title":"标题",
      "subTitle":"子标题",
      "pic":"图片",
      "search":"搜索词",
      "type":"类型<br/>1-品类<br/>2-品牌<br/>3-标签"
    }
  },
  {
    "apiDescription": "5 获取分类首页品牌列表",
    "apiName": "get brandlist",
    "path": "nodesearch/assortment/brandlist",
    "apiGroup": "assortment",
    "apiPermission": "无",
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
      "brand":{
        "pages":1,
        "items":[{
          "theme":"分类名称",
          "list":[{
            "id":1000,
            "title":"标题",
            "pic":"图片",
            "search":"搜索词",
            "type":1
          }]
        }]
      }
    },
    "successDesc": {
      "brand":"品牌项详情",
      "pages":"总页数",
      "items":"分类项",
      "theme":"分类名称",
      "list":"分类详细信息列表",
      "id":"编号",
      "title":"标题",
      "subTitle":"子标题",
      "pic":"图片",
      "search":"搜索词",
      "type":"类型<br/>1-品类<br/>2-品牌<br/>3-标签"
    }
  },
  {
    "apiDescription": "6 获取分类信息",
    "apiName": "get categoryinfo",
    "path": "nodesearch/assortment/categoryinfo",
    "apiGroup": "assortment",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      categoryid:1
    },
    "paramsDesc": {
      categoryid:"分类页接口返回的分类id"
    },
    "success":{
      "name":"品类名称",
      "desc":"品牌描述",
      "enDesc":"品牌英文描述",
      "subList":[{
        "id":1000,
        "name":"品类名称",
        "pic":"品类图片",
        "type":1
      }]
    },
    "successDesc": {
      "name":"品类名称",
      "desc":"品牌描述",
      "enDesc":"品牌英文描述",
      "id":"编号",
      "pic":"图片",
      "type":"类型<br/>1-品类<br/>2-品牌<br/>3-标签"
    }
  }
  ];