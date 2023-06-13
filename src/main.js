// import { createApp } from 'vue'
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import products from "./components/products.vue";
import checkout from "./components/checkout.vue";

library.add(faShoppingCart, faDollarSign)

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [ // untuk memberikan nilai dari masing2 path dengan componentnya
    {
      path:"*",
      component: products
    },
    {
      path:"/checkout",
      component: checkout
    },
  ]
});

// createApp(App).mount('#app') Vue 3
new Vue({
    render: h => h(App),
    router
  }).$mount("#app");

// file loader untuk memuat suatu file atau modul yg dibutuhkan didalam app vue salahsatunya kita bisa mengambil components dan assets