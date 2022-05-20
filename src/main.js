import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'

import {Button} from "vant";
import 'vant/lib/index.css';
Vue.config.productionTip = false
Vue.use(Button);
new Vue({
  render: h => h(App),
}).$mount('#app')
