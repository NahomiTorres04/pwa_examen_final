import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Home from '@/components/Home'
import Footer from '@/components/Footer'
import Arquitectura from '@/components/Arquitectura'
import Tecnologias from '@/components/Tecnologias'
import Autenticacion from '@/components/Autenticacion'
import Cms from '@/components/Cms'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/arquitectura',
      name: 'Arquitectura',
      component: Arquitectura
    },
    {
      path: '/tecnologias',
      name: 'Tecnologias',
      component: Tecnologias
    },
    {
      path: '/autenticacion',
      name: 'Autenticacion',
      component: Autenticacion
    },
    {
      path: '/cms',
      name: 'Cms',
      component: Cms
    }
  ]
})
