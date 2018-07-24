module.exports = [
  {
    "apiDescription": "1 获取订单列表",
    "apiName": "get orderlist",
    "path": "trading/ordercenter/orderlist",
    "apiGroup": "order center",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "lastorderid":1,
      "pagesize":1,
      "orderstate":1
    },
    "paramsDesc": {
      "lastorderid":"上一页最后一条订单编号",
      "pagesize":"一页多少条",
      "orderstate":"订单状态<br/>0-全部<br/>1-待付款<br/>2-待接单<br/>3-待收货<br/>4-待评价<br/>5-售后订单"
    },
    "success":{
      "orders":[{
        "id":1,
        "stateCode":1,
        "stateText":"订单状态文本",
        "autoReceiveTime":1000,
        "saveOrderTime":1000,
        "receiveTime":1000,
        "payDeadlineTime":1000,
        "totalNumber":1,
        "totalPrice":10.0,
        "totalFreight":10.0,
        "idCardUploadUrl":"上传身份证地址",
        "logisticsInfo":"物流信息",
        "evaluated":false,
        "sellerOrderList":[{
          "sellerInfo":{
            "id":1,
            "avatar":"买手头像",
            "name":"买手名称"
          },
          "subOrderList":[{
            "id":1,
            "prodList":[{
              "catalogId":"规格编号",
              "id":"商品编号",
              "pic":"商品图片",
              "purchaseNum":1,
              "sellType":1,
              "deliveryType":1,
              "tariffType":1,
              "refundType":1,
              "desc":"商品描述",
              "price":10.0,
              "priceType":1,
              "skuInfo":"Sku信息"
            }]
          }]
        }],
        "operaButtons":[{
          "type":1,
          "text":"文本",
          "operationId":"操作对象编号"
        }]
      }]
    },
    "successDesc": {
      "evaluated":"是否评分",
      "logisticsUrl":"	查看物流URL地址",
      "sellerOrderList":"买手订单列表",
      "orders":"订单列表",
      "id":["订单编号","商家id","子订单编号","商品编号"],
      "stateCode":"订单状态<br/>0-未知<br/>1-订单确立/（未付款）<br/>2-已付款(等待发货)<br/>3-已发货<br/>4-确认收货<br/>12-买家取消订单<br/>13-卖家取消订单<br/>16-补款中<br/>17-已接单<br/>18-系统自动取消交易<br/>90-待买手发货<br/>100-自动取消订单<br/>101-已确认接单(等待发起补款)<br/>102-客服取消订单<br/>103-修改订单折扣<br/>104-卖家退款<br/>105-买家延长收货",
      "stateText":"订单状态文本",
      "autoReceiveTime":"自动确认收货时间",
      "saveOrderTime":"下单时间",
      "receiveTime":"确认收货时间",
      "payDeadlineTime":"支付的截止时间",
      "totalNumber":"总商品件数",
      "totalPrice":"商品总价",
      "totalFreight":"总运费",
      "sellerOrders":"买手订单列表",
      "seller":"买手信息",
      "avatar":"买手头像",
      "name":"买手名称",
      "level":"买手级别<br/>0-没有设置<br/>1-TOP<br/>2-PRO<br/>3-SEMI-PRO",
      "subOrders":"子订单列表",
      "prodList":"规格列表",
      "catalogId":"规格id",
      "pic":"商品图片",
      "purchaseNum":"购买件数",
      "sellType":"售卖类型<br/>1-扫货<br/>2-现货<br/>3-团",
      "deliveryType":"配送方式<br/>0-暂不选择<br/>1-国内快递<br/>2-直邮<br/>3-贝海直邮<br/>4-买手保税<br/>5-贝海保税<br/>6-认证直邮<br/>7-拼邮",
      "tariffType":"包邮包税<br/>0-默认<br/>1-包邮<br/>2-包税<br/>3-包邮包税",
      "refundType":"退货方式<br/>0-不支持本土退货<br/>1-官方本土退货<br/>2-商家本土退货",
      "desc":"商品描述",
      "price":"商品价格",
      "priceType":"价格类型<br/>0-不享受优惠<br/>1-新客价格<br/>2-VIP价格<br/>3-运营活动价<br/>4-关注享受vip价",
      "productState":"商品状态<br/>0-正常<br/>1-售罄<br/>2-下架<br/>3-过期",
      "skuInfo":"Sku信息",
      "remainStock":"库存",
      "operaButtons":"操作按钮列表",
      "type":"按钮类型<br/>1-支付定金<br/>2-支付尾款<br/>3-支付<br/>4-延迟收货<br/>5-确认收货<br/>6-查看物流<br/>7-联系买手<br/>8-上传身份证<br/>9-写笔记<br/>10-取消订单<br/>11-评分",
      "text":"文本",
      "idCardUploadUrl":"上传身份证地址",
      "operationId":"操作对象编号"
    }
  },
  {
    "apiDescription": "2 获取订单详情",
    "apiName": "get order info",
    "path": "trading/ordercenter/orderinfo",
    "apiGroup": "order center",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "orderid":1,
      "suborderid":1
    },
    "paramsDesc": {
      "orderid":"订单编号",
      "suborderid":"子订单编号"
    },
    "success":{
      "address":{
        "addressee":"收件人",
        "postCode":"邮编",
        "detailAddress":"详细地址，不包含省市区内容",
        "phone":"联系电话"
      },
      "order":{
        "id":1,
        "stateCode":1,
        "stateText":"订单状态文本",
        "autoReceiveTime":1000,
        "saveOrderTime":1000,
        "receiveTime":1000,
        "payDeadlineTime":1000,
        "totalNumber":1,
        "totalPrice":10.0,
        "totalFreight":10.0,
        "sellerOrders":[{
          "seller":{
            "id":1,
            "avatar":"买手头像",
            "name":"买手名称",
            "level":"买手级别"
          },
          "subOrders":[{
            "prodList":[{
              "id":"规格编号",
              "productId":"商品编号",
              "pic":"商品图片",
              "purchaseNum":1,
              "sellType":1,
              "deliveryType":1,
              "tariffType":1,
              "refundType":1,
              "desc":"商品描述",
              "price":10.0,
              "priceType":1,
              "productState":1,
              "skuInfo":"Sku信息",
              "remainStock":1,
              "refundButton":{
                "text":"按钮文字",
                "url":"跳转的Url地址",
                "state":1
              }
            }]
          }]
        }],
        "operaButtons":[{
          "type":1,
          "text":"文本",
          "operationId":"操作对象编号"
        }]
      }
    },
    "successDesc": {
      "address":"地址信息",
      "addressee":"收件人",
      "postCode":"邮编",
      "detailAddress":"详细地址，不包含省市区内容",
      "phone":"联系电话",
      "id":["订单编号","买手编号","商品编号"],
      "stateCode":"订单状态<br/>0-未知<br/>1-订单确立/（未付款）<br/>2-已付款(等待发货)<br/>3-已发货<br/>4-确认收货<br/>12-买家取消订单<br/>13-卖家取消订单<br/>16-补款中<br/>17-已接单<br/>18-系统自动取消交易<br/>90-待买手发货<br/>100-自动取消订单<br/>101-已确认接单(等待发起补款)<br/>102-客服取消订单<br/>103-修改订单折扣<br/>104-卖家退款<br/>105-买家延长收货",
      "stateText":"订单状态文本",
      "autoReceiveTime":"自动确认收货时间",
      "saveOrderTime":"下单时间",
      "receiveTime":"确认收货时间",
      "payDeadlineTime":"支付的截止时间",
      "totalNumber":"总商品件数",
      "totalPrice":"商品总价",
      "totalFreight":"总运费",
      "sellerOrders":"买手订单列表",
      "seller":"买手信息",
      "avatar":"买手头像",
      "name":"买手名称",
      "level":"买手级别<br/>0-没有设置<br/>1-TOP<br/>2-PRO<br/>3-SEMI-PRO",
      "subOrders":"子订单列表",
      "prodList":"规格列表",
      "catalogId":"规格id",
      "pic":"商品图片",
      "purchaseNum":"购买件数",
      "sellType":"售卖类型<br/>1-扫货<br/>2-现货<br/>3-团",
      "deliveryType":"配送方式<br/>0-暂不选择<br/>1-国内快递<br/>2-直邮<br/>3-贝海直邮<br/>4-买手保税<br/>5-贝海保税<br/>6-认证直邮<br/>7-拼邮",
      "tariffType":"包邮包税<br/>0-默认<br/>1-包邮<br/>2-包税<br/>3-包邮包税",
      "refundType":"退货方式<br/>0-不支持本土退货<br/>1-官方本土退货<br/>2-商家本土退货",
      "desc":"商品描述",
      "price":"商品价格",
      "priceType":"价格类型<br/>0-不享受优惠<br/>1-新客价格<br/>2-VIP价格<br/>3-运营活动价<br/>4-关注享受vip价",
      "productState":"商品状态<br/>0-正常<br/>1-售罄<br/>2-下架<br/>3-过期",
      "skuInfo":"Sku信息",
      "remainStock":"库存",
      "refundButton":"退货按钮",
      "operaButtons":"操作按钮列表",
      "url":"跳转的Url地址",
      "state":"按钮状态<br/>1-显示<br/>2-禁用",
      "type":"按钮类型<br/>1-支付定金<br/>2-支付尾款<br/>3-支付<br/>4-延迟收货<br/>5-确认收货<br/>6-查看物流<br/>7-联系买手<br/>8-上传身份证<br/>9-写笔记<br/>10-取消订单<br/>11-评分",
      "text":["按钮文字","文本"],
      "operationId":"操作对象编号"
    }
  },
  {
    "apiDescription": "3 获取订单支付详情",
    "apiName": "get paymentinfo",
    "path": "trading/ordercenter/paymentinfo",
    "apiGroup": "order center",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "orderid":1
    },
    "paramsDesc": {
      "orderid":"订单编号"
    },
    "success":{
      "payDeadLineTime":1000,
      "payRemindTime":1000,
      "payTotal":10.0,
      "balanceValid":false,
      "balance":10.0
    },
    "successDesc": {
      "payDeadLineTime":"最后支付时间",
      "payRemindTime":"下单后付款提示时间(秒)",
      "payTotal":"支付总金额",
      "balanceValid":"余额是否可用",
      "balance":"余额"
    }
  },
  {
    "apiDescription": "4 获取退货列表",
    "apiName": "get refund list",
    "path": "trading/ordercenter/refundlist",
    "apiGroup": "order center",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "pageindex":1,
      "pagesize":1
    },
    "paramsDesc": {
      "pageindex":"页码，最小1",
      "pagesize":"每页内容数量"
    },
    "success":{
      "refundList":[{
        "sellerInfo":{
          "id":1,
          "avatar":"买手头像",
          "name":"买手名称"
        },
        "products":[{
          "id":"商品id",
          "pic":"商品图片",
          "desc":"商品描述",
          "productType":1,
          "deliveryType":1,
          "skuInfo":"SKU信息",
          "refundType":1
        }],
        "refundInfo":{
          "orderId":1,
          "refundUrl":"退货URL",
          "refundAmount":10.0,
          "originalAmount":10.0,
          "refundState":1,
          "tariffType":1
        }
      }]
    },
    "successDesc": {
      "refundList":"退货列表",
      "sellerInfo":"商家信息",
      "id":["商家编号", "商品id"],
      "avatar":"商家头像",
      "name":"商家名称",
      "products":"商品信息",
      "pic":"商品图片",
      "desc":"商品描述",
      "productType":"商品平台<br/>1-现货<br/>2-扫货<br/>3-团",
      "deliveryType":"配送方式<br/>0-暂不选择<br/>1-国内快递<br/>2-直邮<br/>3-贝海直邮<br/>4-买手保税<br/>5-贝海保税<br/>6-认证直邮<br/>7-拼邮",
      "skuInfo":"SKU信息",
      "refundType":"退货方式<br/>0-不支持本土退货<br/>1-官方本土退货<br/>2-商家本土退货",
      "refundInfo":"退货信息",
      "orderId":"订单编号",
      "refundUrl":"退货URL",
      "refundAmount":"退款金额",
      "originalAmount":"实际支付金额",
      "refundState":"退货状态<br/>1-退货中<br/>2-已退货<br/>3-退货已关闭",
      "tariffType":"包邮包税<br/>0-默认<br/>1-包邮<br/>2-包税<br/>3-包邮包税"
    }
  },
  {
    "apiDescription": "5 订单支付",
    "apiName": "pay order",
    "path": "trading/ordercenter/payorder",
    "apiGroup": "order center",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "orderid":1,
      "useaccount":false,
      "[tradingpassword]":"交易密码",
      "paymenttype":1,
      "[wapcallbackurl]":"wap回调地址"
    },
    "paramsDesc": {
      "orderid":"订单编号",
      "useaccount":"是否使用余额",
      "[tradingpassword]":"交易密码",
      "paymenttype":"订单支付方式<br/>0-码头支付<br/>1-支付宝支付<br/>2-微信支付<br/>20-Paypal支付",
      "[wapcallbackurl]":"wap回调地址"
    },
    "success":{
      "paymentType":1,
      "payUrl":"支付宝Wap跳转Url",
      "encryptStr":"支付宝原生支付加密串",
      "weixinRst":{
        "appId":"微信公众号",
        "merchantId":"商户号",
        "nonceStr":"微信随机数",
        "packageValue":"Sign=WXPay",
        "payToken":"微信支付token",
        "sign":"签名",
        "timeStamp":"微信时间戳"
      }
    },
    "successDesc": {
      "paymentType":"订单支付方式<br/>0-码头支付<br/>1-支付宝支付<br/>2-微信支付<br/>20-Paypal支付",
      "payUrl":"支付宝Wap跳转Url",
      "encryptStr":"支付宝原生支付加密串",
      "weixinRst":"微信支付参数详情",
      "appId":"微信公众号",
      "merchantId":"商户号",
      "nonceStr":"微信随机数",
      "packageValue":"Sign=WXPay",
      "payToken":"微信支付token",
      "sign":"签名",
      "timeStamp":"微信时间戳"
    }
  },
  {
    "apiDescription": "6 取消订单",
    "apiName": "cancel order",
    "path": "trading/ordercenter/order",
    "apiGroup": "order center",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "delete",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "orderid":1,
      "reason":"取消原因"
    },
    "paramsDesc": {
      "orderid":"订单id",
      "reason":"取消原因"
    },
    "success":{
      "cancelResult":false,
      "id":1,
      "stateCode":1,
      "stateText":"订单状态文本",
      "operaButtons":[{
        "type":1,
        "text":"文本",
        "operationId":"操作对象编号"
      }]
    },
    "successDesc": {
      "cancelResult":"是否取消成功",
      "id":"订单编号",
      "stateCode":"订单状态<br/>0-未知<br/>1-订单确立/（未付款）<br/>2-已付款(等待发货)<br/>3-已发货<br/>4-确认收货<br/>12-买家取消订单<br/>13-卖家取消订单<br/>16-补款中<br/>17-已接单<br/>18-系统自动取消交易<br/>90-待买手发货<br/>100-自动取消订单<br/>101-已确认接单(等待发起补款)<br/>102-客服取消订单<br/>103-修改订单折扣<br/>104-卖家退款<br/>105-买家延长收货",
      "stateText":"订单状态文本",
      "operaButtons":"操作按钮列表",
      "type":"按钮类型<br/>1-支付定金<br/>2-支付尾款<br/>3-支付<br/>4-延迟收货<br/>5-确认收货<br/>6-查看物流<br/>7-上传身份证<br/>8-写笔记<br/>9-取消订单<br/>10-评分",
      "text":"文本",
      "operationId":"操作对象编号"
    }
  },
  {
    "apiDescription": "7 评价订单",
    "apiName": "order evaluate",
    "path": "trading/ordercenter/orderevaluate",
    "apiGroup": "order center",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "suborderid":1,
      "point":1
    },
    "paramsDesc": {
      "suborderid":"子订单id",
      "point":"分数"
    },
    "success":{
      "evaluatedResult":false,
      "id":1,
      "stateCode":1,
      "stateText":"订单状态文本",
      "operaButtons":[{
        "type":1,
        "text":"文本",
        "operationId":"操作对象编号"
      }]
    },
    "successDesc": {
      "evaluatedResult":"是否评价成功",
      "id":"订单编号",
      "stateCode":"订单状态<br/>0-未知<br/>1-订单确立/（未付款）<br/>2-已付款(等待发货)<br/>3-已发货<br/>4-确认收货<br/>12-买家取消订单<br/>13-卖家取消订单<br/>16-补款中<br/>17-已接单<br/>18-系统自动取消交易<br/>90-待买手发货<br/>100-自动取消订单<br/>101-已确认接单(等待发起补款)<br/>102-客服取消订单<br/>103-修改订单折扣<br/>104-卖家退款<br/>105-买家延长收货",
      "stateText":"订单状态文本",
      "operaButtons":"操作按钮列表",
      "type":"按钮类型<br/>1-支付定金<br/>2-支付尾款<br/>3-支付<br/>4-延迟收货<br/>5-确认收货<br/>6-查看物流<br/>7-上传身份证<br/>8-写笔记<br/>9-取消订单<br/>10-评分",
      "text":"文本",
      "operationId":"操作对象编号"
    }
  },
  {
    "apiDescription": "8 确认收货",
    "apiName": "receive order",
    "path": "trading/ordercenter/receiveorder",
    "apiGroup": "order center",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "suborderid":1
    },
    "paramsDesc": {
      "suborderid":"子订单id"
    },
    "success":{
      "receiveResult":false,
      "id":1,
      "stateCode":1,
      "stateText":"订单状态文本",
      "operaButtons":[{
        "type":1,
        "text":"文本",
        "operationId":"操作对象编号"
      }]
    },
    "successDesc": {
      "receiveResult":"确认收货是否成功",
      "id":"订单编号",
      "stateCode":"订单状态<br/>0-未知<br/>1-订单确立/（未付款）<br/>2-已付款(等待发货)<br/>3-已发货<br/>4-确认收货<br/>12-买家取消订单<br/>13-卖家取消订单<br/>16-补款中<br/>17-已接单<br/>18-系统自动取消交易<br/>90-待买手发货<br/>100-自动取消订单<br/>101-已确认接单(等待发起补款)<br/>102-客服取消订单<br/>103-修改订单折扣<br/>104-卖家退款<br/>105-买家延长收货",
      "stateText":"订单状态文本",
      "operaButtons":"操作按钮列表",
      "type":"按钮类型<br/>1-支付定金<br/>2-支付尾款<br/>3-支付<br/>4-延迟收货<br/>5-确认收货<br/>6-查看物流<br/>7-上传身份证<br/>8-写笔记<br/>9-取消订单<br/>10-评分",
      "text":"文本",
      "operationId":"操作对象编号"
    }
  },
  {
    "apiDescription": "9 延迟收货",
    "apiName": "delay receive order",
    "path": "trading/ordercenter/delayreceiveorder",
    "apiGroup": "order center",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "suborderid":1
    },
    "paramsDesc": {
      "suborderid":"子订单id"
    },
    "success":{
      "delayReceiveResult":false,
      "msg":"延迟成功消息",
      "delayReceiveDays":1,
      "id":1,
      "stateCode":1,
      "stateText":"订单状态文本",
      "operaButtons":[{
        "type":1,
        "text":"文本",
        "operationId":"操作对象编号"
      }]
    },
    "successDesc": {
      "delayReceiveResult":"延迟收货是否成功",
      "msg":"延迟成功消息",
      "delayReceiveDays":"延迟天数",
      "id":"订单编号",
      "stateCode":"订单状态<br/>0-未知<br/>1-订单确立/（未付款）<br/>2-已付款(等待发货)<br/>3-已发货<br/>4-确认收货<br/>12-买家取消订单<br/>13-卖家取消订单<br/>16-补款中<br/>17-已接单<br/>18-系统自动取消交易<br/>90-待买手发货<br/>100-自动取消订单<br/>101-已确认接单(等待发起补款)<br/>102-客服取消订单<br/>103-修改订单折扣<br/>104-卖家退款<br/>105-买家延长收货",
      "stateText":"订单状态文本",
      "operaButtons":"操作按钮列表",
      "type":"按钮类型<br/>1-支付定金<br/>2-支付尾款<br/>3-支付<br/>4-延迟收货<br/>5-确认收货<br/>6-查看物流<br/>7-上传身份证<br/>8-写笔记<br/>9-取消订单<br/>10-评分",
      "text":"文本",
      "operationId":"操作对象编号"
    }
  }
];