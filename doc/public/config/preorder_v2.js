module.exports = [
  {
    "apiDescription": "1 批量商品购买库存校验",
    "apiName": "checkorderproduct",
    "path": "trading/checkorderproduct",
    "apiGroup": "trading",
    "apiPermission": "登录",
    "version": "2.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "prods": "商品规格Id+购买数量+下单时商品价格"
    },
    "paramsDesc": {
      "prods":"商品信息集合，使用逗号分隔，例：prods[0]=商品规格Id,购买数量,下单时商品单价&prods[1]=商品规格Id,购买数量，下单时商品单价"
    },
    "success": {
      "code": 1,
      "msg": ""
    },
    "successDesc": {
      "code": "1：可以下单<br/>2：可以下单但要提示消息<br/>3：不能下单",
      "msg": "不能下单的错误消息"
    }
  },
  {
    "apiDescription": "2 下单页面数据",
    "apiName": "preorderinfo",
    "path": "trading/preorderinfo",
    "apiGroup": "trading",
    "apiPermission": "登录",
    "version": "2.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "prods": "",
      "sourcetype":1,
      "[recommendcoupon]":true,
      "[couponscodes]":"",
      "[pfcouponscode]":"",
      "[recommendpromotion]":true
    },
    "paramsDesc": {
      "sourcetype":"订单来源<br/>0:购物车<br/>1:立即购买",
      "prods": "商品s  例:?prods[0]=规格id,购买数量,购买时商品价格&prods[1]=规格id,购买数量,购买时商品价格",
      "[recommendcoupon]": "是否使用推荐的优惠券",
      "[sellerids]": "商家ids   例:?sellerids[0]=0&sellerids[1]=1",
      "[couponscodes]": "使用的优惠券code,<code>买手</code>和<code>平台</code>的优惠券都放在这个参数里   例:?couponscodes[0]=优惠券code&couponscodes[1]=优惠券code",
      "[pfcouponscode]": "平台使用的自定义的优惠券<code>短码</code>",
      "[recommendpromotion]":"是否启用营销活动,默认false"
    },
    "success":{
      "addressDataItem": {
        "addressId": "",
        "addressee": "",
        "postCode": "",
        "detailAddress": "",
        "phone": "",
        "area":""
      },
      "coupon":{
        "code":"",
        "desc":"",
        "value":"",
        "useLimitsAmount":"",
        "useLimitsScene":"",
        "isExpiring":true,
        "expiredTime":0,
        "couponType":1
      },
      "validCoupons":[
        {
          "code":"",
          "desc":"",
          "value":"",
          "useLimitsAmount":"",
          "useLimitsScene":"",
          "isExpiring":true,
          "expiredTime":0,
          "couponType":1
        }
      ],
      "invalidCoupons":[
        {
          "code":"",
          "desc":"",
          "value":"",
          "useLimitsAmount":"",
          "useLimitsScene":"",
          "isExpiring":true,
          "expiredTime":0,
          "couponType":1
        }
      ],
      "totalPrice":0,
      "sellerOrderList":[
        {
          "sellerInfo":{
            "id":0,
            "avatar":"",
            "name":""
          },
          "coupon":{
            "code":"",
            "desc":"",
            "value":"",
            "useLimitsAmount":"",
            "useLimitsScene":"",
            "isExpiring":true,
            "expiredTime":0,
            "couponType":1
          },
          "validCoupons":[
            {
              "code":"",
              "desc":"",
              "value":"",
              "useLimitsAmount":"",
              "useLimitsScene":"",
              "isExpiring":true,
              "expiredTime":0,
              "couponType":1
            }
          ],
          "invalidCoupons":[
            {
              "code":"",
              "desc":"",
              "value":"",
              "useLimitsAmount":"",
              "useLimitsScene":"",
              "isExpiring":true,
              "expiredTime":0,
              "couponType":1
            }
          ],
          "totalPrice":0,
          "totalFreight":0,
          "totalPiece":0,
          "subOrderList":[
            {
              "name":"",
              "deliveryInfo":"",
              "deliveryType":1,
              "prodList":[
                {
                  "id": "0ab88898-e5b2-4032-a486-9664124f782e",
                  "pic": "http://p5.img.ymatou.com/upload/product/original/e1762141159f4001a5d237ce5b454df8_o.png",
                  "productType": 2,
                  "tariffType": 1,
                  "refundType": 1,
                  "desc": "测试商品，请勿购买",
                  "price": 100,
                  "priceType": 0,
                  "catalogId":"",
                  "skuInfo": "1",
                  "remainStock": 84,
                  "liveRestTime":0,
                  "purchaseNum":1,
                  "deliveryType":1,
                  "supportSevenDaysRefund":true,
                  "couponUseLimitType":1,
                  "activityName": "",
                  "categoryId":0
                }
              ]
            }
          ],
          "additionalList":[
            {
              "desc":"",
              "value":""
            }
          ]
        }
      ],
      "invalidProdList":[
        {
          "id": "0ab88898-e5b2-4032-a486-9664124f782e",
          "pic": "http://p5.img.ymatou.com/upload/product/original/e1762141159f4001a5d237ce5b454df8_o.png",
          "productType": 2,
          "tariffType": 1,
          "refundType": 1,
          "desc": "测试商品，请勿购买",
          "deliveryType":1,
          "price": 100,
          "priceType": 0,
          "catalogId":"",
          "skuInfo": "1",
          "remainStock": 84,
          "liveRestTime":0,
          "purchaseNum":1,
          "state":"",
          "supportSevenDaysRefund":true,
          "couponUseLimitType":1,
          "activityName": "",
          "categoryId":0
        }
      ]
    },
    "successDesc": {
      "couponType":"优惠券类型<br/>1:优惠券<br/>2:优惠短码",
      "purchaseNum":"购买数量",
      "invalidProdList":"失效商品列表",
      "addressDataItem": "收货地址信息",
      "addressId": "地址Id",
      "addressee": "收件人",
      "postCode": "邮编",
      "detailAddress": "详细地址，不包含省市区内容",
      "phone": "联系电话(例:138****1234)",
      "area":"所属的省市区",
      "sellerInfo":"商家的信息 ",
      "id":["商家id","商品的id","商品的id"],
      "avatar":"商家头像url",
      "name":"商家名",
      "prodList":"商品列表",
      "pic": "商品图片",
      "productType": "商品平台<br/>1:扫货<br/>2:现货<br/>3:活动",
      "deliveryInfo":"订单配送信息 例:贝海直邮，包邮或贝海保税，运费￥10.00",
      "deliveryType": "发货类型：<br/>0未知<br/>1国内<br/>2直邮<br/>3贝海直邮<br/>4卖家保税<br/>5贝海保税<br/>6第三方认证直邮<br/>7拼邮",
      "tariffType": "报税类型(包邮包税)<br/>0：不包邮不包税<br/>1:包邮<br/>2:包税<br/>3:包邮包税",
      "refundType": "本土退货类型：<br/>0不支持<br/>1官方<br/>2非官方",
      "desc": ["优惠信息说明(满减，满折) 例:满199减99",
        "优惠信息说明(满减，满折) 例:满199减99",
        "优惠信息说明(满减，满折) 例:满199减99",
        "优惠信息说明(满减，满折) 例:满199减99",
        "优惠信息说明(满减，满折) 例:满199减99",
        "优惠信息说明(满减，满折) 例:满199减99","商品描述",
        "活动标题 例:活动优惠","商品描述"],
      "price": "商品实际价格",
      "priceType": "价格类型：<br/>0普通<br/>1新人价<br/>2VIP价<br/>3运营活动价<br/>4关注可享VIP",
      "skuInfo": "已选择的SKU信息",
      "catalogId":"商品规格id",
      "remainStock": "剩余库存",
      "favorablesResult": "可用的优惠信息",
      "aivialCoupons": "可用的优惠券列表",
      "code": "优惠码",
      "value":["优惠值","活动优惠描述 例:满减，满299减20"],
      "useLimitsAmount":"使用限制额度说明（满100可用）",
      "useLimitsScene":"使用场景限制说明（全场通用，限商品，限品类）",
      "isExpiring":"是否即将失效",
      "expiredTime": "优惠券过期时间单位毫秒",
      "coupon":["平台当前使用的优惠券，未使用就为undefined", "买手当前使用的优惠券，未使用就为undefined"],
      "liveRestTime": "直播剩余时间（毫秒）",
      "totalFreight":"买手订单运费总价",
      "totalPrice":["所有订单总价","买手订单总价"],
      "orderFreight":"订单运费",
      "validCoupons":["平台当前订单可用的优惠券列表","商家当前订单可用的优惠券列表"],
      "invalidCoupons":["平台当前订单不可用的优惠券列表","商家当前订单不可用的优惠券列表"],
      "totalPiece":"商家当前订单总商品数",
      "state":"商品状态<br/>0:正常<br/>1:已售罄<br/>2:已下架<br/>3:已过期<br/>5:已被限购",
      "sellerOrderList":"商家订单列表",
      "additionalList":"买手订单附加信息列表",
      "supportSevenDaysRefund":"支持7天无理由退货（支持=true,不支持=false）",
      "couponUseLimitType":"优惠券使用限制类型 <br/>0:都可以使用<br/>1:不可用买手券<br/>2: 不可用平台券<br/>3:不可用优惠券",
      "activityName":"活动名称",
      "categoryId":"类目ID"
    }
  },
  {
    "apiDescription": "3 验证优惠券",
    "apiName": "checkcoupon",
    "path": "trading/checkcoupon",
    "apiGroup": "trading",
    "apiPermission": "登录",
    "version": "2.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "couponcode": "",
      "prods": "",
      recommendpromotion:true
    },
    "paramsDesc": {
      recommendpromotion:"是否启用营销活动,默认false",
      "couponcode": "优惠券码",
      "prods": "商品s 例：prods[0]=规格id,购买数量,购买时的价格&prods[1]=规格id,购买数量,购买时的价格"
    },
    "success": {
      "code":"",
      "desc":"",
      "value":"",
      "useLimitsAmount":"",
      "isExpiring":true,
      "expiredTime":0,
      "couponType":1
    },
    "successDesc": {
      "couponType":"优惠券类型<br/>1:优惠券<br/>2:优惠短码",
      "code": "优惠码",
      "desc":"优惠信息说明(满减，满折) 例:满199减99",
      "value":"优惠值",
      "useLimitsAmount":"使用限制额度说明（满100可用）",
      "isExpiring":"是否即将过期",
      "expiredTime": "优惠券过期时间单位毫秒"
    }
  },
  {
    "apiDescription": "4 校验当前用户，当前商品是否需要上传身份证号码",
    "apiName": "checkidcard",
    "path": "trading/checkidcard",
    "apiGroup": "trading",
    "apiPermission": "登录",
    "version": "2.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "addressid": "",
      "catalogids": ""
    },
    "paramsDesc": {
      "addressid": "收件人地址Id",
      "catalogids": "商品规格ids 例:?catalogids[0]=id&catalogids[1]=id"
    },
    "success": {
      "isNeedIDCardNum": true
    },
    "successDesc": {
      "isNeedIDCardNum": "是否需要上传身份证号码"
    }
  },
  {
    "apiDescription": "5 保存订单（确认下单）",
    "apiName": "saveorder",
    "path": "trading/saveorder",
    "apiGroup": "trading",
    "apiPermission": "登录",
    "version": "2.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "[idcardno]": "",
      "addressid": 0,
      "sourcetype":1,
      "platformcouponcode":"平台优惠券",
      "[recommendpromotion]":false,
      "sellers":
        [
          {
            "sellerid":1,
            "couponcode": "",
            "deliveries":[
              {
                "deliverymethod":1,
                "leaveword": "",
                "catalogs":[
                  {
                    "catalogid": "",
                    "purchasenum": 0,
                    "purchaseprice":10.0
                  }
                ]
              }
            ]
          }
        ]
    },
    "paramsDesc": {
      "[recommendpromotion]":"是否启用营销活动,默认false",
      "catalogs":"商品列表",
      "sourcetype":"订单来源<br/>0:购物车<br/>1:立即购买",
      "sellerid":"商家id",
      "deliveries":"订单列表",
      "deliverymethod":"配送方式<br/>0:暂不选择<br/>1:国内快递<br/>2:直邮<br/>3:贝海直邮<br/>4:买手保税<br/>5:贝海保税<br/>6:认证直邮<br/>7:拼邮",
      "[idcardno]": "身份证号码，如果需要上传身份证号码则在保存订单时同时将身份证号码传入",
      "sourceip": "来源IP",
      "sellers": "订单详细信息，以买手->配送方式->商品 划分层级",
      "leaveword": "<code>可选</code>订单留言",
      "couponcode": "<code>可选</code>优惠券code",
      "addressid": "收货地址id",
      "catalogid": "商品规格id",
      "purchasenum": "购买数量",
      "purchaseprice":"<code>可选</code>下单时商品单价",
      "platformcouponcode":"平台优惠券"
    },
    "success": {
      "success":false,
      "orderId":1,
      "tradingId":1,
      "subOrders":[{
        "subOrderId":1
      }],
      "msg":""
    },
    "successDesc": {
      "success":"保存订单是否成功",
      "orderId":"订单号",
      "tradingId":"交易编号",
      "subOrders":"子订单列表",
      "subOrderId":"子订单编号",
      "catalogs":"规格信息",
      "catalogId":"规格编号",
      "limitNum":"限购数量",
      "buyNum":"已经购买数量",
      "stockNum":"库存数量",
      "msg":"错误信息"
    }
  }
];