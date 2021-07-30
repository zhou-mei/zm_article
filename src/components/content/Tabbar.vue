<template>
  <div>
    <el-row class="tabbar">
      <el-col :span="4" style="height:60px;padding-left:10px">
        <img src="../../assets/images/logo.png" height="60px">
      </el-col>
      <el-col :span="20">
        <ul>
          <li><router-link to="/mine" style="color:#fff">体育</router-link></li>
          <li><router-link to="/mine" style="color:#fff">房产</router-link></li>
          <li><router-link to="/mine" style="color:#fff">科技</router-link></li>
          <li><router-link to="/mine" style="color:#fff">财经</router-link></li>
          <li><router-link to="/news" style="color:#fff">社会</router-link></li>
          <li><router-link to="/home" style="color:#fff">军事</router-link></li>
          <li><router-link to="/home" style="color:#fff">国内</router-link></li>
          <li><router-link to="/home" style="color:#fff">国际</router-link></li>
          <li><router-link to="/home" style="color:#fff">首页</router-link></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.tabbar {
  height: 60px;
  background: pink;
}
.tabbar .el-col {
  line-height: 60px;
  background-color:rgb(9, 9, 148);
}
ul > li {
  height: 100%;
  float: right;
  padding-right: 70px;
}
</style>


<script>
export default {
  name: "Tabbar",
};
</script>