<template>
  <div id="app">
    <el-container>
      <el-header style="padding: 0"><Tabbar /></el-header> 
      <router-view/>
      <el-footer id="footer">footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Tabbar from "./././components/content/Tabbar";

export default {
  name: "app",
  components: {
    Tabbar,
  },
};
</script>

<style lang="scss" scoped>
#app {
  box-sizing: border-box;
  #footer{
    height: 100px!important; 
    line-height: 100px;
    text-align: center;
    color: #fff;
    background: rgba(0,0,0,.8);

  }
}
</style>
