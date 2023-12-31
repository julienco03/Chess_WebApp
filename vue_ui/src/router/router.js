import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChessView from '../views/ChessView.vue'
import RulesView from '../views/RulesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: HomeView,
      meta: {
        title: 'Home'
      },
      name: 'home',
      path: '/'
    },
    {
      component: ChessView,
      meta: {
        title: 'Chess'
      },
      name: 'chess',
      path: '/chess'
    },
    {
      component: RulesView,
      meta: {
        title: 'Rules'
      },
      name: 'rules',
      path: '/rules'
    }
  ]
})

export default router
