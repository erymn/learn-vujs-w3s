<template>
    <div v-on:click="countClicks">
        <h2>{{ foodName }} <img src="../assets/img_quality.svg" v-show="isFavorite" width="50" height="50"></h2>
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
        props: [
            'foodName','foodDesc','isFavorite'
        ]
    }
</script>

<style>
    #red {
        font-weight: bold ;
        color: rgb(144, 12, 12);
    }
</style>