import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart)

createApp(App).mount('#app')

// file loader untuk memuat suatu file atau modul yg dibutuhkan didalam app vue salahsatunya kita bisa mengambil components dan assets