<template>
    <div>
        <h2>
            {{ foodName }}
            <img src="../../assets/img_quality.svg" v-show="isFavorite">
        </h2>
        <p2>{{ foodDesc }}</p2>
        <button v-on:click="toggleFavorite">Is Favorite?</button>
    </div>
</template>

<script>
export default {
    props: ['foodName', 'foodDesc', 'isFavorite'],
    emits: ['toggle-Favorite'],      //documented $emit function
    data() {
        return {
            //foodIsFavorite: this.isFavorite
        }
    },
    methods: {
        toggleFavorite() {
            //Send message with $emit to Parent Page (App.vue)
            //Send message which food is need to be changed
            this.$emit('toggle-Favorite', this.foodName)

            //this.foodIsFavorite = !this.foodIsFavorite;
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