<template>
  <div class="recommend-content">
    <div class="content">
      <div v-for="(item, index) in list" :key="index" class="item-content" :class="item.column" @click="update(index)">
        <img class="pic" :src="item.imgUrl"/>
        <div class="pic-content">
          <span class="pic-title">{{ item.title }}</span>
          <span class="pic-desc">{{item.desc}}</span>
          <span class="line"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.recommend-content {
    width: 100%;
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    .item-content {
      padding-right: 10px;
      flex:1;
      &:last-child{
        padding-right: 0;
      }
      .pic{
        width: 100%;
      }
      .pic-content {
        position: relative;
        height: 90px;
        padding: 5px 10px;
        background-color: #fff;
        .pic-title{
          display: block;
          height: 30px;
          line-height: 30px;
          color: red;
        }
        .pic-desc{
          display: block;
          width: 360px;
          padding-top: 10px;
          padding-bottom: 10px;
          color: rgb(119, 116, 116);
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .line{
          position: absolute;
          top:35px;
          left:10px;
          width: 50px;
          height: 2px;
          background-color: red;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "RecommendRead",
  data() {
    return {
      currentDate: "2021-06-01",
      list: [
        {
          id:0,
          imgUrl:
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
          title: "我是山林中的鹿",
          desc:"我是山林中的鹿我是山林中的鹿我是山林中的鹿我是山林中的鹿"+
          "我是山林中的鹿我是山林中的鹿我是山林中的鹿我是山林中的鹿"+
          "我是山林中的鹿我是山林中的鹿我是山林中的鹿我是山林中的鹿"+
          "我是山林中的鹿我是山林中的鹿我是山林中的鹿我是山林中的鹿"+
          "我是山林中的鹿我是山林中的鹿我是山林中的鹿我是山林中的鹿"
        },
        {
          id:1,
          imgUrl:
            "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
          title: "我是草原上的马",
          desc:"我是草原上的马我是草原上的马我是草原上的马我是草原上的马"+
          "我是草原上的马我是草原上的马我是草原上的马我是草原上的马"+
          "我是草原上的马我是草原上的马我是草原上的马我是草原上的马"+
          "我是草原上的马我是草原上的马我是草原上的马我是草原上的马"+
          "我是草原上的马我是草原上的马我是草原上的马我是草原上的马"+
          "我是草原上的马我是草原上的马我是草原上的马我是草原上的马"
        },
        {
          id:2,
          imgUrl:
            "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          title: "我是森林里的山狮",
          desc:"我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"+
          "我是森林里的山狮我是森林里的山狮我是森林里的山狮我是森林里的山狮"
        },
      ],
    };
  },
  methods:{
    update(index){
            this.$router.push({
                path:'/newsdetails',
                query:{
                    obj:this.list[index]
                }
            })
            
        }
  }
};
</script>