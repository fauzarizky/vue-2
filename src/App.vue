<template>
  <div id="app" class="container mt-5">
    <h1>IDShop</h1>
    <price-slider :sliderStatus="sliderStatus" :maximum.sync="maximum"></price-slider>
    <product-list :products="products" :maximum="maximum" @add="addItem"></product-list>
  </div>
</template>

<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import priceSlider from './components/priceSlider.vue';
import productList from './components/productList.vue';

export default {
  name: "App",
  data: function() {
    return {
      maximum: 50,
      products: [],
      cart: [],
      sliderStatus: true
    }
  },
  components: {
    // FontAwesomeIcon,
    priceSlider,
    productList
  },
  mounted: function() { //bersifat memiliki beberapa func
        fetch('https://hplussport.com/api/products/order/price') // mengambil data dari API
        .then(Response => Response.json()) // mengubah respon yg didapat menjadi JSON
        .then(data => { // memasukan respon yg didapat ke variable data 
            this.products = data;  // variable data akan dimasukan ke variable/property products didalam property data di atas(products: null)
        })
    },
  methods: {
    addItem: function(product) { // (product) adalah parameter
            // this.cart.push(product) // data dari product tsb yg didapatkan dri variable item akan dimasukan kedalam cart, (untuk mengakses dari data card, menggunakan keyword THIS )
            let productIndex;
            let productExist = this.cart.filter(function(item, index){ // berfungsi untuk mencari suatu data didalam suatu array
                if (item.product.id == Number(product.id)) { // jika terdapat product.id yang sama antara data didalam cart dengan product yang kita kirimkan melalui argumen makan returnnya true
                    productIndex = index;
                    return true;
                } else {
                    return false
                }
            });
            if (productExist.length) { // jika productExist bernilai true, maka menambahkan nilai dari product index yg didapatkan
                this.cart[productIndex].qty++
            } else { //jika data product tidak ada, makan akan membuat data product baru didalam cart
                this.cart.push({product: product, qty: 1})
            }
        },
  }
};
</script>
