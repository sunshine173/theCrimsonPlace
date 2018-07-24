module.exports = [
  {
    "apiDescription": "1 加入购物车",
    "apiName": "add scartprod",
    "path": "trading/scartprod",
    "apiGroup": "shopping cart",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "catalogid":"",
      "purchasenum":0,
      "[source]":1
    },
    "paramsDesc": {
      "catalogid":"商品规格Id",
      "purchasenum":"购买数量",
      "[source]":"订单来源<br/>0:购物车<br/>1:立即购买"
    },
    "success":{
      "totalNum":1,
      "success":true,
      "msg":"添加购物车成功消息"
    },
    "successDesc": {
      "success":"是否成功添加购物车",
      "validNum":"购物车有效商品数量",
      "totalNum":"购物车所有商品数量，包含有效、无效商品",
      "msg":"添加购物车成功消息"
    }
  },
  {
    "apiDescription": "2 删除购物车多个商品",
    "apiName": "del scartprod",
    "path": "trading/scartprod",
    "apiGroup": "shopping cart",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "DELETE",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "scids":[""]
    },
    "paramsDesc": {
      "scids":"购物车ids"
    },
    "success":{
      "totalNum":1,
      "success":true,
      "msg":""
    },
    "successDesc": {
      "totalNum":"购物车商品数量",
      "success":"是否删除成功",
      "msg":"删除购物车商品成功消息"
    }
  },
  {
    "apiDescription": "3 修改购物车商品数量",
    "apiName": "scartprodnum",
    "path": "trading/scartprodnum",
    "apiGroup": "shopping cart",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "scid":"购物车id",
      "purchasenum":0
    },
    "paramsDesc": {
      "scid":"购物车id",
      "purchasenum":"当前购买数量 update"
    },
    "success":{
      "success":true,
      "msg":"",
      "purchaseNum":1,
      "isMax":true
    },
    "successDesc": {
      "purchaseNum":"实际购买数量",
      "isMax":"是否达到购物车上限",
      "success":"是修改成功",
      "msg":"修改购物车商品数量成功消息"
    }
  },
  {
    "apiDescription": "4 修改购物车商品规格",
    "apiName": "scartprodcatalog",
    "path": "trading/scartprodcatalog",
    "apiGroup": "shopping cart",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "scid":"",
      "catalogid":""
    },
    "paramsDesc": {
      "scid":"购物车id",
      "catalogid":"新的规格id"
    },
    "success":{
      "success":true,
      "msg":"",
      "purchaseNum":1,
      "isMax":true
    },
    "successDesc": {
      "purchaseNum":"实际购买数量",
      "isMax":"是否达到购物车上限",
      "success":"是修改成功",
      "msg":"修改购物车商品规格成功消息"
    }
  },
  {
    "apiDescription": "5 获得购物车详情",
    "apiName": "scart",
    "path": "trading/scart",
    "apiGroup": "shopping cart",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      groupByPromotion:true
    },
    "paramsDesc": {
      groupByPromotion:"是否按营销活动分组显示"
    },
    "success":{
      "totalPrice":0,
      "totalNum":0,
      "list":[
        {
          "sellerInfo":{
            "id":0,
            "avatar":"",
            "name":"",
            "hasCoupons":false
          },
          promotionGroup: [
            {
              promotionInfo:{
                id:1,
                typeName : "满减",
                name:"满xx元，减XX元",
                group:["aaa","bbb","ccc"],
                desc:"以上商品已参加购满减XX元立减XX元",
                amount:0,
                needBuyMore:false,
                title:"已购满xx元，已减XX元"
              },
              "prodList":[
                {
                  "deliveryDesc":"",
                  "deliveryType": 2,
                  "scid":"",
                  "id": "0ab88898-e5b2-4032-a486-9664124f782e",
                  "pic": "http://p5.img.ymatou.com/upload/product/original/e1762141159f4001a5d237ce5b454df8_o.png",
                  "productType": 2,
                  "tariffType": 1,
                  "refundType": 1,
                  "description": "测试商品，请勿购买",
                  "price": 100,
                  "priceType": 0,
                  "skuInfo": "1",
                  "catalogId":"",
                  "remainStock": 84,
                  "restTime":0,
                  "sellerId":0,
                  "purchaseNum":1,
                  "stockDesc":"",
                  isNoReasonReturn:true,
                  activityName:"活动名称",
                  isSingleCatalog:true
                }
              ]
            }
          ],
          "prodList":[
            {
              "deliveryDesc":"",
              "deliveryType": 2,
              "scid":"",
              "id": "0ab88898-e5b2-4032-a486-9664124f782e",
              "pic": "http://p5.img.ymatou.com/upload/product/original/e1762141159f4001a5d237ce5b454df8_o.png",
              "productType": 2,
              "tariffType": 1,
              "refundType": 1,
              "description": "测试商品，请勿购买",
              "price": 100,
              "priceType": 0,
              "skuInfo": "1",
              "catalogId":"",
              "remainStock": 84,
              "restTime":0,
              "sellerId":0,
              "purchaseNum":1,
              "stockDesc":"",
              isNoReasonReturn:true,
              activityName:"活动名称"
            }
          ]
        }
      ],
      "invalidProdList":[
        {
          "scid":"",
          "stockDesc":"库存描述 例：仅剩xx件",
          "id": "0ab88898-e5b2-4032-a486-9664124f782e",
          "pic": "http://p5.img.ymatou.com/upload/product/original/e1762141159f4001a5d237ce5b454df8_o.png",
          "productType": 2,
          "deliveryType": 2,
          "tariffType": 1,
          "refundType": 1,
          "description": "测试商品，请勿购买",
          "price": 100,
          "priceType": 0,
          "skuInfo": "1",
          "catalogId":"",
          "remainStock": 84,
          "purchaseNum":1,
          "state":""
        }
      ]
    },
    "successDesc": {
      isSingleCatalog:"是否是单规格商品",
      needBuyMore:"是否需要凑单",
      achieve:"是否满足优惠条件",
      activityName:"活动名称",
      promotionGroup:"营销商品分组",
      typeName : "满减",
      group:"分组的规格id",
      desc:"以上商品已参加购满减XX元立减XX元",
      amount:"优惠金额",
      title:"已购满xx元，已减XX元",
      isNoReasonReturn:"是否支持7天无理由退货",
      "stockDesc":"库存描述 例：仅剩xx件",
      "catalogId":"商品规格id",
      "invalidProdList":"无效商品列表",
      "purchaseNum":"购买数量",
      "hasCoupons":"商品是否有优惠券可领取",
      "sellerId":"商家id",
      "scid":"购物车id",
      "totalPrice":"所有选中商品总价",
      "totalNum":"所有商品数量，包括无效商品",
      "deliveryList":"配送方式列表",
      "deliveryDesc":"配送信息描述 例:由洋码头官方物流入境、清关、配送",
      "sellerInfo":"商家的信息 ",
      "id":["商家id","营销活动id","商品的id"],
      "avatar":"商家头像url",
      "name":["商家名","满xx元，减XX元"],
      "prodList":"购物车商品列表？",
      "pic": "商品图片",
      "productType": "商品平台<br/>1:扫货<br/>2:现货<br/>3:活动",
      "deliveryType": "发货类型：<br/>0未知<br/>1国内<br/>2直邮<br/>3贝海直邮<br/>4卖家保税<br/>5贝海保税<br/>6第三方认证直邮<br/>7拼邮",
      "tariffType": "报税类型(包邮包税)<br/>0：不包邮不包税<br/>1:包邮<br/>2:包税<br/>3:包邮包税",
      "refundType": "本土退货类型：<br/>0不支持<br/>1官方<br/>2非官方",
      "description": "商品描述",
      "price": "商品实际价格",
      "priceType": "价格类型：<br/>0普通<br/>1新人价<br/>2VIP价<br/>3运营活动价<br/>4关注可享VIP",
      "skuInfo": "已选择的SKU信息",
      "remainStock": "剩余库存",
      "favorablesResult": "可用的优惠信息",
      "aivialCoupons": "可用的优惠券列表",
      "couponInfo": "优惠信息说明(满减，满折)",
      "couponCode": "优惠码",
      "restTime": "剩余时间（秒）",
      "state":"0:正常<br/>1:已售罄<br/>2:已下架<br/>3:已过期<br/>5:超限购"
    }
  },
  {
    "apiDescription": "6 清空购物车无效商品",
    "apiName": "del scartinvalidprod",
    "path": "trading/scartinvalidprod",
    "apiGroup": "shopping cart",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "delete",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
    },
    "paramsDesc": {
    },
    "success":{
      "msg":""
    },
    "successDesc": {
      "msg":"清空成功返回消息"
    }
  },
  {
    "apiDescription": "7 获取购物车商品数量",
    "apiName": "get scartprodnum",
    "path": "trading/scartprodnum",
    "apiGroup": "shopping cart",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "clearinvalid":true
    },
    "paramsDesc": {
      "clearinvalid":"是否需要清空超过7天的失效商品"
    },
    "success":{
      "totalNum":0
    },
    "successDesc": {
      "validNum":"购物车有效商品数量",
      "totalNum":"购物车所有商品数量，包含有效、无效商品"
    }
  },
  {
    "apiDescription": "8 获取商品总价",
    "apiName": "get scartprodtotalprice",
    "path": "trading/scartprodtotalprice",
    "apiGroup": "shopping cart",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "prods":[
        {
          "catalogid":"",
          "count":1
        }
      ],
      recommendPromotion:true
    },
    "paramsDesc": {
      recommendPromotion:"是否参加买手营销活动",
      "prods":"购物车商品列表",
      "catalogid":"商品规格id",
      "count":"商品数量"
    },
    "success":{
      "price":0,
      discountAmount:0
    },
    "successDesc": {
      discountAmount:"优惠金额",
      "price":"商品总价"
    }
  }
];