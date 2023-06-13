<template>
  <div id="app" class="container mt-5">
    <router-view
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      :maximum.sync="maximum"
      :products="products"
      :sliderStatus="sliderStatus"
      @toggle="toggleSliderStatus"
      @add="addItem"
      @delete="deleteItem"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      maximum: 50,
      products: [],
      cart: [],
      sliderStatus: false
    }
  },
  mounted: function() { //bersifat memiliki beberapa func
        fetch('https://hplussport.com/api/products/order/price') // mengambil data dari API
        .then(Response => Response.json()) // mengubah respon yg didapat menjadi JSON
        .then(data => { // memasukan respon yg didapat ke variable data 
            this.products = data;  // variable data akan dimasukan ke variable/property products didalam property data di atas(products: null)
        })
    },
  computed: { 
        cartTotal: function(){
            let sum = 0;
            for (let key in this.cart) {
                sum = sum + (this.cart[key].product.price * this.cart[key].qty); // mendapatkan nilai harga dari masing2 data cart berdasarkan keynya, key didapat dari proses perulangan
            } // mendapatkan nilai key dari data yg ada di dalam cart
            return sum; //hasilnya akan diberikan nilai balik dari variable sum tsb
        },
        cartQty: function(){
            let qty = 0;
            for (let key in this.cart) {
                qty = qty + this.cart[key].qty; // cara mendapatkan data: menjumlahkan masing2 nilai dari qty/ kuantitas dari item tsb
            } // mendapatkan nilai key dari data yg ada di dalam cart
            return qty; //hasilnya akan diberikan nilai balik dari variable qty tsb
        },
    },

  methods: {
    toggleSliderStatus: function() {
      this.sliderStatus = !this.sliderStatus;
    },
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
    deleteItem : function(key) {
            if (this.cart[key].qty > 1) {
                this.cart[key].qty--; // akan mengurangi jika lebih dari 1
            } else {
                this.cart.splice(key, 1); // jika hanya 1 maka kita akan delete 
            } // akan mengecek jika qty lebih dari 1 
        }
  }
};
</script>
