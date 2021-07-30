<template>
  <div>
    
    <el-container>
        <el-main style="background-color: #eee;">
          <Lunbopic></Lunbopic>
          <div class="title">推荐阅读</div>
          <RecommendRead></RecommendRead>
          <div class="title">最新文章</div>
          <NewestPassage></NewestPassage>
          <div class="title">其他热点</div>
          <Others></Others>
        </el-main>
        <el-aside style="background-color: #fff">
          <Aside></Aside>
        </el-aside>
      </el-container>
      </div>
</template>

<script>
import Lunbopic from "./content/Lunbopic.vue"
import RecommendRead from "./content/RecommendRead.vue";
import NewestPassage from "./content/NewestPassage.vue";
import Aside from "./content/Aside.vue"
import Others from './content/Others.vue'

export default {
  name: "Home",
  components:{
    Lunbopic,
    RecommendRead,
    NewestPassage,
    Aside,
    Others
  }
};
</script>


<style>
.title {
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  letter-spacing: 3px;
  background-color: rgb(245, 240, 240);
  color: rgb(4, 4, 187);
  font-weight: bold;
  font-size: 20px;
}
</style>