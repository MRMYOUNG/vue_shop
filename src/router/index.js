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

const routes = [
    {path:'/',redirect:'/login'},
    {path:'/login',component:login},
    {path:'/home',component:home}
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