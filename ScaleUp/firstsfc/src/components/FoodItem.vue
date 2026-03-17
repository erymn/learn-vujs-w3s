<template>
    <div v-on:click="countClicks">
        <h2>{{ foodName }} <img src="../assets/img_quality.svg" v-show="foodIsFavorite" width="32" height="32"></h2>
        <p>{{ foodDesc }}</p>
        <button v-on:click="toggleFavorite">Favorite</button>
        <!-- <p>{{ message }}</p> -->
        <p id="red">Kamu telah klik aku {{ clicks }} klik</p>
    </div>
</template>

<script>
    export default {
        data() {
            return  {
                //message: 'Aku seneng ' + this.foodName,
                clicks: 0,
                //1. Modify Props
                foodIsFavorite: this.isFavorite
            }
        },
        methods: {
            countClicks() {
                this.clicks++
            },
            //2. Modify Props
            toggleFavorite() {
                this.foodIsFavorite = !this.foodIsFavorite
            }
        },
        //Props as Object
        props: {
            foodName: {
                type: String,
                required: true,
                default: false
            },
            foodDesc: {
                type: String,
                required: false,
                default: 'ini adalah pesan default dari props object',
                validator: function(value) {
                    if(20 < value.length && value.length < 40){
                        return true
                    }else{
                        return false
                    }
                }
            },
            isFavorite: {
                type: Boolean,
                required: false,
                default: false
            }
        }
        // //Default PROPS
        // props: [
        //     'foodName','foodDesc','isFavorite'
        // ]
    }
</script>

<style>
    #red {
        font-weight: bold ;
        color: rgb(144, 12, 12);
    }
</style>