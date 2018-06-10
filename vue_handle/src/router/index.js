import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/index.js'
import Home from '../components/home.vue'
import employeAdmin from '../components/admin/employeAdmin.vue'
import userAdmin from "../components/admin/userAdmin.vue"
import menuManage from '../components/admin/menuManage.vue' 
import mine from '../components/myWork/mine.vue'
import yuan from '../components/menuTree/yuan.vue'
import yingyong from "../components/menuTree/yingyong.vue"
import liucheng from "../components/myWork/subwork/liucheng.vue"
Vue.use(Router)

let router= new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        next()
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[{
        path:"employeAdmin",
        name:"employeAdmin",
        component: employeAdmin
      }, {
          path: "userAdmin",
          name: "userAdmin",
          component: userAdmin 
        }, {
          path: "menuManage",
          name: "menuManage",
          component: menuManage,
          children:[{
            path: "yuan",
            name: "yuan",
            component: yuan
          },
            {
              path: "yingyong",
              name: "yingyong",
              component: yingyong
            }]
        },{
          path: "mine",
          name: "mine",
          component: mine,
        },
        {//工单
          path: "liucheng",
          name: "liucheng",
          component: liucheng,
        }
      ]
    }
  ]
})
//导航守卫
router.beforeEach((to,form,next)=>{
if(to.name==='login'){
  next()
}else{
  let isLogin=sessionStorage.getItem('isLogin')
  if (isLogin){
    next()
  }else{
    next('/login')
  }
}

})
export default router
