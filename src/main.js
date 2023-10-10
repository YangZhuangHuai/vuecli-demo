import Vue from 'vue'
import App from './App.vue'
import  './mock'
import router from './router'; // 导入路由实例
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store';

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    
  }
}).$mount('#app')
