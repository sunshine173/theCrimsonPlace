module.exports = [
  {
    "apiDescription": "1 点击购买库存校验",
    "apiName": "checkorderproduct",
    "path": "trading/checkorderproduct",
    "apiGroup": "trading",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "catalogid": "商品规格Id",
      "purchasenum": 0,
      "[purchaseprice]":1
    },
    "paramsDesc": {
      "catalogid": "商品规格Id",
      "purchasenum": "购买数量",
      "[purchaseprice]":"下单时商品单价"
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
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "catalogid": "商品规格Id",
      "purchasenum": 0
    },
    "paramsDesc": {
      "catalogid": "商品规格Id",
      "purchasenum": "购买数量"
    },
    "success": {
      "isNeedIDCardNum": false,
      "noticeRiskText": "",
      "addressDataItem": {
        "addressId": "",
        "addressee": "",
        "postCode": "",
        "detailAddress": "",
        "phone": "",
        "area":""
      },
      "orderTotalPrice": 100,
      "orderTotalEarnestPrice": 0,
      "orderFreight": 0,
      "productInfo": {
        "id": "0ab88898-e5b2-4032-a486-9664124f782e",
        "pic": "http://p5.img.ymatou.com/upload/product/original/e1762141159f4001a5d237ce5b454df8_o.png",
        "productType": 2,
        "deliveryType": 2,
        "tariffType": 1,
        "refundType": 1,
        "description": "测试商品，请勿购买",
        "sellerInfo": {
          "id": 3383,
          "avatar": "",
          "name": "wesper",
          "level": 4
        },
        "price": 100,
        "priceType": 0,
        "skuInfo": "1",
        "remainStock": 84
      },
      "favorablesResult": {
        "aivialCoupons": [
          {
            "couponInfo": "",
            "couponCode": "",
            "expiredTime": 0,
            "couponOffsetMoney": 0
          }
        ]
      }
    },
    "successDesc": {
      "isNeedIDCardNum": "订单是否需要上传身份证号码",
      "noticeRiskText": "库存紧缺的提示(仅剩xx件)",
      "addressDataItem": "收货地址信息",
      "addressId": "地址Id",
      "addressee": "收件人",
      "postCode": "邮编",
      "detailAddress": "详细地址，不包含省市区内容",
      "phone": "联系电话(例:138****1234)",
      "area":"所属的省市区",
      "orderTotalPrice": "订单总价/预估到手价",
      "orderTotalEarnestPrice": "订单总订金价",
      "orderFreight": "订单运费",
      "productInfo": "订单的商品信息",
      "id": [
        "商品的id",
        "商家id"
      ],
      "pic": "商品图片",
      "productType": "商品平台<br/>1:扫货<br/>2:现货<br/>3:活动",
      "deliveryType": "发货类型：<br/>0未知<br/>1国内<br/>2直邮<br/>3贝海直邮<br/>4卖家保税<br/>5贝海保税<br/>6第三方认证直邮<br/>7拼邮",
      "tariffType": "报税类型(包邮包税)<br/>0：不包邮不包税<br/>1:包邮<br/>2:包税<br/>3:包邮包税",
      "refundType": "本土退货类型：<br/>0不支持<br/>1官方<br/>2非官方",
      "description": "商品描述",
      "sellerInfo": "卖家的信息",
      "price": "商品实际价格",
      "priceType": "价格类型：<br/>0普通<br/>1新人价<br/>2VIP价<br/>3运营活动价<br/>4关注可享VIP",
      "skuInfo": "已选择的SKU信息",
      "remainStock": "剩余库存",
      "favorablesResult": "可用的优惠信息",
      "aivialCoupons": "可用的优惠券列表",
      "couponInfo": "优惠信息说明(满减，满折)",
      "couponCode": "优惠码",
      "expiredTime": "过期时间",
      "couponOffsetMoney": "本次订单可用的抵扣金额",
      "avatar": "商家头像url",
      "name": "商家名",
      "level": "买手级别<br/>1=TOP<br/>2=PRO<br/>3=SEMI<br/>4=WARNING-LIST"
    }
  },
  {
    "apiDescription": "3 验证优惠券",
    "apiName": "checkcoupon",
    "path": "trading/checkcoupon",
    "apiGroup": "trading",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "couponcode": "",
      "catalogid": "好货分类名称",
      "purchasenum": 0
    },
    "paramsDesc": {
      "couponcode": "优惠券码",
      "catalogid": "商品规格ID",
      "purchasenum": "购买数量"
    },
    "success": {
      "couponInfo": "",
      "couponCode": "",
      "expiredTime": 0,
      "couponOffsetMoney": 0
    },
    "successDesc": {
      "couponInfo": "优惠信息说明(满减，满折)",
      "couponCode": "优惠码",
      "expiredTime": "过期时间",
      "couponOffsetMoney": "本次订单可用的抵扣金额"
    }
  },
  {
    "apiDescription": "4 校验当前用户，当前商品是否需要上传身份证号码",
    "apiName": "checkidcard",
    "path": "trading/checkidcard",
    "apiGroup": "trading",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "addressid": "",
      "catalogid": ""
    },
    "paramsDesc": {
      "addressid": "收件人地址Id",
      "catalogid": "商品规格id"
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
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "[idcardno]": "",
      "sourceip": "",
      "orderinfo": {
        "leaveword": "",
        "couponcode": "",
        "addressid": 0,
        "catalogid": "",
        "purchasenum": 0,
        "purchaseprice":0
      }
    },
    "paramsDesc": {
      "userlevel": "买家用户等级",
      "ordertype": "订单类型",
      "ordersource": "订单来源：<br/>PC = 0,<br/>APP = 1,<br/>WAP = 2,<br/>Wechat = 3,<br/>C2CAPP = 4,<br/>C2CWAP = 5,<br/>C2CWechat = 6,<br/>Other = 7",
      "terminalsource": "终端来源(如：IOS、Android)：<br/>Unknown = 0,<br/>Windows = 1,<br/>Linux = 2,<br/>IOS = 3,<br/>Android = 4,<br/>WP = 5",
      "appTerminalsource": "应用终端来源(如：Pad、PC、Phone)：<br/>Unknown = 0,<br/>PC = 1,<br/>Pad = 2,<br/>Phone = 3,",
      "[idcardno]": "身份证号码，如果需要上传身份证号码则在保存订单时同时将身份证号码传入",
      "sourceip": "来源IP",
      "orderinfo": "订单详细信息",
      "leaveword": "<code>可选</code>订单留言",
      "freight": "运费",
      "couponcode": "<code>可选</code>优惠券code",
      "addressid": "收货地址id",
      "catalogid": "商品规格id",
      "purchasenum": "购买数量",
      "purchaseprice":"<code>可选</code>下单时商品单价"
    },
    "success": {
      "orderId": "",
      "maxPurchaseNum":0,
      "code":1,
      "msg":""
    },
    "successDesc": {
      "orderId": "订单编号",
      "maxPurchaseNum":"可买的最大数量",
      "code":"1：保存订单成功。<br/>2：保存订单失败，购买库存有变化，需要根据返回可买最大数量刷新界面和重新下单。<br/>3：保存订单失败(商品下架，过期，售罄等而不能下单)。",
      "msg":"不能下单的错误消息"
    }
  }
];