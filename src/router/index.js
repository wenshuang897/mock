import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    // meta:["首页"],
    component: HomeView,
    children:[
      {path:"",name:"haha",component:()=>import("../views/homes/HomeIndex.vue")},
      {path:"2-1",meta:["用户列表"],component:()=>import("../views/homes/HomeUser.vue")},
      {path:"2-2",meta:["商家列表"],component:()=>import("../views/homes/HomeShop.vue")},
      {path:"2-3",meta:["食品列表"],component:()=>import("../views/homes/HomeFood.vue")},
      {path:"2-4",meta:["订单列表"],component:()=>import("../views/homes/HomeOrder.vue")},
      {path:"2-5",meta:["管理员列表"],component:()=>import("../views/homes/HomePerson.vue")},
    ]
  },
  {
    path: "/login",
    name: "MyLogin",
    component: () => import("../views/MyLogin.vue"),
  },
  {
    path: "/form",
    name: "MyForm",
    component: () => import("../views/MyForm.vue"),
  },
  {
    path: "/form2",
    name: "form2",
    component: () => import("../views/MyForm2.vue"),
  },
 
  
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});
// 权限管理
router.beforeEach(function(to,from,next){
  let token = localStorage.getItem("token")
  if(to.path=="/login"){//没有权限约束
    next()
  }else{
    if(token) return next()
    if(!token)return next({path:"/login"})
  }
  
})

export default router;
