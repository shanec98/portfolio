import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')
const Work = () => import('@/views/Work.vue')
const Contact = () => import('@/views/Contact.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/work',
    name: 'work',
    component: Work
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})

export default router
