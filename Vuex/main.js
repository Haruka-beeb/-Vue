import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  created() {
    console.log('Loading data from localStorage...'); 
    this.$store.dispatch('loadFromLocalStorage');
  },
  render: (h) => h(App),
}).$mount('#app');
