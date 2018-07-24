module.exports = [
  {
    "apiDescription": "1 全局启动配置",
    "apiName": "globalconfig",
    "path": "globalconf/globalconfig",
    "apiGroup": "globalconf",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {},
    "paramsDesc": {},
    "success": {
      "serverTime": 1459910362,
      "cache": false,
      "version": {
        "no": "2.6.5",
        "state": 1,
        "href": "https://itunes.apple.com/cn/app/hai-wai-sao-huo-shen-qi/id668533031",
        "text": "2.6.5更新"
      },
      "ad": {
        "id": 3,
        "pic": "http://staticontent.ymatou.com/app/kjhm003.png",
        "href": "http://ymtou.com",
        "cd": 3,
        "version": 112
      },
      "tab": [
        {
          "key": "直播",
          "iconNormal": "http://img.ymatou.com/app/tab/0_0_hd.png",
          "iconSelected": "http://img.ymatou.com/app/tab/0_1_hd.png",
          "text": "直播",
          "url": ""
        }
      ],
      "redirect": {
        "type": 1,
        "value": "0"
      }
    },
    "successDesc": {
      "serverTime": "服务器当前时间，单位毫秒",
      "cache": "是否使用缓存",
      "abtest": "各版本用户占比 Number array描述",
      "version": ["版本检测", "广告版本号"],
      "no": "版本号",
      "state": "版本状态 <br/>1：已经是最新版本不需要更新 <br/>2：存在可更新的版本 <br/>3：当前版本不可用，强制升级",
      "href": ["下载链接", "广告链接"],
      "text": ["升级提示文案", "文案"],
      "url": "链接地址",
      "ad": "广告",
      "id": "广告id",
      "pic": "广告图片地址",
      "cd": "倒计时",
      "tab": "底部配置 Object array描述",
      "key": "tab索引",
      "iconNormal": "正常状态下图片链接",
      "iconSelected": "选中状态下图片链接",
      "redirect": "启动页签",
      "type": "启动页类型 <br/>1：tab切换 <br/>2：打开H5页面",
      "value": "type为1时，值为tab的索引 <br/>type为2时，值为url链接"
    }
  },
  {
    "apiDescription": "2 启动配置列表",
    "apiName": "globalconfiglist",
    "path": "globalconf/globalconfiglist",
    "apiGroup": "globalconf",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {},
    "paramsDesc": {},
    "success": {
      "keeperId": 1,
      "searchTips": "搜索提示文案",
      "recommendPayType": 1,
      "recommendPayTip": "推荐使用的文案"
    },
    "successDesc": {
      "keeperId": "洋管家编号",
      "searchTips": "搜索提示文案",
      "recommendPayType": "推荐使用的支付方式<br/>1-支付宝<br/>2-微信",
      "recommendPayTip": "推荐使用的文案"
    }
  },
  {
    "apiDescription": "3 获取业务配置列表单key",
    "apiName": "businessconfig",
    "path": "globalconf/businessconfig",
    "apiGroup": "globalconf",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "key": "配置Key"
    },
    "paramsDesc": {
      "key": "配置Key"
    },
    "success": {
      "value": "配置Value"
    },
    "successDesc": {
      "value": "配置Value"
    }
  },
  {
    "apiDescription": "4 获取业务配置列表多key",
    "apiName": "businessconfiglist",
    "path": "globalconf/businessconfiglist",
    "apiGroup": "globalconf",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "keys": ["配置Keys"]
    },
    "paramsDesc": {
      "keys": ["配置Keys"]
    },
    "success": {
      "configs": {}
    },
    "successDesc": {
      "configs": {}
    }
  },
  {
    "apiDescription": "5 删除全局配置缓存",
    "apiName": "removecache",
    "path": "globalconf/removecache",
    "apiGroup": "globalconf",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {
      "clienttype": "客户端类型，Android|iOS",
      "versioncode": "版本号,2.6.5",
      "appname": "App名称"
    },
    "paramsDesc": {
      "clienttype": "客户端类型，Android|iOS",
      "versioncode": "版本号,2.6.5",
      "appname": "App名称"
    },
    "success": {},
    "successDesc": {}
  },
  {
    "apiDescription": "6 删除Businessconfig配置缓存",
    "apiName": "removebusinessconfigcache",
    "path": "globalconf/removebusinessconfigcache",
    "apiGroup": "globalconf",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader", "apiError"
    ],
    "params": {},
    "paramsDesc": {},
    "success": {},
    "successDesc": {}
  },
];