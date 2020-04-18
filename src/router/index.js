//配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// import login from '../components/login'
//1、通过Vue.use(插件)，安装插件
//只要是个插件，都得这么用 Vue.use(插件)
Vue.use(VueRouter)

//实现懒加载
const login = () => import('../components/login')
const home = () => import('../components/home/home')

//home页面子路由
const homeBody = () => import('../components/home/homeBody/homeBody')
const classification = () => import('../components/home/classification/classification')
const shoppingCart = () => import('../components/home/shoppingCart/shoppingCart')
const my = () => import('../components/home/my/my')

const routes = [
    {path:'/',redirect:'/login'},
    {path:'/login',component:login},
    {
        path:'/home',
        component:home,
        children:[
            {path:'', redirect:'homeBody'},
            {path:'homeBody', component:homeBody},
            {path:'classification', component:classification},
            {path:'shoppingCart', component:shoppingCart},
            {path:'my', component:my},
        ]
    }
]
//
const router = new VueRouter({
    //配置路由和组件之间的映射关系
    routes,
    //young待看，history模式是什么
    model:"history"
})

//3、将router挂载到实例中才行

export default router