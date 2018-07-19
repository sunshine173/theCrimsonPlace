<template>
  <div id="index" align="left">
    <div>
      <!--<h4>枚举</h4>-->
      <button v-for="name in enumList" v-on:click="changeConfig(name, 1)">{{name}}</button>
    </div>
    <div>
      <!--<h4>配置表字段配置</h4>-->
      <button v-for="name in structList" v-on:click="changeConfig(name, 2)">{{name}}</button>
    </div>
    <div>
      <!--<h4>配置表配置</h4>-->
      <button v-for="name in configList" v-on:click="changeConfig(name, 3)">{{name}}</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      enumList:[],
      structList:[],
      configList:[]
    }
  },
  methods:{
    changeConfig:function (name, type) {
      this.$router.push({path: '/config', name: 'config', query: { configName: name, type:type}})
    },
    getConfigList() {
      var self = this;
      this.$http.get('http://localhost:8081/configlist',{})
        .then(function(response){
        // response.data中获取ResponseData实体
        self.enumList = response.data.enum;
        self.structList = response.data.struct;
        self.configList = response.data.config;
      },function(response){
        // 发生错误
        alert('err')
      });
    }
  },
  created:function () {
    this.getConfigList();
  },
  components:{
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
