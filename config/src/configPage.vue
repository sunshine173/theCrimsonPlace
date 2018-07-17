<template>
  <div id="configPage">
    <Table :name="configName" :data="myData" :colHeaders="colHeaders" :columns="columns"></Table>
  </div>
</template>

<script>
  import Table from './config.vue';

  export default {
    name: 'app',
    data () {
      return {
        configName:"config",
        configType:"",
        myData: [ [ 1, '装备' ], [ 2, '符文' ], [ 3, '消耗品' ], [ 4, '材料' ] ] ,
        colHeaders:   [ '1', '2' ],
        columns:  [ { type: 'numeric' }, {  } ]
      }
    },
    methods:{
      getParams () {
        // 取到路由带过来的参数
        let routerParams = this.$route.query;
        // 将数据放在当前组件的数据内
        this.configName = routerParams.configName.toString();
        this.configType = routerParams.type.toString();
      },
      getConfig(callback) {
        var self = this;
        this.$http.post('http://localhost:8081/config',{
          configName:self.configName,
          type:self.configType
        },{
          emulateJSON:true
        }).then(function(response){
          // response.data中获取ResponseData实体
          callback(response.data);
        },function(response){
          // 发生错误
          alert('err')
        });
      }
    },
  created:function () {
    this.getParams();
    var self = this;
    this.getConfig(function (data) {
      self.myData = data.data;
      self.colHeaders = data.colHeaders;
      console.log(self.colHeaders)
      self.columns = data.columns;
    });

    setInterval(function () {
      self.configName = Date.now();
      self.colHeaders = [1, Date.now()]
    },1000)
    // this.colHeaders = ['123','123']
  },
    components:{
      Table
    }
  }
</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
