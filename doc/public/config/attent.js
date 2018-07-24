module.exports = [
  {
    "apiDescription": "1 获取关注主题列表",
    "apiName": "topic info list",
    "path": "usercenter/attention/topiclist",
    "apiGroup": "attention",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "pagesize":0,
      "[lastaddtime]":0
    },
    "paramsDesc": {
      "[lastaddtime]":"最后一条记录创建时间,第一次不传",
      "pagesize":"一页拉取主题数"
    },
    "success":{
      "list":[
        {
          "id":1,
          "title":"",
          "userName":1,
          "prodCount":1,
          "noteCount":1,
          "isRecommend":false,
          "type":100,
          "addTime":1
        }
      ]
    },
    "successDesc": {
      "id":"主题id",
      "title":"主题标题",
      "userName":"用户昵称",
      "prodCount":"主题下的商品数",
      "noteCount":"主题下的笔记数",
      "isRecommend":"是否为运营推荐专题",
      "type":"关注对象的类型 <br/>100.买手<br/>101.买家<br/>102.品牌<br/>103.品类<br/>104.活动话题<br/>105.运营推荐话题<br/>106.运营主题<br/>107.买家创建的主题<br/>108 运营笔记主题<br/>109 分类标签<br/>110 品牌标签组合",
      "addTime":"关注时间"
    }
  },
  {
    "apiDescription": "2 获取关注品牌列表",
    "apiName": "brand info list",
    "path": "usercenter/attention/brandlist",
    "apiGroup": "attention",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "pagesize":0,
      "[lastaddtime]":0
    },
    "paramsDesc": {
      "[lastaddtime]":"最后一条记录创建时间,第一次不传",
      "pagesize":"一页拉取主题数"
    },
    "success":{
      "list":[
        {
          "id":1,
          "name":"",
          "addTime":1,
          "prodCount": 1,
          "attentionCount": 2,
          type:1,
          assortmentType:1
        }
      ]
    },
    "successDesc": {
      "name":"品牌名",
      "prodCount": "商品数",
      "attentionCount": "被关注数",
      "id":"品牌id",
      "title":"品牌名称",
      "addTime":"关注时间",
      "type":"关注对象的类型 <br/>100.买手<br/>101.买家<br/>102.品牌<br/>103.品类<br/>104.活动话题<br/>105.运营推荐话题<br/>106.运营主题<br/>107.买家创建的主题<br/>108 运营笔记主题<br/>109 分类标签<br/>110 品牌标签组合",
      assortmentType:"跳转到分类页的type <br/>1:品类<br/>2:品牌<br/>3:标签<br/>4:品牌名+空格+标签名"
    }
  },
  {
    "apiDescription": "3 获取关注品类列表",
    "apiName": "category info list",
    "path": "usercenter/attention/categorylist",
    "apiGroup": "attention",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "pagesize":0,
      "[lastaddtime]":0
    },
    "paramsDesc": {
      "[lastaddtime]":"最后一条记录创建时间,第一次不传",
      "pagesize":"一页拉取主题数"
    },
    "success":{
      "list":[
        {
          "id":1,
          "name":"",
          "addTime":1,
          "prodCount": 1,
          "attentionCount": 2,
          type:1,
          assortmentType:1
        }
      ]
    },
    "successDesc": {
      "name":"品类名、标签名、品牌加标签名",
      "prodCount": "商品数",
      "attentionCount": "被关注数",
      "id":"品类id、标签id",
      "title":"品类名称",
      "addTime":"关注时间",
      "type":"关注对象的类型 <br/>100.买手<br/>101.买家<br/>102.品牌<br/>103.品类<br/>104.活动话题<br/>105.运营推荐话题<br/>106.运营主题<br/>107.买家创建的主题<br/>108 运营笔记主题<br/>109 分类标签<br/>110 品牌标签组合",
      assortmentType:"跳转到分类页的type <br/>1:品类<br/>2:品牌<br/>3:标签<br/>4:品牌名+空格+标签名"
    }
  },
  {
    "apiDescription": "4 获取关注话题列表",
    "apiName": "subject info list",
    "path": "usercenter/attention/subjectlist",
    "apiGroup": "attention",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "pagesize":0,
      "[lastaddtime]":0
    },
    "paramsDesc": {
      "[lastaddtime]":"最后一条记录创建时间,第一次不传",
      "pagesize":"一页拉取主题数"
    },
    "success":{
      "list":[
        {
          "id":1,
          "name":"",
          "addTime":1,
          "attendCount": 1,
          "attentionCount": 1,
          type:100
        }
      ]
    },
    "successDesc": {
      "id":"话题id",
      "title":"话题名称",
      "addTime":"关注时间",
      "attendCount": "参与数",
      "attentionCount": "被关注数",
      "type":"关注对象的类型 <br/>100.买手<br/>101.买家<br/>102.品牌<br/>103.品类<br/>104.活动话题<br/>105.运营推荐话题<br/>106.运营主题<br/>107.买家创建的主题<br/>108 运营笔记主题<br/>109 分类标签<br/>110 品牌标签组合"
    }
  },
  {
    "apiDescription": "5 获取关注的人列表",
    "apiName": "user info list",
    "path": "usercenter/attention/userlist",
    "apiGroup": "attention",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "pagesize":0,
      "[lastaddtime]":0
    },
    "paramsDesc": {
      "[lastaddtime]":"最后一条记录创建时间,第一次不传",
      "pagesize":"一页拉取主题数"
    },
    "success":{
      "list":[
        {
          "id":1,
          "name":"",
          userType:1,
          avatarUrl:"",
          countryName:"",
          countryIconUrl:"",
          fansCount:1,
          noteCount:1,
          bLiving:false,
          liveId:1234,
          "addTime":1,
          type:1
        }
      ]
    },
    "successDesc": {
      liveId:"直播id",
      "id":"用户id",
      "name":"用户昵称",
      userType:"用户类型 <br/>0:买家<br/>1:买手",
      avatarUrl:"用户头像url",
      countryName:"买手国家名字",
      countryIconUrl:"买手国旗url",
      fansCount:"粉丝数 值为null或undefined时界面上不显示",
      noteCount:"笔记数 值为null或undefined时界面上不显示",
      bLiving:"是否在直播中",
      "addTime":"关注时间 （毫秒）",
      "type":"关注对象的类型 <br/>100.买手<br/>101.买家<br/>102.品牌<br/>103.品类<br/>104.活动话题<br/>105.运营推荐话题<br/>106.运营主题<br/>107.买家创建的主题<br/>108 运营笔记主题<br/>109 分类标签<br/>110 品牌标签组合"
    }
  },
  {
    "apiDescription": "6 添加关注",
    "apiName": "add attention",
    "path": "usercenter/attention/attention",
    "apiGroup": "attention",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "[id]":"",
      "[text]":"",
      "type":1
    },
    "paramsDesc": {
      "[id]":"关注对象的id 传了id就不能传text 品牌、分类、标签id传整形",
      "[text]":"关注的对象的文本 传了text就不能传id",
      "type":"关注对象的类型 <br/>100.买手<br/>101.买家<br/>102.品牌<br/>103.品类<br/>104.活动话题<br/>105.运营推荐话题<br/>106.运营主题<br/>107.买家创建的主题<br/>108 运营笔记主题<br/>109 分类标签<br/>110 品牌标签组合"
    },
    "success":{
      "success":true,
      "msg":""
    },
    "successDesc": {
      "success":"是否关注成功",
      "msg":"关注失败信息"
    }
  },
  {
    "apiDescription": "7 取消关注",
    "apiName": "del attention",
    "path": "usercenter/attention/attention",
    "apiGroup": "attention",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "delete",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      "[id]":"",
      "[text]":"",
      "type":1
    },
    "paramsDesc": {
      "[id]":"关注对象的id 传了id就不能传text",
      "[text]":"关注的对象的文本 传了text就不能传id",
      "type":"关注对象的类型 <br/>100.买手<br/>101.买家<br/>102.品牌<br/>103.品类<br/>104.活动话题<br/>105.运营推荐话题<br/>106.运营主题<br/>107.买家创建的主题<br/>108 运营笔记主题<br/>109 分类标签<br/>110 品牌标签组合"
    },
    "success":{
      "success":true,
      "msg":""
    },
    "successDesc": {
      "success":"是否取消关注成功",
      "msg":"取消关注失败信息"
    }
  },
  {
    "apiDescription": "8 获取关注的人、主题等数量",
    "apiName": "get attention num",
    "path": "usercenter/attention/attentioncount",
    "apiGroup": "attention",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "get",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
    },
    "paramsDesc": {
      "id":"关注对象的id或关键词",
      "type":"关注对象的类型 <br/>100.买手<br/>101.买家<br/>102.品牌<br/>103.品类<br/>104.活动话题<br/>105.运营推荐话题<br/>106.运营主题<br/>107.买家创建的主题<br/>108 运营笔记主题<br/>109 分类标签<br/>110 品牌标签组合"
    },
    "success":{
      "userCount":1,
      "topicCount":1,
      "brandCount":1,
      "subjectCount":1
    },
    "successDesc": {
      "userCount":"关注的人数量",
      "topicCount":"关注的主题数量",
      "brandCount":"关注的品牌品类数量",
      "subjectCount":"关注的话题数量"
    }
  },
  {
    "apiDescription": "9 是否已关注",
    "apiName": "get id attention",
    "path": "usercenter/attention/isattention",
    "apiGroup": "attention",
    "apiPermission": "登录",
    "version": "1.0.0",
    "method": "post",
    "apiUse": [
      "apiHeader","apiError"
    ],
    "params": {
      list:[
        {
          "id<code>可选</code>":"",
          "text<code>可选</code>":"",
          "type":1
        }
      ]
    },
    "paramsDesc": {
      "id<code>可选</code>":"关注对象的id 传了id就不能传text",
      "text<code>可选</code>":"关注的对象的文本 传了text就不能传id",
      "type":"关注的类型 <br/>100.买手<br/>101.买家<br/>102.品牌<br/>103.品类<br/>104.活动话题<br/>105.运营推荐话题<br/>106.运营主题<br/>107.买家创建的主题"
    },
    "success":{
      list:[
        {
          id:'',
          text:'',
          type:100,
          bAttention:true
        }
      ]
    },
    "successDesc": {
      id:'关注的id',
      text:'关注的文本',
      type:"关注的类型 <br/>100.买手<br/>101.买家<br/>102.品牌<br/>103.品类<br/>104.活动话题<br/>105.运营推荐话题<br/>106.运营主题<br/>107.买家创建的主题",
      bAttention:"是否已关注"
    }
  }
];