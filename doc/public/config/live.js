module.exports = [
  {
    "apiDescription": "1 获取直播详情页",
    "apiName": "liveinfo",
    "path": "live/liveinfo",
    "apiGroup": "live",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "liveid": 0
    },
    "paramsDesc": {
      "liveid": "直播编号",
      "[userid]": "用户编号"
    },
    "success": {
      "id": 148273,
      "description": "ID记得彼此内心小脚裤",
      "expireTime": 1461907256,
      "isReply": false,
      "isFav":false,
      "state": 0,
      "activityInLive":{
        "id":0,
        "name":"活动文案",
        "icon":"活动图标"
      },
      "brands": [
        {
          "type": 1,
          "name": "Kool n Soothe"
        },
        {
          "type": 2,
          "name": "家用微波炉"
        },
        {
          "type": 2,
          "name": "包包控"
        },
        {
          "type": 2,
          "name": "泳镜"
        },
        {
          "type": 2,
          "name": "手机配件"
        },
        {
          "type": 2,
          "name": "iPod"
        },
        {
          "type": 2,
          "name": "三合一"
        },
        {
          "type": 2,
          "name": "男人帮"
        },
        {
          "type": 2,
          "name": "皮肤风衣"
        }
      ],
      "recommendProducts": [
        {
          "id": "3818562b-520f-43dd-a1c3-a7feabd4587f",
          "pic": "http://pc4.img.ymatou.com/G01/shangou/M00/0B/57/rBBlD1cQ3HaAfBLeAADPrKnH5iQ294-original_o.jpg",
          "liveId": 148273,
          "description":"商品描述",
          "stock": 3,
          "state": 0,
          "tariffType": 3,
          "deliveryType": 2,
          "refundType": 1,
          "price": {
            "type": 0,
            "promotion": 0,
            "original": 16,
            "interval": [
              0,
              0
            ]
          }
        },
        {
          "id": "314bba5b-1a30-401a-b0d2-446e641fa190",
          "pic": "http://pc4.img.ymatou.com/G01/shangou/M00/0B/43/rBBlD1cN6YGAEIZ9AAEUA6zrvBk205-original_o.jpg",
          "liveId": 148273,
          "stock": 0,
          "state": 1,
          "tariffType": 3,
          "deliveryType": 2,
          "refundType": 1,
          "price": {
            "type": 0,
            "promotion": 0,
            "original": 5,
            "interval": [
              0,
              0
            ]
          }
        },
        {
          "id": "b8311ba0-0695-4df6-93fd-68181f9cce61",
          "pic": "http://pc2.img.ymatou.com/G01/shangou/M00/0B/43/rBBlD1cN6UuAfPv4AAC_WexudTc856-original_o.jpg",
          "liveId": 148273,
          "stock": 0,
          "state": 1,
          "tariffType": 3,
          "deliveryType": 2,
          "refundType": 1,
          "price": {
            "type": 0,
            "promotion": 0,
            "original": 5,
            "interval": [
              0,
              0
            ] 
          }
        }
      ],
      "sellerInfo": {
        "followed": false,
        "live":{
          "id":148273,
          "name":"直播名称",
          "shopAddress":"商家店铺地址"
        },
        "id": 20227567,
        "avatar": "http://p6.img.ymatou.com/G01/M00/0A/FE/rBBlD1cE_puAZCS2AABCEMVgBz8731_o.jpg",
        "name": "zhangyi_seller002",
        "flag": "http://img.ymatou.com/app/flag/circle/America.png",
        "country": "美国",
        "fansNum": 3,
        "level": 0
      },
      videoInfo: {
        thumbUrl: "",
        title: "",
        videoUrl: ""
      }
    },
    "successDesc": {
      videoInfo: "直播视频信息",
      thumbUrl: "封面地址",
      title: "标题",
      videoUrl: "视频地址",
      "id": [
        "直播id",
        "活动id",
        "商品id",
        "优惠券id",
        "商家id",
        "直播编号",
        "买手编号"
      ],
      "description": [
        "直播描述",
        "商品描述",
        "使用描述"
      ],
      "expireTime": [
        "直播过期时间",
        "过期时间"
      ],
      "isReply": "是否是回播",
      "isFav":"是否收藏",
      "state": [
        "直播状态<br/>0：正在进行<br/>1：已结束",
        "商品状态<br/>0:正常<br/>1:已售罄<br/>2:已下架<br/>3:已过期",
        "优惠券状态<br/>0:未领取<br/>1:已领取"
      ],
      "activityInLive": "直播参与的活动",
      "name": [
        "活动文案",
        "分类名称",
        "商家名",
        "直播名称",
        "商家名"
      ],
      "icon": "活动图标",
      "brands": "好货分类列表",
      "type": [
        "分类类型:<br/>1-品牌<br/>2-分类",
        "价格类型<br/>0-不享受优惠<br/>1-新客价格<br/>2-VIP价格<br/>3-运营活动价<br/>4-关注享受vip价"
      ],
      "recommendProducts": "推荐的商品",
      "pic": "商品的第一张图",
      "liveId": "直播id",
      "stock": "库存",
      "tariffType": "报税类型(包邮包税)<br/>0：不包邮不包税<br/>1:包邮<br/>2:包税<br/>3:包邮包税",
      "deliveryType": "配送方式<br/>-1:没有选择<br/>0:暂不选择<br/>1:贝海直邮<br/>2:直邮<br/>3:拼邮",
      "refundType": "退货方式<br/>0:不支持本土退货<br/>1:官方本土退货<br/>2:商家本土退货",
      "price": "价格",
      "promotion": "促销价",
      "original": "原价",
      "interval": "价格区间",
      "coupons": "优惠券",
      "amount": "优惠面值",
      "sellerInfo": "商家信息",
      "avatar": "商家头像url",
      "flag": "商家国旗",
      "country": "商家所在国",
      "fansNum": "商家粉丝数",
      "followed": "是否关注商家",
      "level": "买手级别",
      "live": "买手进行中的直播信息",
      "shopAddress": "卖场地址"
    }
  },
  {
    "apiDescription": "2 获取直播热门商品列表",
    "apiName": "livehotinfo",
    "path": "live/livehotinfo",
    "apiGroup": "live",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "liveid": 0
    },
    "paramsDesc": {
      "[userid]": "用户编号",
      "liveid": "直播编号"
    },
    "success": {
      "live":{
        "id":1,
        "name":"买手进行中的直播名称",
        "shopAddress":"商家店铺地址",
        "activityIcon":"活动图片",
        "description":"直播描述"
      },
      "products":[{
        "id":"商品编号",
        "pic":"商品的第一张图",
        "price":{
          "type":1,
          "original":10.0,
          "interval":[10.0]
        }
      }]
    },
    "successDesc": {
      "live":"直播信息",
      "id":["买手进行中的直播编号","商品编号"],
      "name":"买手进行中的直播名称",
      "shopAddress":"商家店铺地址",
      "activityIcon":"活动图片",
      "description":"直播描述",
      "products":"商品列表",
      "pic":"商品的第一张图",
      "price":"商品价格",
      "type":"价格类型<br/>0-不享受优惠<br/>1-新客价格<br/>2-VIP价格<br/>3-运营活动价<br/>4-关注享受vip价",
      "original":"原价",
      "interval":"价格区间"
    }
  },
  {
    "apiDescription": "3 获取优惠券列表",
    "apiName": "sellercouponlist",
    "path": "live/sellercouponlist",
    "apiGroup": "live",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "sellerid": 0
    },
    "paramsDesc": {
      "[userid]": "用户编号",
      "sellerid": "买手编号"
    },
    "success": [
      {
        "id": "优惠券编号",
        "amount": 100,
        "state": 0,
        "description": "使用描述",
        "expireTime": "过期时间"
      }
    ],
    "successDesc": {
      "id": "优惠券编号",
      "amount": "优惠券面值",
      "state": "领取状态<br/>0-未领取<br/>1-已领取",
      "description": "使用描述",
      "expireTime": "过期时间"
    }
  },
  {
    "apiDescription": "4 获取直播商品id列表",
    "apiName": "liveproductids",
    "path": "live/liveproductids",
    "apiGroup": "live",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "liveid": 0,
      "[brandtype]": 0,
      "[brandname]": "好货分类名称"
    },
    "paramsDesc": {
      "liveid": "直播编号",
      "[brandtype]": "好货分类类型<br/>0-全部<br/>1-品牌<br/>2-分类",
      "[brandname]": "好货分类名称"
    },
    "success": {
      "ids": [
        "商品编号列表"
      ]
    },
    "successDesc": {
      "ids": "商品id"
    }
  },
  {
    "apiDescription": "5 获取直播中买手信息",
    "apiName": "livesellerinfo",
    "path": "live/livesellerinfo",
    "apiGroup": "live",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "sellerid": 0
    },
    "paramsDesc": {
      "[userid]": "用户编号",
      "sellerid": "买手编号"
    },
    "success": {
      "followed": true,
      "live": {
        "id": 0,
        "name": "直播名称",
        "shopAddress": "商家店铺地址"
      },
      "id": 0,
      "avatar": "商家头像url",
      "name": "商家名",
      "flag": "商家国旗",
      "country": "国家",
      "fansNum": 100,
      "level": 1
    },
    "successDesc": {
      "followed": "是否关注",
      "live": "买手进行中的直播信息",
      "id": ["直播编号","买手编号"],
      "name": ["直播名称","商家名"],
      "shopAddress": "商家店铺地址",
      "avatar": "商家头像url",
      "flag": "商家国旗",
      "country": "国家",
      "fansNum": "粉丝数",
      "level": "买手级别"
    }
  },
  {
    "apiDescription": "6 获取搜索关键字信息",
    "apiName": "get hot words",
    "path": "live/hotwords",
    "apiGroup": "live",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "num": 1
    },
    "paramsDesc": {
      "num": "获取关键字条数"
    },
    "success": {
      "hotWords":[{
        "hotWord":"关键词",
        "type":1,
        "id":"编号",
        "isHighlight":false
      }]
    },
    "successDesc": {
      "hotWords":"关键词列表",
      "hotWord":"关键词",
      "type":"类型<br/>1-搜索词<br/>2-直播<br/>3-专题",
      "id":"编号",
      "isHighlight":"是否高亮"
    }
  }
]