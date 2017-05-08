import Vue from 'vue';
import Router from 'vue-router';
import Board from '@/components/Board';
import Mac from '@/components/Mac';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Board',
      component: Board,
    },
    {
      path: '/mac',
      name: 'Mac',
      component: Mac,
    },
  ],
});
