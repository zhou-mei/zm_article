import Vue from 'vue'
//配置路由相关的信息
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Mine from '../components/Mine.vue'
import NewsDetails from '../components/content/NewsDetails.vue'

//1、通过Vue.use(插件),安装插件
Vue.use(VueRouter);
//重复点击导航时，控制台出现不影响功能的报错
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to){
    return VueRouterPush.call(this,to).catch(err => err);
}

const routes=[
    {
        //重定向
        path:'',
        redirect: '/home'
    },
    {
        path:'/home',
        component:Home
    },{
        path:'/news',
        component:News
    },{
        path:'/mine',
        component:Mine
    },
    {
        path:'/newsdetails',
        component:NewsDetails
    }
]

const router= new VueRouter({
    //配置路由和组件之间的应用古纳西
    routes,
    //路径显示模式为传统模式，而不是hash
    mode:'history',
    
})

//3、将router对象传入到Vue实例
export default router;