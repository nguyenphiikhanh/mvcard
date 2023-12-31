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
        path: '/category',
        name: 'Category',
        component: () => import("@/views/Category.vue"),
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () => import("@/views/Detail.vue"),
    },
    {
        path: '/authors',
        name: 'Authors',
        component: () => import("@/views/Authors.vue"),
    },
    {
        path: '/*', //page not found
        name: 'NotFound',
        component: () => import("@/components/NotFound.vue"),
    }
]

const router = new VueRouter({
    routes,
    mode: "history",
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
})

export default router
