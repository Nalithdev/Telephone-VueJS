import { createRouter, createWebHashHistory } from 'vue-router'
import JournalView from '../views/JournalView.vue'
import ContactView from '@/views/ContactView.vue'
import ClavierView from '@/views/ClavierView.vue'
import AjoutView from '@/views/AjoutView.vue'

const routes = [
  {
    path: '/',
    name: 'Journal',
    component: JournalView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/clavier',
    name: 'Clavier',
    component: ClavierView
  },
  {
    path:'/ajout',
    name: '+',
    component: AjoutView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
