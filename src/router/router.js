import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from '../components/loginComponent.vue'
import Home from '../components/HomeCom'

const routes = [
    {
        path: '/',
        component: LoginComponent
    },
    {
        path: '/home',
        component: Home,
        //重定向
        redirect:'/welcome',
        children: [
            {
                path: '/welcome',
                component: () => import('../components/WelcomeCom.vue')
            },
            {
                path: '/user',
                component:() => import('../components/UserCom.vue')
            }
        ]
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
