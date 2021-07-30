<template>
<div class="others">
    <div class="item">
        <div class="item-content" :key='index' v-for="(item,index) in list">
            <span class="item-title">{{item.title}}</span>
            <span class="item-desc">{{item.desc}}<button class="more" @click="update(index)">更多>></button></span>
        </div>
    </div>
</div>
</template>

<script>
export default{
    name:'Others',
    data(){
        return{
            list:[
                {
                    id:0,
                    imgUrl:'',
                    title:"多省救援队驰援河南",
                    desc:"多省救援队驰援河南多省救援队驰援河南多省救援队驰援河南多省救援队驰援"+
                    "河南多省救援队驰援河南多省救援队驰援河南多省救援队驰援河南多省救援队驰援河南多省救援队驰援河南多省救援队驰援河南多省救援队驰援河南多省救援队驰援河南多省救援队驰援河南多省救援队驰援河南多省救援队驰援河南多省救援队驰援河南多省救援队驰援河南多省救援队驰援河南"
                },{
                    id:1,
                    imgUrl:'',
                    title:"东京奥运会今天开幕",
                    desc:"东京奥运会今天开幕东京奥运会今天开幕东京奥运会今天开幕"
                },{
                    id:2,
                    imgUrl:'',
                    title:"饿了么崩了",
                    desc:"饿了么崩了饿了么崩了饿了么崩了"
                },{
                    id:3,
                    imgUrl:'',
                    title:"奥运冠军退役后直播卖面膜",
                    desc:"奥运冠军退役后直播卖面膜奥运冠军退役后直播卖面膜奥运冠军退役后直播卖面膜"
                },{
                    id:4,
                    imgUrl:'',
                    title:"云南虫谷",
                    desc:"云南虫谷云南虫谷云南虫谷"
                },{
                    id:5,
                    imgUrl:'',
                    title:"重庆32个区县气温将达37度以上",
                    desc:"重庆32个区县气温将达37度以上重庆32个区县气温将达37度以上重庆32个区县气温将达37度以上"
                },
            ]
        }
    },
    methods:{
        update(index){
            this.$router.push({
                path:'/newsdetails',
                query:{
                    // id:"1",
                    // title:this.list[index].title,
                    obj:this.list[index]
                }
            })
            
        }
    }
}
</script>

<style lang="scss" scoped>
.others{
    .item{
        margin: 0;
        padding: 0;
        list-style: none;
        border-top: 1px dashed #000;
        .item-content{
            padding: 10px 0;
            border-bottom: 1px dashed #000;
            .item-title{
                height: 40px;
                line-height: 40px;
                font-size: 20px;
                display:block;
            }
            .item-desc{
                display: block;
                font-size: 14px;
                color: rgb(119, 116, 116);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .more{
                float: right;
                color:blue;
                border: none;
            }
        }
    }
}
</style>
