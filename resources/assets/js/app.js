
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const about = require('./components/AboutComponent.vue')
const home = require('./components/HomeComponent.vue')
const welcome = require('./components/WelcomeComponent.vue')

const routes = [
{
	path:'/about',
	component:about
},
{
	path:'/home',
	component:home
},
{
	path:'/',
	component:welcome
}

];
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('about-component', require('./components/AboutComponent.vue'));
Vue.component('navbar', require('./components/NavbarComponent.vue'));
const router = new VueRouter({
	routes
})
const app = new Vue({
    el: '#app',
    router,
});
