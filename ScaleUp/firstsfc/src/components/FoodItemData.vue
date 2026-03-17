<template>
    <div>
        <h2>
            {{ foodName }}
            <img src="../assets/img_quality.svg" v-show="foodIsFavorite">
        </h2>
        <p2>{{ foodDesc }}</p2>
        <button v-on:click="toggleFavorite">Is Favorite?</button>
    </div>
</template>

<script>
export default {
    props: ['foodName', 'foodDesc', 'isFavorite'],
    data() {
        return {
            foodIsFavorite: this.isFavorite
        }
    },
    methods: {
        toggleFavorite() {
            this.foodIsFavorite = !this.foodIsFavorite;
        }
    }
}
</script>

<style>
img {
    height: 1.5em;
    float: right;
}
</style>