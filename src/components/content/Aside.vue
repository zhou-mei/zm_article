<template>
<div class="aside">
<div class="recommend">
    <ul>
        <li :key='item' v-for="item in recommend">
            <div class="item-content">
                <span class="order red" v-if="item.id<3">{{item.id+1}}</span>
                <span class="order orange" v-else>{{item.id+1}}</span>

                {{item.value}}
                <span v-if="item.id==0"><img src="../../assets/images/hot.png"></span>
                <span v-if="item.id==1"><img src="../../assets/images/hot.png"></span>
                <span v-if="item.id==2"><img src="../../assets/images/hot.png"></span>
            </div>
        </li>
    </ul>
    <span class="top">推荐</span>
</div>
</div>
</template>

<script>
export default{
    name:'Aside',
    data(){
        return{
            recommend:[
                {id:0,value:"多省救援队驰援河南"},
                {id:1,value:"东京奥运会今天开幕"},
                {id:2,value:"饿了么崩了"},
                {id:3,value:"奥运冠军退役后直播卖面膜"},
                {id:4,value:"云南虫谷"},
                {id:5,value:"重庆32个区县气温将达37度以上"},
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.red{
    background-color: red;
}
.orange{
    background-color: rgb(255, 145, 0);
}
.aside{
    .recommend{
        position: relative;
        ul{
            margin: 0;
            padding: 0;
            margin-top: 50px;
            list-style: none;
            border-top: 1px solid #000;
            li{
                padding:25px 20px;
                border-bottom: 1px dashed #000;
                .item-content{
                    .order{
                        display: inline-block;
                        height: 20px;
                        width: 20px;
                        line-height: 20px;
                        text-align: center;
                        border-radius: 6px;
                        color:#fff;
                    }
                    img{
                        width: 25px;
                        height: 25px;
                        vertical-align:bottom;
                    }
                }
            }
        }
        .top{
            position:absolute;
            top:-25px;
            left: 90px;
            width: 120px;
            height: 50px;
            line-height: 50px;
            text-align: center;    
            background-color: #fff;
            font-size:30px;
            font-family: '楷体';
            }
        }
    }
</style>
