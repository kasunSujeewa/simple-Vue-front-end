import Vue from 'vue'
import VueRouter from 'vue-router'
import user from '../usersList.vue'
import userone from '../User.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'user',
        component: user,

    },
    {
        path: '/user',
        name: 'userone',
        component: userone,

    },



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,

})


export default router

