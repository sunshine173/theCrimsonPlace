module.exports = [
  {
    "apiDescription": "0 搜索入口(安卓)",
    "apiName": "get search",
    "path": "nodesearch/search",
    "apiGroup": "search",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      type:1,
      onlyprod:true,
      keyword:'',
      pagesize:10,
      pageindex:0,
      '[countryid]':1,
      '[deliveryid]':1,
      assortmenttype:1
    },
    "paramsDesc": {
      'keyword':"所有搜索类型的参数都在这里",
      type:"搜索类型 <br/>1:关键字搜商品 <br/>2:关键字搜笔记<br/>3:笔记分类id搜笔记<br/>" +
      "4:关键字搜买手<br/>5:买手id搜商品<br/>6:分类搜商品<br/>7:优惠券id搜适用商品<br/>"+
        "8:获取文字相关关键字<br/>9:搜索下拉提示关键字",
      onlyprod:"true：只返回商品部分的信息，false：返回包含基础信息",
      pagesize:"一页多少数量",
      pageindex:"第几页 0代表第一页",
      "[countryid]":"国家id, 不传代表全部",
      "[deliveryid]":"物流id，不传代表全部",
      assortmenttype:'类型 <br/>1:品类<br/>2:品牌<br/>3:标签<br/>4:品牌名+空格+标签名'
    },
    "success":{
      "type1":"",
      "type2":"",
      "type3":"",
      "type4":"",
      "type5":"",
      "type6":"",
      "type7":"",
      "type8":"",
      "type9":""
    },
    "successDesc": {
      "type1":'<a href="#api-search-get_search_prod_list">返回值</a>',
      "type2":'<a href="#api-search-get_search_note_list_page">返回值</a>',
      "type3":'<a href="#api-search-get_search_note_list_page_by_id">返回值</a>',
      "type4":'<a href="#api-search-get_search_seller_list">返回值</a>',
      "type5":'<a href="#api-search-get_search_prod_list_by_sellerid">返回值</a>',
      "type6":'<a href="#api-search-get_search_prod_list_by_assortment">返回值</a>',
      "type7":'<a href="#api-search-get_search_prod_list_by_coupon">返回值</a>',
      "type8":'<a href="#api-search-get_search_keywords_relevantwords">返回值</a>',
      "type9":'<a href="#api-search-get_search_keywords_list">返回值</a>'
    }
  },
  {
    "apiDescription": "1 搜索商品",
    "apiName": "get search prod list",
    "path": "nodesearch/prod",
    "apiGroup": "search",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "keyword":"",
      pagesize:1,
      "[countryid]":"国家id, 不传代表全部",
      "[deliveryid]":"物流id，不传代表全部"
    },
    "paramsDesc": {
      "pagesize":"返回多少件商品，后面分页请求全部的时候pageindex从1开始",
      "keyword":"搜索的关键字",
      "[countryid]":"国家id, 不传代表全部",
      "[deliveryid]":"物流id，不传代表全部"
    },
    "success":{
      recommendWord:"",
      keywordList:[""],
      noteCount:1,
      deliveryList:[
        {
          deliveryId:1,
          description:""
        }
      ],
      countryList:[
        {
          countryId:"",
          countryName:"",
          flag:""
        }
      ],
      prodList:[
        {
          "id": "4cbf26db-3eb5-4100-a44b-fc99c4d4d0a3",
          "name": "【SKU-多规格】~新客价，VIP价：天阶夜色凉如水 ，坐看牵牛织女。迢迢牵牛星，皎皎河汉女~~~",
          "deliveryType": 6,
          "price": 5,
          "stock": 136,
          "pic": "http://pc4.img.ymatou.com/G01/shangou/M00/10/B8/rBBlD1dPu5eAE2PwAACo_HjiPvc538_w_lb.jpg",
          "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品",
          tariffType:1,
          "sellerInfo": {
            "id": 483838,
            "name": "麦兜兜heidi",
            "avatarUrl": "http://p4.img.ymatou.com/upload/userlogo/original/483838_21db8318aa3e4b7c89cf3db2224e2795_o.jpg",
            "countryName": "美国",
            "countryIconUrl": "http://img.ymatou.com/app/flag/circle/America.png"
          }
        }
      ]
    },
    "successDesc": {
      "tariffType": "报税类型(包邮包税)<br/>0：不包邮不包税<br/>1:包邮<br/>2:包税<br/>3:包邮包税",
      recommendWord:"搜商品无结果会返回这个词，有这个词就需要显示无结果页的内容",
      "sellerInfo": "买手详情",
      "avatarUrl": "买手头像url",
      "countryIconUrl": "买手国家国旗url",
      countryId:"国家id",
      countryName:"国家中文名",
      flag:"国家国旗url",
      noteCount:"相关笔记数量",
      keywordList:"相关关键词列表",
      noteList:"相关笔记列表",
      id:["笔记id","商品id","买手id"],
      description:["物流描述 在物流文字后面显示文字标识 例:官方","笔记描述","商品描述"],
      deliveryList:"当前关键词搜索出来的商品的物流方式列表",
      iconUrl:"国家图标",
      countryList:"商品国家列表",
      name:["国家名字","商品名字","买手名字"],
      prodList:"商品列表",
      "deliveryId": "配送方式<br/>0:未知<br/>1:国内快递<br/>2:海外直邮<br/>3:贝海直邮<br/>4:卖家保税<br/>5:贝海保税<br/>6:海外认证直邮<br/>7:海外拼邮",
      "deliveryType": "配送方式<br/>0:未知<br/>1:国内快递<br/>2:海外直邮<br/>3:贝海直邮<br/>4:卖家保税<br/>5:贝海保税<br/>6:海外认证直邮<br/>7:海外拼邮",
      "price": "商品价格 取得是所有价格里的最低价",
      "stock": "库存",
      "pic": "商品图片",
      "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品"
    }
  },
  {
    "apiDescription": "2 根据搜索关键字分页返回商品列表",
    "apiName": "get search prod list page",
    "path": "nodesearch/prodlistpaged",
    "apiGroup": "search",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "keyword":"",
      pagesize:1,
      pageindex:1,
      "[countryid]":"国家id, 不传代表全部",
      "[deliveryid]":"物流id，不传代表全部"
    },
    "paramsDesc": {
      "keyword":"搜索的关键字",
      pagesize:"一页多少数量",
      pageindex:"第几页 0代表第一页",
      "[countryid]":"国家id, 不传代表全部",
      "[deliveryid]":"物流id，不传代表全部"
    },
    "success":{
      keywordList:[""],
      list:[
        {
          "id": "4cbf26db-3eb5-4100-a44b-fc99c4d4d0a3",
          "name": "【SKU-多规格】~新客价，VIP价：天阶夜色凉如水 ，坐看牵牛织女。迢迢牵牛星，皎皎河汉女~~~",
          "deliveryType": 6,
          "price": 5,
          "stock": 136,
          "pic": "http://pc4.img.ymatou.com/G01/shangou/M00/10/B8/rBBlD1dPu5eAE2PwAACo_HjiPvc538_w_lb.jpg",
          "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品",
          "tariffType": 1,
          "sellerInfo": {
            "id": 483838,
            "name": "麦兜兜heidi",
            "avatarUrl": "http://p4.img.ymatou.com/upload/userlogo/original/483838_21db8318aa3e4b7c89cf3db2224e2795_o.jpg",
            "countryName": "美国",
            "countryIconUrl": "http://img.ymatou.com/app/flag/circle/America.png"
          }
        }
      ]
    },
    "successDesc": {
      "tariffType": "报税类型(包邮包税)<br/>0：不包邮不包税<br/>1:包邮<br/>2:包税<br/>3:包邮包税",
      "sellerInfo": "买手详情",
      "avatarUrl": "买手头像url",
      "countryName": "买手国家名字",
      "countryIconUrl": "买手国家国旗url",
      keywordList:"pageindex==2或4时会返回相关8个关键字,可能不足8个",
      id:["商品id","买手id"],
      name:["商品名字","买手名字"],
      "deliveryType": "配送方式<br/>0:未知<br/>1:国内快递<br/>2:海外直邮<br/>3:贝海直邮<br/>4:卖家保税<br/>5:贝海保税<br/>6:海外认证直邮<br/>7:海外拼邮",
      "price": "商品价格 取得是所有价格里的最低价",
      "stock": "库存",
      "pic": "商品图片",
      "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品"
    }
  },
  {
    "apiDescription": "3 搜索笔记",
    "apiName": "get search note list page",
    "path": "nodesearch/note",
    "apiGroup": "search",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "keyword":"",
      pagesize:1,
      pageindex:1
    },
    "paramsDesc": {
      "keyword":"搜索的关键字 '日本 人民币'这个关键字有数据",
      pagesize:"一页多少数量",
      pageindex:"第几页 0代表第一页"
    },
    "success":{
      list:[
        {
          id: "笔记id",
          description: "笔记描述",
          avatarUrl: "用户头像url",
          picUrl: "笔记第一张图片url",
          label: "用户【自定义标签】里的第一个标签",
          nickName: "用户名字",
          noteSource: "笔记来源<br/>0：买家添加<br/>1：历史数据 <br/>2：运营添加 <br/>3：买手添加",
          favoriteCount:1
        }]
    },
    "successDesc": {
      id: "笔记id",
      description: "笔记描述",
      avatarUrl: "用户头像url",
      picUrl: "笔记第一张图片url",
      label: "用户【自定义标签】里的第一个标签",
      nickName: "用户名字",
      noteSource: "笔记来源<br/>0：买家添加<br/>1：历史数据 <br/>2：运营添加 <br/>3：买手添加",
      favoriteCount:"被喜欢数量，注意不是被收藏数量"
    }
  },
  {
    "apiDescription": "4 按分类id搜索笔记",
    "apiName": "get search note list page by id",
    "path": "nodesearch/notebyid",
    "apiGroup": "search",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "keyword":"",
      pagesize:1,
      pageindex:1
    },
    "paramsDesc": {
      "keywords":"分类id，使用的是分类页的分类id",
      pagesize:"一页多少数量",
      pageindex:"第几页 0代表第一页"
    },
    "success":{
      list:[
        {
          id: "笔记id",
          description: "笔记描述",
          avatarUrl: "用户头像url",
          picUrl: "笔记第一张图片url",
          label: "用户【自定义标签】里的第一个标签",
          nickName: "用户名字",
          noteSource: "笔记来源<br/>0：买家添加<br/>1：历史数据 <br/>2：运营添加 <br/>3：买手添加",
          favoriteCount:1
        }]
    },
    "successDesc": {
      id: "笔记id",
      description: "笔记描述",
      avatarUrl: "用户头像url",
      picUrl: "笔记第一张图片url",
      label: "用户【自定义标签】里的第一个标签",
      nickName: "用户名字",
      noteSource: "笔记来源<br/>0：买家添加<br/>1：历史数据 <br/>2：运营添加 <br/>3：买手添加",
      favoriteCount:"被喜欢数量，注意不是被收藏数量"
    }
  },
  {
    "apiDescription": "5 搜索买手",
    "apiName": "get search seller list",
    "path": "nodesearch/seller",
    "apiGroup": "search",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "keywords":"",
      '[pagesize]':1,
      pageindex:1,
      "[countryid]":"国家id, 不传代表全部",
      "[deliveryid]":"物流id，不传代表全部"
    },
    "paramsDesc": {
      "keywords":"搜索的关键字",
      '[pagesize]':"一页多少数量",
      pageindex:"第几页 0代表第一页",
      "[countryid]":"国家id, 不传代表全部",
      "[deliveryid]":"物流id，不传代表全部"
    },
    "success":{
      list:[
        {
          sellerInfo:{
            id:1,
            avatarUrl:"http://p6.img.ymatou.com/G01/M00/0A/FE/rBBlD1cE_puAZCS2AABCEMVgBz8731_o.jpg",
            name:"zhangyi_seller002",
            level:"",
            isAttention:false,
            countryName:"美国",
            countryIconUrl:"http://img.ymatou.com/app/flag/circle/America.png",
            fansNum:3
          },
          deliveryList:[
            {
              deliveryId:1,
              description:""
            }
          ],
          countryList:[
            {
              countryId:"",
              countryName:"",
              flag:""
            }
          ],
          prodList:[
            {
              "id": "4cbf26db-3eb5-4100-a44b-fc99c4d4d0a3",
              "name": "【SKU-多规格】~新客价，VIP价：天阶夜色凉如水 ，坐看牵牛织女。迢迢牵牛星，皎皎河汉女~~~",
              "deliveryType": 6,
              "price": 5,
              "stock": 136,
              "pic": "http://pc4.img.ymatou.com/G01/shangou/M00/10/B8/rBBlD1dPu5eAE2PwAACo_HjiPvc538_w_lb.jpg",
              "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品",
              "tariffType": 1,
              "sellerInfo": {
                "id": 483838,
                "name": "麦兜兜heidi",
                "avatarUrl": "http://p4.img.ymatou.com/upload/userlogo/original/483838_21db8318aa3e4b7c89cf3db2224e2795_o.jpg",
                "countryName": "美国",
                "countryIconUrl": "http://img.ymatou.com/app/flag/circle/America.png"
              }
            }
          ]
        }]
    },
    successDesc: {
      "tariffType": "报税类型(包邮包税)<br/>0：不包邮不包税<br/>1:包邮<br/>2:包税<br/>3:包邮包税",
      sellerInfo: "买手信息",
      id: ["买手id","商品id","买手id"],
      avatarUrl: "买手头像url",
      name: ["买手名字","商品名字","买手名字"],
      level: "买手等级",
      isAttention:"是否已关注",
      countryName:"国家名字",
      countryIconUrl:"国家图标url",
      fansNum:"粉丝数",
      countryId:"国家id",
      flag:"国家国旗url",
      noteCount:"相关笔记数量",
      keywordList:"相关关键词列表",
      noteList:"相关笔记列表",
      description:["物流描述 在物流文字后面显示文字标识 例:官方","笔记描述","商品描述"],
      deliveryList:"当前关键词搜索出来的商品的物流方式列表",
      iconUrl:"国家图标",
      countryList:"商品国家列表",
      prodList:"商品列表",
      "deliveryId": "配送方式<br/>0:未知<br/>1:国内快递<br/>2:海外直邮<br/>3:贝海直邮<br/>4:卖家保税<br/>5:贝海保税<br/>6:海外认证直邮<br/>7:海外拼邮",
      "deliveryType": "配送方式<br/>0:未知<br/>1:国内快递<br/>2:海外直邮<br/>3:贝海直邮<br/>4:卖家保税<br/>5:贝海保税<br/>6:海外认证直邮<br/>7:海外拼邮",
      "price": "商品价格 取得是所有价格里的最低价",
      "stock": "库存",
      "pic": "商品图片",
      "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品"
    }
  },
  {
    "apiDescription": "6 根据sellerId搜索商品",
    "apiName": "get search prod list by sellerid",
    "path": "nodesearch/searchbysellerid",
    "apiGroup": "search",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "keyword":1,
      pagesize:1,
      pageindex:1,
      "[countryid]":"国家id, 不传代表全部",
      "[deliveryid]":"物流id，不传代表全部"
    },
    "paramsDesc": {
      "keyword":"买手id",
      pagesize:"一页多少数量",
      pageindex:"第几页 0代表第一页",
      "[countryid]":"国家id, 不传代表全部",
      "[deliveryid]":"物流id，不传代表全部"
    },
    "success":{
      list:[
        {
          "id": "4cbf26db-3eb5-4100-a44b-fc99c4d4d0a3",
          "name": "【SKU-多规格】~新客价，VIP价：天阶夜色凉如水 ，坐看牵牛织女。迢迢牵牛星，皎皎河汉女~~~",
          "deliveryType": 6,
          "price": 5,
          "stock": 136,
          "pic": "http://pc4.img.ymatou.com/G01/shangou/M00/10/B8/rBBlD1dPu5eAE2PwAACo_HjiPvc538_w_lb.jpg",
          "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品",
          "tariffType": 1,
          "sellerInfo": {
            "id": 483838,
            "name": "麦兜兜heidi",
            "avatarUrl": "http://p4.img.ymatou.com/upload/userlogo/original/483838_21db8318aa3e4b7c89cf3db2224e2795_o.jpg",
            "countryName": "美国",
            "countryIconUrl": "http://img.ymatou.com/app/flag/circle/America.png"
          }
        }]
    },
    successDesc: {
      "tariffType": "报税类型(包邮包税)<br/>0：不包邮不包税<br/>1:包邮<br/>2:包税<br/>3:包邮包税",
      sellerInfo: "买手信息",
      id: ["商品id","买手id"],
      avatarUrl: "买手头像url",
      name: ["商品名字","买手名字"],
      level: "买手等级",
      isAttention:"是否已关注",
      countryName:"国家名字",
      countryIconUrl:"国家图标url",
      fansNum:"粉丝数",
      countryId:"国家id",
      flag:"国家国旗url",
      noteCount:"相关笔记数量",
      keywordList:"相关关键词列表",
      noteList:"相关笔记列表",
      description:["物流描述 在物流文字后面显示文字标识 例:官方","笔记描述","商品描述"],
      deliveryList:"当前关键词搜索出来的商品的物流方式列表",
      iconUrl:"国家图标",
      countryList:"商品国家列表",
      prodList:"商品列表",
      "deliveryId": "配送方式<br/>0:未知<br/>1:国内快递<br/>2:海外直邮<br/>3:贝海直邮<br/>4:卖家保税<br/>5:贝海保税<br/>6:海外认证直邮<br/>7:海外拼邮",
      "deliveryType": "配送方式<br/>0:未知<br/>1:国内快递<br/>2:海外直邮<br/>3:贝海直邮<br/>4:卖家保税<br/>5:贝海保税<br/>6:海外认证直邮<br/>7:海外拼邮",
      "price": "商品价格 取得是所有价格里的最低价",
      "stock": "库存",
      "pic": "商品图片",
      "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品"
    }
  },
  {
    "apiDescription": "7 根据分类(品牌或品类)搜索商品",
    "apiName": "get search prod list by assortment",
    "path": "nodesearch/prodbyassortment",
    "apiGroup": "search",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      keyword:"",
      assortmenttype:1,
      "countryid<code>可选</code>":"",      
      "deliveryid<code>可选</code>":"",      
      "pagesize<code>可选</code>":1
    },
    "paramsDesc": {
      keyword:"要搜索的关键字， 品牌id、品类id、标签id、品牌名+空格+标签名",
      assortmenttype:'类型 <br/>1:品类<br/>2:品牌<br/>3:标签<br/>4:品牌名+空格+标签名',
      "countryid<code>可选</code>":"国家id",
      "deliveryid<code>可选</code>":"物流id",
      "pagesize<code>可选</code>":"返回多少个商品, 默认返回10个"
    },
    "success":{
      brandDesc:"品牌描述",
      brandId:"",
      assortmentType:1,
      type:110,
      isAttention:"是否已关注",
      assortmentList:[{
        "id": 30,
        "name": "休闲鞋",
        "pic": "http://p5.img.ymatou.com/upload/product/small/90ed8c6707d64952b2d240ed1a377afb_s.jpg",
        "type": 101,
        assortmentType:3
      }],
      noteCount:1,
      prodCount:1,
      beAttentionCount:1,
      deliveryList:[
        {
          deliveryId:1,
          description:""
        }
      ],
      countryList:[
        {
          countryId:"",
          countryName:"",
          flag:""
        }
      ],
      prodList:[
        {
          "id": "4cbf26db-3eb5-4100-a44b-fc99c4d4d0a3",
          "name": "【SKU-多规格】~新客价，VIP价：天阶夜色凉如水 ，坐看牵牛织女。迢迢牵牛星，皎皎河汉女~~~",
          "deliveryType": 6,
          "price": 5,
          "stock": 136,
          "pic": "http://pc4.img.ymatou.com/G01/shangou/M00/10/B8/rBBlD1dPu5eAE2PwAACo_HjiPvc538_w_lb.jpg",
          "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品",
          "tariffType": 1,
          "sellerInfo": {
            "id": 483838,
            "name": "麦兜兜heidi",
            "avatarUrl": "http://p4.img.ymatou.com/upload/userlogo/original/483838_21db8318aa3e4b7c89cf3db2224e2795_o.jpg",
            "countryName": "美国",
            "countryIconUrl": "http://img.ymatou.com/app/flag/circle/America.png"
          }
        }
      ]
    },
    successDesc: {
      assortmentType:'分类类型 <br/>1:品类<br/>2:品牌<br/>3:标签<br/>4:品牌名+空格+标签名',
      noteCategoryIds:"笔记分类id 如果长度为0的时候用searchInfo搜相关笔记",
      "tariffType": "报税类型(包邮包税)<br/>0：不包邮不包税<br/>1:包邮<br/>2:包税<br/>3:包邮包税",
      "brandId":"品牌id 只是关注用",
      "avatarUrl": "买手头像url",
      "countryIconUrl": "买手国家国旗url",
      searchInfo:"搜索时传入的参数",
      type:"关注对象的类型 <br/>100.买手<br/>101.买家<br/>102.品牌<br/>103.品类<br/>104.活动话题<br/>105.运营推荐话题<br/>106.运营主题<br/>107.买家创建的主题<br/>108 运营笔记主题<br/>109 分类标签<br/>110 品牌标签组合",
      searchKeywords:"分页搜索商品使用的关键字数组",
      brandDesc:"品牌描述",
      isAttention:"是否已关注",
      countryId:"国家id",
      countryName:"国家中文名",
      flag:"国家国旗url",
      noteCount:"相关笔记数量",
      prodCount:"商品数量",
      beAttentionCount:"被关注数量",
      assortmentList:"相关品牌品类列表",
      noteList:"相关笔记列表",
      id:["分类id","笔记id","商品id","买手id",'分类id'],
      keyword:"分类名字",
      picUrl:"分类图片 key未定",
      description:["物流描述 在物流文字后面显示文字标识 例:官方","笔记描述","商品描述"],
      deliveryList:"当前关键词搜索出来的商品的物流方式列表",
      iconUrl:"国家图标",
      countryList:"商品国家列表",
      name:["分类名称","国家名字","商品名字",'买手名字','分类、品牌名字'],
      prodList:"商品列表",
      "deliveryId": "配送方式<br/>0:未知<br/>1:国内快递<br/>2:海外直邮<br/>3:贝海直邮<br/>4:卖家保税<br/>5:贝海保税<br/>6:海外认证直邮<br/>7:海外拼邮",
      "deliveryType": "配送方式<br/>0:未知<br/>1:国内快递<br/>2:海外直邮<br/>3:贝海直邮<br/>4:卖家保税<br/>5:贝海保税<br/>6:海外认证直邮<br/>7:海外拼邮",
      "price": "商品价格 取得是所有价格里的最低价",
      "stock": "库存",
      "pic": ["分类图片","商品图片"],
      "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品"
    }
  },
  {
    "apiDescription": "8 根据分类(品牌或品类)分页搜索商品",
    "apiName": "get search prod list by assortment paged",
    "path": "nodesearch/prodbyassortmentpaged",
    "apiGroup": "search",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      keyword:"要搜索的关键字， 品牌id、品类id、标签id、品牌名+空格+标签名",
      assortmenttype:1,
      "countryid<code>可选</code>":"",
      "deliveryid<code>可选</code>":"",
      "pagesize<code>可选</code>":1,
      "pageindex<code>可选</code>":1
    },
    "paramsDesc": {
      keyword:"要搜索的关键字， 品牌id、品类、标签、品牌名+空格+标签名",
      assortmenttype:'类型 <br/>1:品类<br/>2:品牌<br/>3:标签<br/>4:品牌名+空格+标签名',
      "countryid<code>可选</code>":"国家id",
      "deliveryid<code>可选</code>":"物流id",
      "pagesize<code>可选</code>":"返回多少个商品, 默认返回10个",
      "pageindex<code>可选</code>":"页码 0是第一页"
    },
    "success":{
      prodList:[
        {
          "id": "4cbf26db-3eb5-4100-a44b-fc99c4d4d0a3",
          "name": "【SKU-多规格】~新客价，VIP价：天阶夜色凉如水 ，坐看牵牛织女。迢迢牵牛星，皎皎河汉女~~~",
          "deliveryType": 6,
          "price": 5,
          "stock": 136,
          "pic": "http://pc4.img.ymatou.com/G01/shangou/M00/10/B8/rBBlD1dPu5eAE2PwAACo_HjiPvc538_w_lb.jpg",
          "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品",
          "tariffType": 1,
          "sellerInfo": {
            "id": 483838,
            "name": "麦兜兜heidi",
            "avatarUrl": "http://p4.img.ymatou.com/upload/userlogo/original/483838_21db8318aa3e4b7c89cf3db2224e2795_o.jpg",
            "countryName": "美国",
            "countryIconUrl": "http://img.ymatou.com/app/flag/circle/America.png"
          }
        }
      ]
    },
    successDesc: {
      "tariffType": "报税类型(包邮包税)<br/>0：不包邮不包税<br/>1:包邮<br/>2:包税<br/>3:包邮包税",
      "avatarUrl": "买手头像url",
      "countryIconUrl": "买手国家国旗url",
      searchInfo:"搜索时传入的参数",
      type:"分类类型<br/>1-品类<br/>2-品牌<br/>3-标签",
      searchKeywords:"分页搜索商品使用的关键字数组",
      brandDesc:"品牌描述",
      isAttention:"是否已关注",
      countryId:"国家id",
      countryName:"国家中文名",
      flag:"国家国旗url",
      noteCount:"相关笔记数量",
      prodCount:"商品数量",
      beAttentionCount:"被关注数量",
      assortmentList:"相关品牌品类列表",
      noteList:"相关笔记列表",
      id:"商品id",
      keyword:"分类名字",
      picUrl:"分类图片 key未定",
      description:["物流描述 在物流文字后面显示文字标识 例:官方","笔记描述","商品描述"],
      deliveryList:"当前关键词搜索出来的商品的物流方式列表",
      iconUrl:"国家图标",
      countryList:"商品国家列表",
      name:["商品名字",'买手名字'],
      prodList:"商品列表",
      "deliveryId": "配送方式<br/>0:未知<br/>1:国内快递<br/>2:海外直邮<br/>3:贝海直邮<br/>4:卖家保税<br/>5:贝海保税<br/>6:海外认证直邮<br/>7:海外拼邮",
      "deliveryType": "配送方式<br/>0:未知<br/>1:国内快递<br/>2:海外直邮<br/>3:贝海直邮<br/>4:卖家保税<br/>5:贝海保税<br/>6:海外认证直邮<br/>7:海外拼邮",
      "price": "商品价格 取得是所有价格里的最低价",
      "stock": "库存",
      "pic": "商品图片",
      "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品"
    }
  },
  {
    "apiDescription": "9 根据优惠券id获取适用商品列表",
    "apiName": "get search prod list by coupon",
    "path": "nodesearch/prodbycoupon",
    "apiGroup": "search",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      couponid:"",
      pagesize:1,
      pageindex:1,
      "[countryid]":"国家id, 不传代表全部",
      "[deliveryid]":"物流id，不传代表全部"
    },
    "paramsDesc": {
      couponid:"优惠券id",
      pagesize:"一页多少个商品",
      pageindex:"第几页 0=第一页",
      "[countryid]":"国家id, 不传代表全部",
      "[deliveryid]":"物流id，不传代表全部"
    },
    "success":{
      couponDesc:"",
      deliveryList:[
        {
          deliveryId:1,
          description:""
        }
      ],
      countryList:[
        {
          countryId:"",
          countryName:"",
          flag:""
        }
      ],
      prodList:[
        {
          "id": "4cbf26db-3eb5-4100-a44b-fc99c4d4d0a3",
          "name": "【SKU-多规格】~新客价，VIP价：天阶夜色凉如水 ，坐看牵牛织女。迢迢牵牛星，皎皎河汉女~~~",
          "deliveryType": 6,
          "price": 5,
          "stock": 136,
          "pic": "http://pc4.img.ymatou.com/G01/shangou/M00/10/B8/rBBlD1dPu5eAE2PwAACo_HjiPvc538_w_lb.jpg",
          "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品",
          "tariffType": 1,
          "sellerInfo": {
            "id": 483838,
            "name": "麦兜兜heidi",
            "avatarUrl": "http://p4.img.ymatou.com/upload/userlogo/original/483838_21db8318aa3e4b7c89cf3db2224e2795_o.jpg",
            "countryName": "美国",
            "countryIconUrl": "http://img.ymatou.com/app/flag/circle/America.png"
          }
        }
      ]
    },
    successDesc: {
      "tariffType": "报税类型(包邮包税)<br/>0：不包邮不包税<br/>1:包邮<br/>2:包税<br/>3:包邮包税",
      couponDesc:"优惠券描述 例:满xx元减xx元",
      "sellerInfo": "买手详情",
      "avatarUrl": "买手头像url",
      "countryIconUrl": "买手国家国旗url",
      countryId:"国家id",
      countryName:"国家中文名",
      flag:"国家国旗url",
      noteCount:"相关笔记数量",
      keywordList:"相关关键词列表",
      noteList:"相关笔记列表",
      id:["笔记id","商品id","买手id"],
      description:["物流描述 在物流文字后面显示文字标识 例:官方","笔记描述","商品描述"],
      deliveryList:"当前关键词搜索出来的商品的物流方式列表",
      iconUrl:"国家图标",
      countryList:"商品国家列表",
      name:["国家名字","商品名字","买手名字"],
      prodList:"商品列表",
      "deliveryId": "配送方式<br/>0:未知<br/>1:国内快递<br/>2:海外直邮<br/>3:贝海直邮<br/>4:卖家保税<br/>5:贝海保税<br/>6:海外认证直邮<br/>7:海外拼邮",
      "deliveryType": "配送方式<br/>0:未知<br/>1:国内快递<br/>2:海外直邮<br/>3:贝海直邮<br/>4:卖家保税<br/>5:贝海保税<br/>6:海外认证直邮<br/>7:海外拼邮",
      "price": "商品价格 取得是所有价格里的最低价",
      "stock": "库存",
      "pic": "商品图片",
      "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品"
    }
  },
  {
    "apiDescription": "a 根据优惠券id分页返回商品列表",
    "apiName": "get search prod list by coupon paged",
    "path": "nodesearch/prodbycouponpaged",
    "apiGroup": "search",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      couponid:"",
      pagesize:1,
      pageindex:1,
      "[countryid]":"国家id, 不传代表全部",
      "[deliveryid]":"物流id，不传代表全部"
    },
    "paramsDesc": {
      couponid:"优惠券id",
      pagesize:"一页多少个商品",
      pageindex:"第几页 0=第一页",
      "[countryid]":"国家id, 不传代表全部",
      "[deliveryid]":"物流id，不传代表全部"
    },
    "success":{
      prodList:[
        {
          "id": "4cbf26db-3eb5-4100-a44b-fc99c4d4d0a3",
          "name": "【SKU-多规格】~新客价，VIP价：天阶夜色凉如水 ，坐看牵牛织女。迢迢牵牛星，皎皎河汉女~~~",
          "deliveryType": 6,
          "price": 5,
          "stock": 136,
          "pic": "http://pc4.img.ymatou.com/G01/shangou/M00/10/B8/rBBlD1dPu5eAE2PwAACo_HjiPvc538_w_lb.jpg",
          "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品",
          "tariffType": 1,
          "sellerInfo": {
            "id": 483838,
            "name": "麦兜兜heidi",
            "avatarUrl": "http://p4.img.ymatou.com/upload/userlogo/original/483838_21db8318aa3e4b7c89cf3db2224e2795_o.jpg",
            "countryName": "美国",
            "countryIconUrl": "http://img.ymatou.com/app/flag/circle/America.png"
          }
        }
      ]
    },
    successDesc: {
      "tariffType": "报税类型(包邮包税)<br/>0：不包邮不包税<br/>1:包邮<br/>2:包税<br/>3:包邮包税",
      couponDesc:"优惠券描述 例:满xx元减xx元",
      "sellerInfo": "买手详情",
      "avatarUrl": "买手头像url",
      "countryIconUrl": "买手国家国旗url",
      countryId:"国家id",
      countryName:"国家中文名",
      flag:"国家国旗url",
      noteCount:"相关笔记数量",
      keywordList:"相关关键词列表",
      noteList:"相关笔记列表",
      id:["商品id","买手id"],
      deliveryList:"当前关键词搜索出来的商品的物流方式列表",
      iconUrl:"国家图标",
      countryList:"商品国家列表",
      name:["商品名字","买手名字"],
      prodList:"商品列表",
      "deliveryId": "配送方式<br/>0:未知<br/>1:国内快递<br/>2:海外直邮<br/>3:贝海直邮<br/>4:卖家保税<br/>5:贝海保税<br/>6:海外认证直邮<br/>7:海外拼邮",
      "deliveryType": "配送方式<br/>0:未知<br/>1:国内快递<br/>2:海外直邮<br/>3:贝海直邮<br/>4:卖家保税<br/>5:贝海保税<br/>6:海外认证直邮<br/>7:海外拼邮",
      "price": "商品价格 取得是所有价格里的最低价",
      "stock": "库存",
      "pic": "商品图片",
      "productType": "商品类型，扫货还是现货<br/>1:扫货<br/>2:现货<br/>3:现货团商品"
    }
  },
  {
    "apiDescription": "b 获取文字相关关键字",
    "apiName": "get search keywords relevantwords",
    "path": "nodesearch/relevantwords",
    "apiGroup": "search",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      keyword:"",
      pagesize:1,
      pageindex:1
    },
    "paramsDesc": {
      keyword:"搜索的关键字",
      pagesize:"一页多少数量",
      pageindex:"第几页 0代表第一页"
    },
    "success":{
      list:[""]
    },
    successDesc: {
      list:"联想关键字列表"
    }
  },
  {
    "apiDescription": "c 搜索下拉提示关键字",
    "apiName": "get search keywords list",
    "path": "nodesearch/suggestwords",
    "apiGroup": "search",
    "apiPermission": "无",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      keyword:"",
      "[pagesize]":1
    },
    "paramsDesc": {
      keyword:"搜索的关键字",
      "[pagesize]":"返回几个关键字，不传返回10个"
    },
    "success":{
      list:[""]
    },
    successDesc: {
      list:"联想关键字列表"
    }
  }
]