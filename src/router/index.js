import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// router懒加载
const Home = () => import('views/home/home')
const Category = () => import('views/category/category')
const Cart = () => import('views/cart/cart')
const Profile = () => import('views/profile/profile')
const Detail = () => import('views/home/detail/detail')

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
    // meta: {
    //   keepalive: true
    // },
    children: [
      {
        name: 'home-detail',
        path: 'detail/:id',
        component: Detail
      }
    ]
  },
  {
    name: 'category',
    path: '/category',
    component: Category
  },
  {
    name: 'cart',
    path: '/cart',
    component: Cart
  },
  {
    name: 'profile',
    path: '/profile',
    component: Profile
  },
  {
    name: 'cart-detail',
    path: '/home/detail/:id',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
