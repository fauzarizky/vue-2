<template>
        <transition name="custom" enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate_animated animate__fadeOutRight"> <!--memanfaatkan event yang dimiliki vue JS @beforeEnter etc-->
            <div v-if="sliderStatus">
                <div class="align-items-center" :class="sliderState">
                    <label class="font-weight-bold mr-2">Max</label> <!--Binding class menggunakan tipe data array-->
                    <input type="number" class="form-control mx-2" style="width: 60px; text-align: center;" v-model="maxAmount" @change="$emit('update:maximum', maxAmount)"> <!--mempengaruhi suatu properti/mengubah nilai secara lgsg (directive vmodel), mengatur style dengan tipe data object-->
                    <input type="range" class="custom-range" min="0" max="200" v-model="maxAmount" @input="$emit('update:maximum', maxAmount)">
                </div>
            </div>
        </transition>
</template>

<script>
export default {
    name: "price-slider",
    data: function() {
        return {
            maxAmount: 50
        }
    },
    props: ["sliderStatus", "maximum"],
    computed: {
        sliderState: function() {
            return this.sliderStatus ? 'd-flex': 'd-none'; // output bergantung pada slider status apakah true/false jika true maka return nya d-flex jika false d-none, (?) adalah ternary
        },
    }
}
</script>

<style>
/* animasi default dari vue JS */
.fade-enter, .fade-leave-to { /* Secara default jika transition tidk diberi name maka defaultnya akan menjadi "v-enter" bukan "fade" */
    opacity: 0;
}

.fade-enter-active, .fade-leave-active {
    transition: all 1s ease-in-out;
    
}
</style>