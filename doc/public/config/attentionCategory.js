/********************************************************************
 * Copyright (C) 2016 上海洋码头网络技术有限公司. All Rights Reserved.
 *
 * @author tongliang
 * @email tongliang@ymatou.com
 * @date 7/14/2016
 *
 ********************************************************************
 */

'use strict';

module.exports = [
  {
    "apiDescription": "1 新人画像",
    "apiName": "attentionCategory info list",
    "path": "usercenter/attentioncategory",
    "apiGroup": "attentioncategory",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {channel: 1},
    "paramsDesc": {channel: "1:登录引导页,2:个人中心,3:社区关注页"},
    "success": {
      "checked": false,
      "sexChecked": false,
      "productTypeList": [
        {
          "id": 1,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap01.png",
          "name": "包包"
        },
        {
          "id": 2,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap02.png",
          "name": "美鞋"
        },
        {
          "id": 3,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap03.png",
          "name": "服装"
        },
        {
          "id": 4,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap04.png",
          "name": "彩妆"
        },
        {
          "id": 5,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap05.png",
          "name": "护肤"
        },
        {
          "id": 6,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap06.png",
          "name": "个人护理"
        },
        {
          "id": 7,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap07.png",
          "name": "健康"
        },
        {
          "id": 8,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap08.png",
          "name": "母婴"
        },
        {
          "id": 9,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap09.png",
          "name": "首饰"
        },
        {
          "id": 10,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap10.png",
          "name": "美食"
        },
        {
          "id": 11,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap11.png",
          "name": "运动"
        },
        {
          "id": 12,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap12.png",
          "name": "手表"
        },
        {
          "id": 13,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap13.png",
          "name": "眼镜"
        },
        {
          "id": 14,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap14.png",
          "name": "数码"
        },
        {
          "id": 15,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap15.png",
          "name": "家居"
        },
        {
          "id": 16,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap16.png",
          "name": "男人"
        },
        {
          "id": 17,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap17.png",
          "name": "电器"
        },
        {
          "id": 18,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap18.png",
          "name": "童装"
        },
        {
          "id": 19,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap19.png",
          "name": "户外"
        },
        {
          "id": 20,
          "imageUrl": "http://img.ymatou.com/portal/images/xqtpnw/imap20.png",
          "name": "其他"
        },
        {
          "id": 10916,
          "imageUrl": null,
          "name": "箱包"
        }
      ]
    },
    "successDesc": {
      "checked": "是否选择",
      "sexChecked": "性别是否选择",
      "productTypeList": "商品种类列表",
      "id": "编号",
      "imageUrl": "商品图片地址",
      "name": "商品种类名称"
    }
  },
  {
    "apiDescription": "2 保存新人画像",
    "apiName": "brand info list",
    "path": "usercenter/attentioncategory",
    "apiGroup": "attentioncategory",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "categoryids": [1, 2, 3],
      "sex": 1,
      "ignoredeviceid": true
    },
    "paramsDesc": {
      "categoryids": "id",
      "sex": "性别<br/>0:未设置<br/>1：男<br/>2：女",
      "ignoredeviceid": "是否忽略设备号"
    },
    "success": {
      "success": true
    },
    "successDesc": {
      "success": "成功"
    }
  }
];