import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Mac from '@/components/Mac';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/mac',
      name: 'Mac',
      component: Mac,
    },
  ],
});
