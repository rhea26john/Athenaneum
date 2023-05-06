import Vue from 'vue';
import VueRouter from 'vue-router';
import BookList from '@/components/bookList.vue';
import Login from '@/components/login.vue';
import BookDetail from '@/components/bookDetail.vue'
import SignUp from '@/components/signUp.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'BookList',
    component: BookList,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/bookDetail/:id',
    name: 'BookDetail',
    component: BookDetail,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
