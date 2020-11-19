import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Home from '@/components/Home'
import Footer from '@/components/Footer'
import Contacto from '@/components/Contacto'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Contacto',
      name: 'Contacto',
      component: Contacto
    }
  ]
})
