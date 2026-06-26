import Vue from 'vue';

import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';

import Products from '@/views/Products.vue';

import Solutions from '@/views/Solutions.vue';

import Cases from '@/views/Cases.vue';

import News from '@/views/News.vue';

import Downloads from '@/views/Downloads.vue';

import Contact from '@/views/Contact.vue';



Vue.use(VueRouter);



const routes = [

  { path: '/', name: 'Home', component: Home, meta: { title: '素盒物联 - 专业数字标牌解决方案' } },

  { path: '/products', name: 'Products', component: Products, meta: { title: '产品中心 - 素盒物联' } },

  { path: '/solutions', name: 'Solutions', component: Solutions, meta: { title: '解决方案 - 素盒物联' } },

  { path: '/cases', name: 'Cases', component: Cases, meta: { title: '成功案例 - 素盒物联' } },

  { path: '/news', name: 'News', component: News, meta: { title: '新闻动态 - 素盒物联' } },

  { path: '/downloads', name: 'Downloads', component: Downloads, meta: { title: '下载中心 - 素盒物联' } },

  { path: '/contact', name: 'Contact', component: Contact, meta: { title: '联系我们 - 素盒物联' } },

  { path: '*', redirect: '/' },

];



const router = new VueRouter({

  mode: 'history',

  routes,

  scrollBehavior() {

    return { x: 0, y: 0 };

  },

});



router.afterEach((to) => {

  document.title = to.meta.title || '素盒物联';

});



export default router;

