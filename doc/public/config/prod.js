module.exports = [
  {
    "apiDescription": "1 根据商品ids获取商品详情",
    "apiName": "list",
    "path": "prod/list",
    "apiGroup": "prod",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "productids": ["id"]
    },
    "paramsDesc": {
      "productids": "商品ids(用?productids[0]=id&productids[1]=id 格式)"
    },
    "success": {
      "list": [
        {
          "id": "ffbd095d-9154-4040-8332-35e91ba8c57c",
          "description": "新增图片",
          title: "",
          "pics": [
            "http://pc3.img.ymatou.com/G01/shangou/M00/0B/10/rBBlD1cGG7SAG1J3AAFIt3P0E4s666-original_o.jpg",
            "http://pc1.img.ymatou.com/G01/shangou/M00/0B/10/rBBlD1cGG7KAQivnAADIMnRqd_0900-original_o.jpg",
            "http://pc4.img.ymatou.com/G01/shangou/M00/0B/10/rBBlD1cGG7OAHI8dAACXiL-WMU0972-original_o.jpg",
            "http://pc3.img.ymatou.com/G01/shangou/M00/0B/10/rBBlD1cGG7SAWz5JAABSlBmVcB0377-original_o.jpg"
          ],
          "putawayTime": 1470242216000,
          "expireTime": 1470243974000,
          "state": 0,
          "productType": 1,
          "tariffType": 2,
          "deliveryType": 3,
          "refundType": 0,
          "price": {
            "original": 45,
            "interval": [
              45,
              45
            ]
          },
          "stock": 3,
          "isReplay": false,
          "limitedNumber": 0,
          "skus": [
            {
              "id": "ef201865-53cd-43a5-bd6f-18102710708a",
              "properties": [
                {
                  "key": "颜色",
                  "value": "绿色"
                },
                {
                  "key": "尺寸",
                  "value": "S"
                }
              ],
              "stock": 0,
              "price": 1
            }
          ],
          "payMode": 1,
          "canAddShoppingCart": true,
          isNoReasonReturn: false,
          comments: [
            {
              total: 1,
              list: [
                {
                  id: "",
                  posterId: "",
                  posterName: "",
                  receiverId: "",
                  receiverName: "",
                  content: "",
                  postTime: 123
                }
              ]
            }
          ]
        }
      ]
    },
    "successDesc": {
      title: "商品名字",
      comments: "评论",
      total: "评论总数",
      posterId: "发送者ID",
      posterName: "发送者名称",
      receiverId: "被评论者ID",
      receiverName: "被评论者名称",
      content: "评论内容",
      postTime: "发布时间",
      isNoReasonReturn: "是否支持7天无理由退换",
      mobileDescription: "移动端商品描述",
      "canAddShoppingCart": "商品是否可以加入购物车",
      "payMode": "支付类型 <br/>0:全额支付<br/>1:订金支付",
      "id": ["商品id", "skuId", "评论ID"],
      "description": "商品描述",
      "pics": "商品图片",
      "putawayTime": "上架时间",
      "expireTime": "过期时间",
      "state": "商品状态<br/>0:正常<br/>1:已售罄<br/>2:已下架<br/>3:已过期",
      "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品",
      "tariffType": "报税类型(包邮包税)<br/>0：不包邮不包税<br/>1:包邮<br/>2:包税<br/>3:包邮包税",
      "deliveryType": "配送方式<br/>0:暂不选择<br/>1:国内快递<br/>2:直邮<br/>3:贝海直邮<br/>4:买手保税<br/>5:贝海保税<br/>6:认证直邮<br/>7:拼邮",
      "refundType": "退货方式<br/>0:不支持本土退货<br/>1:官方本土退货<br/>2:商家本土退货",
      "sellerId": "买手ID",
      "price": ["商品价格", "价格"],
      "original": "原价",
      "interval": "价格区间",
      "stock": ["总库存数", "当前sku下的库存数"],
      "isReplay": "是否回播",
      "limitedNumber": "每个用户的限购数量",
      "properties": "属性信息(颜色,尺寸等)",
      "key": "属性名",
      "value": "属性值"
    }
  },
  {
    "apiDescription": "2 商品详情",
    "apiName": "detail",
    "path": "prod/detail",
    "apiGroup": "prod",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "productid": "id"
    },
    "paramsDesc": {
      "productids": "商品id"
    },
    "success": {
      "id": "ffbd095d-9154-4040-8332-35e91ba8c57c",
      "description": "新增图片",
      "pics": [
        "http://pc3.img.ymatou.com/G01/shangou/M00/0B/10/rBBlD1cGG7SAG1J3AAFIt3P0E4s666-original_o.jpg",
        "http://pc1.img.ymatou.com/G01/shangou/M00/0B/10/rBBlD1cGG7KAQivnAADIMnRqd_0900-original_o.jpg",
        "http://pc4.img.ymatou.com/G01/shangou/M00/0B/10/rBBlD1cGG7OAHI8dAACXiL-WMU0972-original_o.jpg",
        "http://pc3.img.ymatou.com/G01/shangou/M00/0B/10/rBBlD1cGG7SAWz5JAABSlBmVcB0377-original_o.jpg"
      ],
      "putawayTime": 1470242216000,
      "expireTime": 1470243974000,
      "state": 0,
      "productType": 1,
      "tariffType": 2,
      "deliveryType": 3,
      "refundType": 0,
      "price": {
        "original": 45,
        "interval": [
          45,
          45
        ]
      },
      "stock": 3,
      "isReplay": false,
      "limitedNumber": 0,
      "skus": [
        {
          "id": "ef201865-53cd-43a5-bd6f-18102710708a",
          "properties": [
            {
              "key": "颜色",
              "value": "绿色"
            },
            {
              "key": "尺寸",
              "value": "S"
            }
          ],
          "stock": 0,
          "price": 1
        }
      ],
      "payMode": 1,
      "canAddShoppingCart": true,
      picList: [
        {
          original: "http://p5.img.ymatou.com/upload/product/original/3bf5cf48a1ec4ac38a87367b1011bad9_o.png",
          small: "http://p5.img.ymatou.com/upload/product/small/3bf5cf48a1ec4ac38a87367b1011bad9_s.png"
        },
        {
          original: "http://p5.img.ymatou.com/upload/product/original/f1a7f534938a41809cd562014de8e55e_o.png",
          small: "http://p5.img.ymatou.com/upload/product/small/f1a7f534938a41809cd562014de8e55e_s.png"
        },
        {
          original: "http://p5.img.ymatou.com/upload/product/original/ffe841362b5f43908b71329784270d62_o.png",
          small: "http://p5.img.ymatou.com/upload/product/small/ffe841362b5f43908b71329784270d62_s.png"
        }
      ],
      hasMoreDesc: true,
      freightDesc: "首件15.00元,续件2.00元/件",
      isNoReasonReturn: false,
      couponUseLimitType: 1,
      intro: "商品描述",
      brandId: 1,
      title: "",
      comments: [
        {
          total: 1,
          list: [
            {
              id: "",
              posterId: "",
              posterName: "",
              receiverId: "",
              receiverName: "",
              content: "",
              postTime: 123
            }
          ]
        }
      ]
    },
    "successDesc": {
      comments: "评论",
      total: "评论总数",
      posterId: "发送者ID",
      posterName: "发送者名称",
      receiverId: "被评论者ID",
      receiverName: "被评论者名称",
      content: "评论内容",
      postTime: "发布时间",
      title: "商品名称",
      brandId: "品牌ID",
      intro: "商品描述",
      couponUseLimitType: "优惠券限制 <br/>0:无限制<br/>1: 不可用买手券<br/>2:不可用平台券<br/>3:不可用买手以及平台券",
      picList: "图片列表",
      original: ["原价", "原图"],
      small: "小图",
      hasMoreDesc: "是否有图文描述",
      freightDesc: "运费描述 例:首件15.00元,续件2.00元/件",
      isNoReasonReturn: "是否支持7天无理由退货",
      "canAddShoppingCart": "商品是否可以加入购物车",
      "payMode": "支付类型 <br/>0:全额支付<br/>1:订金支付",
      "id": ["商品id", "skuId", '活动id'],
      "description": "商品描述 2016-6-30之后的版本不使用该字段",
      "pics": "商品图片",
      "putawayTime": "上架时间",
      "expireTime": "过期时间",
      "state": "商品状态<br/>0:正常<br/>1:已售罄<br/>2:已下架<br/>3:已过期",
      "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品",
      "tariffType": "报税类型(包邮包税)<br/>0：不包邮不包税<br/>1:包邮<br/>2:包税<br/>3:包邮包税",
      "deliveryType": "配送方式<br/>0:暂不选择<br/>1:国内快递<br/>2:直邮<br/>3:贝海直邮<br/>4:买手保税<br/>5:贝海保税<br/>6:认证直邮<br/>7:拼邮",
      "refundType": "退货方式<br/>0:不支持本土退货<br/>1:官方本土退货<br/>2:商家本土退货",
      "sellerId": "买手ID",
      "price": ["商品价格", "价格"],
      "interval": "价格区间",
      "stock": ["总库存数", "当前sku下的库存数"],
      "isReplay": "是否回播",
      "limitedNumber": "每个用户的限购数量",
      "properties": "属性信息(颜色,尺寸等)",
      "key": "属性名",
      "value": "属性值"
    }
  },
  {
    "apiDescription": "3 获取是否喜欢",
    "apiName": "isfavorite",
    "path": "prod/isfavorite",
    "apiGroup": "prod",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "productid": "id"
    },
    "paramsDesc": {
      "productids": "商品id"
    },
    "success": {
      "isFavorite": true
    },
    "successDesc": {
      "isFavorite": "是否喜欢"
    }
  },
  {
    "apiDescription": "4 商品描述",
    "apiName": "description",
    "path": "prod/description",
    "apiGroup": "prod",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "productid": "id"
    },
    "paramsDesc": {
      "productids": "商品id"
    },
    "success": {
      "isHtml": true,
      "url": "url",
      "text": "text",
      "pics": ["pics"]
    },
    "successDesc": {
      "isHtml": "是否为html内容",
      "url": "链接",
      "text": "内容",
      "pics": "图片地址"
    }
  },
  {
    "apiDescription": "5 推荐商品",
    "apiName": "recommend",
    "path": "prod/recommend",
    "apiGroup": "prod",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "productid": "id",
      "pagenumber": "pagenumber",
      "pagesize": "pagesize"
    },
    "paramsDesc": {
      "productid": "商品id",
      "pagenumber": "分页页码（从1开始）",
      "pagesize": "pagesize（上限100）"
    },
    "success": {
      "total": 1,
      "list": [
        {
          "id": "ffbd095d-9154-4040-8332-35e91ba8c57c",
          "description": "新增图片",
          "pics": [
            "http://pc3.img.ymatou.com/G01/shangou/M00/0B/10/rBBlD1cGG7SAG1J3AAFIt3P0E4s666-original_o.jpg",
            "http://pc1.img.ymatou.com/G01/shangou/M00/0B/10/rBBlD1cGG7KAQivnAADIMnRqd_0900-original_o.jpg",
            "http://pc4.img.ymatou.com/G01/shangou/M00/0B/10/rBBlD1cGG7OAHI8dAACXiL-WMU0972-original_o.jpg",
            "http://pc3.img.ymatou.com/G01/shangou/M00/0B/10/rBBlD1cGG7SAWz5JAABSlBmVcB0377-original_o.jpg"
          ],
          "putawayTime": 1470242216000,
          "expireTime": 1470243974000,
          "state": 0,
          "productType": 1,
          "tariffType": 2,
          "deliveryType": 3,
          "refundType": 0,
          "price": {
            "original": 45,
            "interval": [
              45,
              45
            ]
          },
          "stock": 3,
          "isReplay": false,
          "limitedNumber": 0,
          "skus": [
            {
              "id": "ef201865-53cd-43a5-bd6f-18102710708a",
              "properties": [
                {
                  "key": "颜色",
                  "value": "绿色"
                },
                {
                  "key": "尺寸",
                  "value": "S"
                }
              ],
              "stock": 0,
              "price": 1
            }
          ]
        }
      ]
    },
    "successDesc": {
      "total": "商品总数",
      "list": "商品列表",
      "id": ["商品id", "skuId"],
      "description": "商品描述",
      "pics": "商品图片",
      "putawayTime": "上架时间",
      "expireTime": "过期时间",
      "state": "商品状态<br/>0:正常<br/>1:已售罄<br/>2:已下架<br/>3:已过期",
      "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品",
      "tariffType": "报税类型(包邮包税)<br/>0：不包邮不包税<br/>1:包邮<br/>2:包税<br/>3:包邮包税",
      "deliveryType": "配送方式<br/>0:暂不选择<br/>1:国内快递<br/>2:直邮<br/>3:贝海直邮<br/>4:买手保税<br/>5:贝海保税<br/>6:认证直邮<br/>7:拼邮",
      "refundType": "退货方式<br/>0:不支持本土退货<br/>1:官方本土退货<br/>2:商家本土退货",
      "sellerId": "买手ID",
      "price": ["商品价格", "价格"],
      "original": "原价",
      "interval": "价格区间",
      "stock": ["总库存数", "当前sku下的库存数"],
      "isReplay": "是否回播",
      "limitedNumber": "每个用户的限购数量",
      "properties": "属性信息(颜色,尺寸等)",
      "key": "属性名",
      "value": "属性值"
    }
  },
  {
    "apiDescription": "6 买家秀",
    "apiName": "buyershow",
    "path": "prod/buyershow",
    "apiGroup": "prod",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "productid": "id",
      "pagenumber": "pagenumber",
      "pagesize": "pagesize",
      "[yid]": "yid"
    },
    "paramsDesc": {
      "productids": "商品id",
      "pagenumber": "分页页码（从1开始）",
      "pagesize": "pagesize（上限100）",
      "[yid]": "yid"
    },
    "success": {
      "list": [
        {
          "id": 1001416772,
          "posterId": 20001772,
          "posterName": "adg01",
          "posterAvater": "",
          "content": "这种天气预报今天白天到夜间晴间多云",
          "pics": [
            "http://ps1.img.ymatou.com/G01/M00/07/D9/rBBlD1YzJz6AGWmHAAXSid8hsgo459_o.jpg"
          ],
          "postTime": 1446221749000
        }
      ],
      "total": 1
    },
    "successDesc": {
      "id": "买家秀id",
      "posterId": "发布者id",
      "posterName": "发布者昵称",
      "posterAvater": "发布者头像URL",
      "content": "发布正文",
      "pics": "买家秀图标数组",
      "postTime": "发布时间",
      "total": "总数"
    }
  },
  {
    "apiDescription": "7 批量获取是否喜欢",
    "apiName": "isfavorites",
    "path": "prod/isfavorites",
    "apiGroup": "prod",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "productids": ["id"]
    },
    "paramsDesc": {
      "productids": "商品ids(通过,(半角逗号)分割)"
    },
    "success": {
      "list": [
        {
          "productId": "productId",
          "isFavorite": true
        }
      ]
    },
    "successDesc": {
      "productId": "商品ID",
      "isFavorite": "是否喜欢"
    }
  },
  {
    "apiDescription": "8 根据商品id获得相似商品",
    "apiName": "similarprod",
    "path": "prod/similarprod",
    "apiGroup": "prod",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "productid": "id"
    },
    "paramsDesc": {
      "productid": "商品id",
      "pagenumber": "分页页码（从1开始）",
      "pagesize": "pagesize（上限100）"
    },
    "success": {
      "list": [
        {
          "productId": "商品ID",
          "productName": "商品名称",
          "pic": "商品图片url",
          "country": "国家名称",
          "countryIcon": "买手国旗URL",
          "price": 0,
          "productType": 1,
          "restTime": 1
        }
      ]
    },
    "successDesc": {
      "list": "商品列表",
      "productId": "商品ID",
      "productName": "商品名称",
      "pic": "商品图片url",
      "country": "国家名称",
      "countryIcon": "买手国旗URL",
      "price": "商品价格",
      "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品",
      "restTime": "直播剩余时间(秒)"
    }
  },
  {
    "apiDescription": "9 购物车猜你喜欢商品",
    "apiName": "recommendprods",
    "path": "prod/recommendprods",
    "apiGroup": "prod",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {},
    "paramsDesc": {
      "productids": "商品ids(用?productids[0]=id&productids[1]=id 格式)",
      "pagenumber": "分页页码（从1开始）",
      "pagesize": "pagesize（上限100）"
    },
    "success": {
      "list": [
        {
          "productId": "商品ID",
          "productName": "商品名称",
          "pic": "商品图片url",
          "country": "国家名称",
          "countryIcon": "买手国旗URL",
          "price": 0,
          "productType": 1
        }
      ]
    },
    "successDesc": {
      "list": "商品列表",
      "productId": "商品ID",
      "productName": "商品名称",
      "pic": "商品图片url",
      "country": "国家名称",
      "countryIcon": "买手国旗URL",
      "price": "商品价格",
      "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品"
    }
  },
  {
    "apiDescription": "a 获取买手相关信息",
    "apiName": "sellerinfo",
    "path": "prod/sellerinfo",
    "apiGroup": "prod",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "sellerid": "买手id",
      "productid": "商品id"
    },
    "paramsDesc": {
      "sellerid": "买手id",
      "productid": "商品id"
    },
    "success": {
      "followed": false,
      "live": {
        "id": 148951,
        "name": "Hongkong-6.8",
        "shopAddress": "中国上海市闸北区大宁路街道共和新路2802号",
        "activityIcon": "",
        "description": "【SKU版本】香港扫货直播，优质商品，可爱尤物,古灵精怪，玩世不恭,萌气十足，宠腻歪。欢迎购买~~~",
        "prods": [
          {
            "id": "a37ea311-7253-4239-8dbb-41b41c89a221",
            "pic": "http://pc3.img.ymatou.com/G01/shangou/M00/10/F4/rBBlD1dWeaKAYy6PAAZBeB4_UJU72_w_lb.jpeg",
            "price": {
              "type": 0,
              "original": 50,
              "interval": 40
            }
          }
        ]
      },
      "id": 20224930,
      "avatar": "http://p6.img.ymatou.com/G01/M00/0A/4F/rBBlD1bUGYyAGRvxAAA_7MMBT40677_o.jpg",
      "name": "ystore",
      "flag": "http://img.ymatou.com/app/flag/circle/Hongkong.png",
      "countryId": 47,
      "country": "香港",
      "fansNum": 32,
      "level": 0,
      "coupons": [
        {
          "id": "1607116477",
          "amount": 4,
          "state": 0,
          "description": "满5减4",
          "expireTime": 1469980799000,
          "sellerId": 20224930,
          "unReceiveCount": 10
        }
      ],
      "saleActivity": [
        {
          "id": 13,
          "tag": 3,
          "title": "满10元减5元",
          "beginTime": 1467331200000,
          "endTime": 1470009599000,
          "ruleDesc": "【ystore】满件减-满2件减5"
        }
      ]
    },
    "successDesc": {
      "followed": "是否关注买手",
      "live": "商品名称",
      "id": ["直播编号", "商品编号", "商家id", "优惠券编号", "活动编号"],
      "avatar": "商家头像url",
      "name": ["商家名", "直播名称"],
      "flag": "商家国旗",
      "countryId": "国家id",
      "country": "国家名称",
      "fansNum": "粉丝数",
      "level": "买手级别<br/>0：没有设置<br/>1：TOP<br/>2：PRO<br/>3：SEMI-PRO<br/>4：WARNING LIST",
      "coupons": "优惠券信息",
      "saleActivity": "买手促销活动信息",
      "shopAddress": "卖场地址",
      "activityIcon": "活动图标",
      "description": ["直播描述", "使用描述"],
      "prods": "直播相关商品列表",
      "amount": "优惠券面值",
      "state": "领取状态<br/>0:未领取<br/>1:已领取",
      "expireTime": "过期时间",
      "tag": "促销策略<br/>1：满件减<br/>2：满件折<br/>3：满金额减<br/>4：满金额折",
      "title": "活动标题",
      "isExplain": "活动标题",
      "ruleDesc": "活动标题",
      "beginTime": "开始时间",
      "endTime": "结束时间",
      "type": "价格类型",
      "original": "原价",
      "interval": "价格区间",
      "sellerId": "买手Id",
      "unReceiveCount": "未领取次数"
    }
  },
  {
    "apiDescription": "b 获取买手营销信息列表",
    "apiName": "sellerpromotionlist",
    "path": "prod/sellerpromotionlist",
    "apiGroup": "prod",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "sellerid": "买手id"
    },
    "paramsDesc": {
      "sellerid": "买手id"
    },
    "success": {
      "list": [
        {
          "id": 9,
          "tag": 3,
          "title": "满10元减5元",
          "isExplain": false,
          "beginTime": 1467733516330,
          "endTime": 1469893516330,
          "ruleDesc": "【ystore】满10元减5"
        },
        {
          "id": 8,
          "tag": 2,
          "title": "满2件5折",
          "isExplain": false,
          "beginTime": 1467733516330,
          "endTime": 1469893516330,
          "ruleDesc": "【ystore】满2件折5"
        },
        {
          "id": 7,
          "tag": 1,
          "title": "满2件减5元",
          "isExplain": false,
          "beginTime": 1467733516330,
          "endTime": 1469893516330,
          "ruleDesc": "【ystore】满2件减5"
        }
      ]
    },
    "successDesc": {
      "list": "营销列表",
      "tag": "促销策略<br/>1：满件减<br/>2：满件折<br/>3：满金额减<br/>4：满金额折",
      "title": "营销id",
      "isExplain": "是否同一商品",
      "beginTime": "开始时间",
      "endTime": "结束时间",
      "ruleDesc": "描述"
    }
  },
  {
    "apiDescription": "c 获取买手促销信息",
    "apiName": "sellerpromotioninfo",
    "path": "prod/sellerpromotioninfo",
    "apiGroup": "prod",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "sellerid": "买手id",
      "promotionid": "营销活动id"
    },
    "paramsDesc": {
      "sellerid": "买手id",
      "promotionid": "营销活动id"
    },
    "success": {
      "id": 9,
      "tag": 3,
      "title": "满10元减5元",
      "isExplain": false,
      "beginTime": 1467733516330,
      "endTime": 1469893516330,
      "ruleDesc": "【ystore】满10元减5",
      "prodIds": [
        "a37ea311-7253-4239-8dbb-41b41c89a221",
        "9929f357-aa79-4ab0-8bde-e5ade7781dba",
        "f33b9f8c-ebb6-4aa7-91df-d202dcaeb39f",
        "d6d9dde4-94a3-4666-b9b2-aee4cac76c15",
        "461bfcca-dcdf-432f-9a04-0d5a84970768",
        "9875901b-612b-4359-abf6-d92054f269fd",
        "37b530c6-cb50-4661-beeb-368ec357f241"
      ]
    },
    "successDesc": {
      "id": "促销活动ID",
      "tag": "活动标签",
      "title": "活动标题",
      "isExplain": "是否同一商品",
      "beginTime": "开始时间",
      "endTime": "结束时间",
      "ruleDesc": "规则描述",
      "prodIds": "促销活动商品的id列表"
    }
  },
  {
    "apiDescription": "d 根据营销商品ids获取营销商品信息",
    "apiName": "getpromotionproductlist",
    "path": "prod/getpromotionproductlist",
    "apiGroup": "prod",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "productids": ["id"]
    },
    "paramsDesc": {
      "productids": "商品ids(用?productids[0]=id&productids[1]=id 格式)"
    },
    "success": {
      "list": [
        {
          "productId": "9875901b-612b-4359-abf6-d92054f269fd",
          "productName": "【ystore】M端-单规格：苹果手机测试商品",
          "pic": "http://pm3.img.ymatou.com/G01/upload/product/small/M00/0C/2B/rBBlD1cfdBaAHFaFAAG_Yi3Bn1I45_s.jpeg",
          "country": "",
          "countryIcon": "",
          "price": 1,
          "productType": 2,
          "restTime": "1小时",
          "stock": 202
        }
      ]
    },
    "successDesc": {
      "list": "促销活动商品信息列表",
      "productId": "商品ID",
      "productName": "商品标题",
      "pic": "商品图片url",
      "country": "国家名称",
      "countryIcon": "买手国旗URL",
      "price": "商品价格",
      "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品",
      "restTime": "直播剩余时间",
      "stock": "库存数"
    }
  },
  {
    "apiDescription": "e 商品其他信息",
    "apiName": "extrainfo",
    "path": "prod/extrainfo",
    "apiGroup": "prod",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "productid": "461bfcca-dcdf-432f-9a04-0d5a84970768",
      "brandid": 10062
    },
    "paramsDesc": {
      "productid": "商品id",
      "brandid": "品牌id"
    },
    "success": {
      "buyerShow": {
        "total": 1,
        "list": {
          "posterAvatar": "",
          "posterName": "adg01",
          "content": "这种天气预报今天白天到夜间晴间多云"
        }
      },
      "topics": [
        {
          "id": 1001606,
          "followed": false,
          "title": "“钻石光芒”一颗恒久远",
          "prodsNum": 1,
          "sellersNum": 1,
          "prods": [
            {
              "id": "fba48b2d-d3ac-49e3-8a9a-90f5574e8f7b",
              "pic": "http://p5.img.ymatou.com/upload/product/small/6193ae0b896d4c94a028f52e7c822ae9_s.jpg",
              "price": 4400
            }
          ]
        }
      ],
      "brands": {
        "id": "10062",
        "name": "阿迪达斯",
        "desc": "阿迪达斯 (adidas) 是德国运动用品制造商，是 adidas AG 集团公司的成员公司。阿迪达斯 (adidas) 品牌的前身在1920 年于德国赫佐格奥拉赫(Herzogenaurach)开始生产鞋类产品。1948 年，阿迪达斯 (adidas) 的创办人阿道夫·阿迪达斯勒 (Adolf Adi Dassler) 先生用他的中间名adi 和姓氏Dassler的头三个字母组成，合成\"adidas\"作为商品品牌并申请注册；1949年8月18日以 adidas AG 名字注册公司，adidas 的Logo，著名的呈三角形的3三条线商标问世。",
        "isFollowed": false,
        "followerNum": 0,
        "diaryNum": 0,
        "prods": [
          {
            "id": "fce9efe7-4209-45ef-9cab-708f90127cb2",
            "pic": "http://p8.img.ymatou.com/upload/product/small/M01/C7/3F/CgrTBFW3oR-AJXyaAADuS2FrMik340_s.jpg",
            "name": "美国直邮 adidas 阿迪达斯三叶草 男女士贝壳鞋 stan smith ",
            "price": 790,
            "oriPrice": 790
          }
        ]
      }
    },
    "successDesc": {
      "buyerShow": "买家秀",
      "name": ["品牌名称", "商品标题"],
      "list": "列表",
      "posterAvatar": "头像",
      "posterName": "名字",
      "content": "发布正文",
      "total": "总数",
      "topics": "相关主题",
      "id": ["主题编号", "商品ID", "品牌ID", "商品ID"],
      "title": ["主题标题", "商品标题"],
      "prodsNum": "商品数量",
      "pic": "图片",
      "brands": "相关品牌",
      "desc": "品牌描述",
      "isFollowed": "是否已经关注",
      "diaryNum": "笔记数量",
      "followerNum": "关注数量",
      "prods": "相关商品信息",
      "oriPrice": "原价",
      "followed": "是否关注",
      "sellersNum": "买手数",
      "price": "单价"
    }
  },
];