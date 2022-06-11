require('./bootstrap');
import router from './router/index';

window.Vue = require('vue').default;
window.csrfToken = document.querySelector('meta[name="csrf-token"]').content;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', require('./components/Header.vue').default);
Vue.component('footer-component', require('./components/Footer.vue').default);

const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue!'
    },
    router
});
