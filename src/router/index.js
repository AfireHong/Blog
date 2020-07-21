import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/blog/index.vue'
import Home from '../views/blog/Home.vue'
import Articles from '../views/blog/Articles.vue'
import About from '../views/blog/About.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: index,
    children:[
      {
        path:'home', name:'home', component: Home, meta: {title: '博客主页'}
      },
      {
        path:'articles', name:'articles', component: Articles, meta: {title: '文章列表'}
      },
      {
        path:'About', name:'about', component: About, meta: {title: '关于'}
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
