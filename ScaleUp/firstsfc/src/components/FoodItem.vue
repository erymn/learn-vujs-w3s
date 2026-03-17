<template>
    <div v-on:click="countClicks">
        <h2>{{ foodName }} <img src="../assets/img_quality.svg" v-show="isFavorite" width="32" height="32"></h2>
        <p>{{ foodDesc }}</p>
        <!-- <p>{{ message }}</p> -->
        <p id="red">Kamu telah klik aku {{ clicks }} klik</p>
    </div>
</template>

<script>
    export default {
        data() {
            return  {
                //message: 'Aku seneng ' + this.foodName,
                clicks: 0
            }
        },
        methods: {
            countClicks() {
                this.clicks++
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
                default: 'ini adalah pesan default dari props object'
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