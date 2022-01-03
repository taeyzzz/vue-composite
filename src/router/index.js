import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: "/application",
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPage.vue'),
  },
  {
    path: "/application",
    component: () => import(/* webpackChunkName: "about" */ '../views/Application.vue'),
    children: [
      {
        path: "",
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
      },
      {
        path: "calculator",
        component: () => import(/* webpackChunkName: "about" */ '../views/Calculator.vue'),
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
