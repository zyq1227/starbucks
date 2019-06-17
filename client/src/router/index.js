import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//定义routerd
let router = new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      meta:{
        title:'加班/休假' 
      },
      component: ()=>import('../views/home/index.vue')
    },
    {
      path:'/login',
      name:'login',
      meta:{
        title:'登陆'
      },
      component:()=>import('../views/login/index.vue')
    },
    {
      path:'/search',
      name:'search',
      meta:{
        title:'搜索'
      },
      component:()=>import('../views/search/index.vue') 
    },
    {
      path:'/detali/:type/:id',
      name:'detali',
      meta:{
        title:'详情页'
      },
      props:true,
      component:()=>import('../views/detali/index.vue')
    },
    {
      path:'/commit/:type',
      name:'commit',
      meta:{
        title:'申请表'
      },
      props:true,
      component:()=>import('../views/commit/index.vue')
    }
  ]
})

//全局守卫
router.beforeEach((to,from,next)=>{
  //修改进入每一个路由的title
  document.title = to.meta.title
  next()
})

export default router