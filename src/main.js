import Vue from "vue";
// import App from './App.vue'
import router from "./router";
import AppStored from "./AppStored.vue";
import store from './store';
import pinDirective from './shared/pin-directive';
import currencyFilter from './shared/currency-filter'

Vue.config.productionTip = false;
Vue.directive('pin', pinDirective);
Vue.filter('currency', currencyFilter);

new Vue({
  render: h => h(AppStored),
  router, 
  store,
}).$mount("#app");
