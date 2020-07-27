import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },

  {
    path: '/encuesta',
    name: 'Quiz',
    component: () => import( '../views/Quiz.vue')
  },
  {
    path: '/agendar-cita',
    name: 'NewAppointment',
    component: () => import( '../views/NewAppointment.vue')
  },
  {
    path: '/encuestas',
    name: 'ViewQuizzes',
    component: () => import( '../views/ViewQuizzes.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
