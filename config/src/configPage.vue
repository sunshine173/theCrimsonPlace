<template>
  <div id="configPage">
    <Table :name="server" :data="data" :colHeaders="colHeaders" :columns="columns"></Table>
  </div>
</template>

<script>
  import Table from './config.vue';

  export default {
    name: 'app',
    data () {
      return {
        configName:"config",
        data: [        //数据，可以是数据，对象
          ['20080101', 999, 11, 12, 13,true],
          ['20090101', 20, 11, 14, 13,true],
          ['20010101', 30, 15, 12, 13,true],
          ['20010101', 32, 213, 21, 312,true],
          ['20010201', 32, 213, 21, 312,true],
          ['20010301', 32, 213, 21, 312,true],
          ['20010401', 32, 213, 21, 312,true],
          ['20010501', 32, 213, 21, 312,true],
          ['20010501', 32, 213, 21, 312,true],
          ['20010501', 32, 213, 21, 312,true],
          ['20010501', 32, 213, 21, 312,true],
          ['20010501', 32, 213, 21, 312,true],
          ['20010501', 32, 213, 21, 312,true],
          ['20010501', 32, 213, 21, 312,true],
          ['20010501', 32, 213, 21, 312,true],
          ['20010501', 32, 213, 21, 312,true],
          ['20010501', 32, 213, 21, 312,true],
          ['20010501', 32, 213, 21, 312,true],
          ['20010501', 32, 213, 21, 312,true],
          ['20010501', 32, 213, 21, 312,true],
          ['20010501', 32, 213, 21, 312,true],
          ['20010501', 32, 213, 21, 312,true],
          ['20010501', 32, 213, 21, 312,true],
          ['20010501', 32, 213, 21, 312,true],
          ['20010601', 32, 213, 21, 312,true]
        ],
        colHeaders:   ['时间', 'Kia', 'Nissan', 'Toyota', 'Honda','123'],
        columns: [     //添加每一列的数据类型和一些配置
          {
            type: 'date',   //时间格式
            dateFormat: 'YYYY-MM-DD',
            correctFormat: true,
            defaultDate: Date.now()
          },
          {
            type: 'dropdown', //下拉选择
            source: ['BMW', 'Chrysler', 'Nissan', 'Suzuki', 'Toyota', 'Volvo'],
            strict: false   //是否严格匹配
          },
          {type: 'numeric'},  //数值
          {type: 'numeric',
            readOnly: true  //设置只读
          },
          { type: 'numeric',
            format: '$ 0,0.00'},  //指定的数据格式
          {type: 'checkbox'},  //多选框
        ],
        server:'123'
      }
    },
    methods:{
      getParams () {
        // 取到路由带过来的参数
        let routerParams = this.$route.query;
        // 将数据放在当前组件的数据内
        this.configName = routerParams.configName.toString();
      },
      getConfig() {
        var self = this;
        this.$http.post('http://localhost:8081/config',{
          configName:self.configName
        },{
          emulateJSON:true
        }).then(function(response){
          // response.data中获取ResponseData实体
          self.configName = response.data.configName;
          self.server = response.data.server;
          self.data = response.data.data;
          self.colHeaders = response.data.colHeaders;
          self.columns = response.data.columns;
        },function(response){
          // 发生错误
          alert('err')
        });
      }
    },
  created:function () {
    this.getParams();
    this.getConfig();
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
