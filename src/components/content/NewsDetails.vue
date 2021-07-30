<template>
  <div id="newsdetails">
    <!-- { "id": 0, "imgUrl": "", "title": "多省救援队驰援河南", "desc": "多省救援队驰援河南多省救援队驰援河南多省救援队驰援河南" } -->
    <!-- <div>{{$route.query.obj}}</div> -->
    <div class="title">
      <span>{{ $route.query.obj.title }}</span>
    </div>
    <div class="content">
      <img
        :src="$route.query.obj.imgUrl"
        alt="图片加载失败"
        onerror="this.src='' "
      />
      <div class="desc">{{ $route.query.obj.desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsDetails",
  data() {
    return {};
  },
  created() {
    // this.getParams();
  },
  watch: {
    // //检测路由变化，只要变化了就调用获取路由参数方法将数据存储本组件即可
    // '$route':'getParams'
  },
  methods: {
    // getParams(){
    //     //渠道路由带过来的参数
    //     var routerId = this.$router.query.id
    //     var routerImgUrl = this.$router.query.imgUrl
    //     var routerTitle = this.$router.query.title
    //     var routerDesc = this.$router.query.desc
    //     //将数据放在当前组件的数据内
    //     this.id = routerId
    //     this.imgUrl = routerImgUrl
    //     this.title = routerTitle
    //     this.desc = routerDesc
    // }
  },
};
</script>

<style lang="scss" scoped>
#newsdetails {
  .title {
    padding: 0;
    width: 100%;
    height: 300px;
    text-align: center;
    line-height: 300px;
    background-color: rgba(0, 0, 0, 0.8);
    span {
      padding: 15px 30px;
      color: #fff;
      font-size: 60px;
      font-family: "楷体";
      // background-color: pink;
      border-bottom: 2px solid #fff;
    }
  }
  .content {
    padding: 30px;
    padding-left: 0;
    overflow: hidden; //形成BFC
    &::first-letter {
      font-size: 40px;
      color: red;
    }
    img {
      width: 500px;
      height: 340px;
      float: left;
      margin-right: 30px;
    }
    .desc {
      font-size: 25px;
      text-indent: 2em;
      line-height: 1.5em;
      font-family: "楷体";
    }
  }
}
</style>