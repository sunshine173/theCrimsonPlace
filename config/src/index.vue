<template>
  <div id="index">
    <div>
      <button v-for="name in btnList" v-on:click="changeConfig(name)">{{name}}</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      btnList:[1,2,3,4,5,6]
    }
  },
  methods:{
    changeConfig:function (a) {
      this.$router.push({path: '/config', name: 'config', query: { configName: a }})
    },
    getConfigList() {
      var self = this;
      this.$http.get('http://localhost:8081/configlist',{
        param1:1,
        param2:2
      }).then(function(response){
        // response.data中获取ResponseData实体
        self.btnList = response.data.list;
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
