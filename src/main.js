// import { createApp } from 'vue'
import Vue from 'vue';
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faDollarSign } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faDollarSign)

Vue.config.productionTip = false;

// createApp(App).mount('#app') Vue 3
new Vue({
    render: h => h(App)
  }).$mount("#app");

// file loader untuk memuat suatu file atau modul yg dibutuhkan didalam app vue salahsatunya kita bisa mengambil components dan assets