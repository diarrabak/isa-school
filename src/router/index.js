import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DepartmentList from "../components/departments/DepartmentList.vue";
import DepartmentDetails from "../components/departments/DepartmentDetails.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/departments',
      name: 'departments',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/departments/DepartmentList.vue')
    },
    {
      path: '/departments/:id',
      name: 'department',
      component: () => import('../components/departments/DepartmentDetails.vue')
    },
    {
      path: '/new-department/:id?',
      name: 'new-department',
      component: () => import('../components/departments/DepartmentCreate.vue')
    }
    
  ]
})

export default router
