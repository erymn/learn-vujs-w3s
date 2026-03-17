<template>
    <div v-on:click="countClicks">
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
        <p id="red">Kamu telah klik aku {{ clicks }} klik</p>
    </div>
</template>

<script>
    export default {
        data() {
            return  {
                name: 'Apel',
                message: 'Aku seneng apel',
                clicks: 0
            }
        },
        methods: {
            countClicks() {
                this.clicks++
            }
        }
    }
</script>

<style>
    #red {
        font-weight: bold ;
        color: rgb(144, 12, 12);
    }
</style>