import { createRouter, createWebHistory } from 'vue-router'
import MainListView from '../views/MainListView.vue'
import FavListView from '../views/FavListView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: MainListView
    },
    {
      path:'/favourite',
      component: FavListView
    }
  ]
})

export default router
