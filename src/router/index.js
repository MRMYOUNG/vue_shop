//配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'
//1、通过Vue.use(插件)，安装插件
//只要是个插件，都得这么用 Vue.use(插件)
Vue.use(VueRouter)

const routes = [

]
//
const router = new VueRouter({
    //配置路由和组件之间的映射关系
    routes
})

//3、将router挂载到实例中才行

export default router