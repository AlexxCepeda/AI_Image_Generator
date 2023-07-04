import Vue from 'vue'
import App from './App.vue'
import Typewriter from 'vue-typewriter'
import Vuetify from 'vuetify';

import './App.css'
import 'vuetify/dist/vuetify.min.css';

Vue.use(Typewriter);
Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
