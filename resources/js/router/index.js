const { default: VueRouter } = require('vue-router');

window.Vue = require('vue').default;
Vue.use(VueRouter);

const routes = [
    {
        name: 'Home',
        path: '/home',
        component: () => import('../pages/Home.vue')
    },
    {
        name: 'About',
        path: '/about',
        component: () => import('../pages/About.vue')
    },
    {
        name: 'User',
        path: '/user',
        component: () => import('../pages/User.vue'),
        props: true
    },
    {
        name: 'Register',
        path: '/user/create',
        component: () => import('../pages/auth/Register.vue'),
        props: true
    },
    {
        name: 'Profile',
        path: '/user/:id',
        component: () => import('../pages/Profile.vue'),
        props: true
    },
    {
        name: 'Edit',
        path: '/user/:id',
        component: () => import('../pages/Edit.vue'),
        props: true
    },
    {
        path: '*',
        component: () => import('../pages/NotFound.vue')
    },
];

const router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'history',
    routes,
});

export default router;
