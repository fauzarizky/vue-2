<template>
    <transition-group name="fade" tag="div" @beforeEnter="before" @enter="enter" @leave="leave"><!--tag untuk menunjukan bahwa effect transition ini akan diberikan di element div karena transisi group secara default mencari element span -->            
    <div class="row mb-3 align-items-center" v-for="(item, index) in showItem" :key="item.id" :data-index="index"> <!--Directive v-for/perulangan (temporary variable = item), meminta nilai index saat melakukan perulangan-->,<!--menampilkan harga dibawah nilai maximum dgn pengkondisian if, math trunc berfungsi untuk mengembalikan bilangan buat dari suatu angka dengan menghilangkan digit pecahan -->
            <div class="col-1 m-auto">
                <button class="btn btn-info" @click="$emit('add-item', item)">+</button>
            </div>
            <div class="col-sm-4">
                <img v-bind:src="item.image" :alt="item.name" class="img-fluid d-block"> <!-- cara sederhana: hilangkan v-bind-->
            </div>
            <div class="col">
                <h3 class="text-info">{{ item.name }}</h3>
                <p class="mb-0">{{ item.description }}</p>
                <div class="h5 float-right">
                    <price v-bind:value="Number(item.price)"> <!--untuk memanggil componet, buat nama tag sesuai yang sudah ditentukan di file JS, precision digunakan untuk menampilkan berapa digit dibelakang koma(,)-->
                    </price>
                </div>
            </div>
    </div>
    </transition-group>
</template>

<script>
import price from './price.vue';
export default {
    name: "product-list",
    components: {
        price
    },
    props: ["products", "maximum"],
    computed: {
        showItem: function(){
            let max = this.maximum;
            return this.products.filter(function(item){
                return Math.trunc(item.price) <= max
            })
        }
    },
    methods: {
        before: function (el) { 
            el.className = 'd-none';
        },

        enter: function (el) {
            var delay =  el.dataset.index * 100;//mendapatkan nilai index dikali 100, perkalian menghasilkan nilai untuk ms, indexnya akan didapatkan dari atribut html
            setTimeout(function() {
                el.className = 'row d-flex mb-3 align-items-center animate__animated animate__fadeInRight'
            }, delay)
        },

        leave: function (el) {
            var delay =  el.dataset.index * 100;//mendapatkan nilai index dikali 100, perkalian menghasilkan nilai untuk ms, indexnya akan didapatkan dari atribut html
            setTimeout(function() {
                el.className = 'row d-flex mb-3 align-items-center animate__animated animate__fadeOutRight'
            }, delay)
        },
    },
}

</script>