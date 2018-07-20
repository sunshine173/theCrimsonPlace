<template>
  <div>
    <h4 align="left">{{name}}:{{type}}:{{saveResult}}</h4>
    <div id="example-container" class="wrapper">
      <HotTable :root="root" :settings="setting"></HotTable>
    </div>
  </div>

</template>
<script>
  import moment from 'moment'; //引入handsontable依赖的插件
  import numbro from 'numbro';
  import pikaday from 'pikaday'; //日期插件
  import Zeroclipboard from 'zeroclipboard';
  import Handsontable from 'handsontable';
  import HotTable from 'vue-handsontable-official';
  import Vue from 'vue';

  export default {
    name: 'config',
    data: function () {
      var self = this;
      var setting = {
        startRows: 11,//行列范围
        startCols: 6,
        minRows: 5,  //最小行列
        minCols: 5,
        maxRows: 2000,  //最大行列
        maxCols: 60,
        rowHeaders: true,//行表头
        colHeaders: true,//自定义列表头or 布尔值
        minSpareCols: 2, //列留白
        minSpareRows: 2,//行留白
        currentRowClassName: 'currentRow', //为选中行添加类名，可以更改样式
        currentColClassName: 'currentCol',//为选中列添加类名
        autoWrapRow: true, //自动换行
        contextMenu: {   //自定义右键菜单，可汉化，默认布尔值
        items: {
          "row_above": {
            name:'上方插入一行'
          },
          "row_below": {
            name:'下方插入一行'
          },
          "hsep1": "---------", //提供分隔线
            "remove_row": {
            name: '删除行',
          },
          "make_read_only": {
            name: '只读',
          },
          "freeze_rowumn": {
            name: '固定列',
          },
          "unfreeze_rowumn": {
            name: '取消列固定',
          },
          "freeze_column": {
            name: '固定列',
          },
          "unfreeze_column": {
            name: '取消列固定',
          },
          "hsep2": "---------",
        }
      },//右键效果
        fillHandle: true, //选中拖拽复制 possible values: true, false, "horizontal", "vertical"
        fixedColumnsLeft: 1,//固定左边列数
        fixedRowsTop: 0,//固定上边列数
        manualColumnFreeze: true, //手动固定列
        manualColumnMove: true, //手动移动列
        manualRowMove: true,   //手动移动行
        manualColumnResize: true,//手工更改列距
//        manualRowResize: true,//手动更改行距
        columnSorting: true,//排序
        stretchH: 'all',//根据宽度横向扩展，last:只扩展最后一列，none：默认不扩展
        afterChange: function (changes, source) { //数据改变时触发此方法
          self.sourceData = this.getSourceData();
          self.saveConfig();
      },
      };
      setting.data = this.data;
      setting.colHeaders = this.colHeaders;
      setting.maxCols = setting.colHeaders.length;
      setting.columns = this.columns;
      return {
        saveResult:"",
        root: 'example-container',
        setting:setting,
        sourceData:null
      };
    },
    methods:{
      saveConfig(){
        if (!this.sourceData) return;
        var self = this;
        console.log({
          config:self.sourceData,
          name:self.name,
          type:self.type
        })
        this.$http.post('http://localhost:8081/saveconfig',{
          config:self.sourceData,
          name:self.name,
          type:self.type
        },{
          JSON:true
        }).then(function(response){
          // response.data中获取ResponseData实体
          self.saveResult = response.data+new Date().toString();
        },function(response){
          // 发生错误
          alert('err')
        });
      }
    },
    created:function(){

    },
    watch:{
      data(val) {
        this.setting.data = val;
      },
      colHeaders(val){
        this.setting.colHeaders = val;
        this.setting.maxCols = val.length;
      },
      columns(val) {
        this.setting.columns = val;
      }
    },
    props:{
      name:{
        type: String,
        required: true,
      },
      type:{
        type:String,
        required: true
      },
      data:{
        type: Array,
        required: true,
      },
      colHeaders:{
        type: Array,
        required: false,
      },
      columns:{
        type: Array,
        required: false,
      }
    },
    name: 'SampleApp',
    components: {
      HotTable
    }
  }
</script>

<style>
  button{
    margin: 20px 20px;
  }
  .handsontable .currentRow {
    background-color: #E7E8EF;
  }

  .handsontable .currentCol {
    background-color: #F9F9FB;
  }
  #test-hot {
    width: 800px;
    height: 800px;
    overflow: hidden;
  }
</style>
