/********************************************************************
 * Copyright (C) 2016 上海洋码头网络技术有限公司. All Rights Reserved.
 *
 * @author tongliang
 * @email tongliang@ymatou.com
 * @date 7/20/2016
 *
 ********************************************************************
 */

'use strict';

module.exports = [
  {
    "apiDescription": "1 获取用户余额以及默认账户信息",
    "apiName": "balance",
    "path": "usercenter/balance",
    "apiGroup": "balance",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      hasbank: 0
    },
    "paramsDesc": {
      hasbank: '是否返回默认账号信息<br/>0:不包含<br/>1：包含'
    },
    "success": {
      "code": 1,
      "msg": "success",
      "balance": 999971252.4,
      "balanceAccount": {
        "accountId": "b31ba822-a0b6-4952-b652-e3a95c243eab",
        "accountNo": "***.com",
        "bankName": "支付宝"
      }
    },
    "successDesc": {
      "code": '是否可以提现<br/>1:可以提现<br/>2:不可以提现<br/>3:未绑定手机号<br/>4:未设置交易密码<br/>5:可以用交易密码提现<br/>6:可以用手机提现',
      "msg": "不可以提现的错误信息",
      "balance": '余额',
      "balanceAccount": '账号信息',
      "accountId": "账号id",
      "accountNo": "卡号/支付账号",
      "bankName": "银行/支付平台名称"

    }
  },
  {
    "apiDescription": "2 获取用户账户列表信息",
    "apiName": "balance account",
    "path": "usercenter/balance/account",
    "apiGroup": "balance",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      pageindex: 1,
      pagesize: 10
    },
    "paramsDesc": {
      pageindex: "页码从1开始",
      pagesize: "分页数据大小"
    },
    "success": {
      "list": [
        {
          "accountId": "28934fe2-f983-46ef-a29c-4d21f3ce5a5c",
          "accountNo": "***@qq.com",
          "bankName": "支付宝"
        },
        {
          "accountId": "e4dd3b16-eca4-4db0-8540-39a3feba2730",
          "accountNo": "***3455",
          "bankName": "中国建设银行"
        }
      ]
    },
    "successDesc": {
      "list": '列表',
      "accountId": "账号id",
      "accountNo": "卡号/支付账号",
      "bankName": "银行/支付平台名称"
    }
  },
  {
    "apiDescription": "3 添加用户账户",
    "apiName": "add balance account",
    "path": "usercenter/balance/account",
    "apiGroup": "balance",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "accountName": "测试",
      "cardNo": "6222020903001483077",
      "city": "上海",
      "province": "上海",
      "institution": "中国工商银行",
      "institutionId": "7A5CEAC5-9A63-4FF2-A23C-1F2184F9DC95"
    },
    "paramsDesc": {
      "accountName": "账号名称",
      "cardNo": "卡号/账号",
      "city": "城市",
      "province": "省份",
      "institution": "银行名称",
      "institutionId": "银行机构ID<br/>中国招商銀行:D2E4AB14-BFBD-4692-B9AD-3A43459447B0<br/>交通银行:716972DF-3F5F-47EF-96CE-404900C8EAC8<br/>中国农业银行:D1E1E7CE-A035-4FA5-A9B6-E620D9322672<br/>中国建设银行:925CF663-FCBA-4380-846B-32162E58C355<br/>中国银行:BD7047FA-B2F6-43AF-B7A9-12DA89E0C9AE<br/>中国工商银行:7A5CEAC5-9A63-4FF2-A23C-1F2184F9DC95<br/>支付宝:空值"
    },
    "success": {
      "accountId": "32627760-007d-4c90-89c8-32a75d2870e7",
      "bankName": "中国工商银行",
      "accountNo": "***4213"
    },
    "successDesc": {
      "accountId": "账号id",
      "accountNo": "卡号/支付账号",
      "bankName": "银行/支付平台名称"
    }
  },
  {
    "apiDescription": "4 确认提现",
    "apiName": "balance withdraw",
    "path": "usercenter/balance/withdraw",
    "apiGroup": "balance",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "verifyCodeType": 2,
      "verifyCode": "a12345",
      "accountId": "32627760-007d-4c90-89c8-32a75d2870e7"
    },
    "paramsDesc": {
      "verifyCodeType": "验证码类型<br/>1：手机验证码<br/>2：交易密码",
      "verifyCode": "验证码或者交易密码",
      "accountId": "账号id"
    },
    "success": {
      'balance': 100,
      'bankName': '中国工商银行',
      'accountNo': '***1234',
      "result": "FTX2016072210136965"
    },
    "successDesc": {
      'balance': '体现金额',
      'bankName': '银行',
      'accountNo': '体现账号',
      "result": "流水号"
    }
  },
  {
    "apiDescription": "5 检查账号是否可以提现",
    "apiName": "account status",
    "path": "usercenter/balance/accountstatus",
    "apiGroup": "balance",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "accountid": "acad9bdb-2d60-4744-9a54-147cde26103a"
    },
    "paramsDesc": {
      "accountid": "账户id"
    },
    "success": {
      success: true
    },
    "successDesc": {
      success: '是否可以提现'
    }
  },
];