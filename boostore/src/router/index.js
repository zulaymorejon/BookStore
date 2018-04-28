import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{Auth:false,title:'Inicio'}
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta:{Auth:false,title:'Registro'}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{Auth:false,title:'Login'}
    }
  ]
})
