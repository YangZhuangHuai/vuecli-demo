import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // 定义路由映射
  // { path: '/', component: Home },
  // { path: '/about', component: About },
];

const router = new VueRouter({
  routes, // 路由配置
});

export default router;