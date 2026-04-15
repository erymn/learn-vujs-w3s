<template>
    <h1>Basic CSS Transition</h1>
    <button @click="this.doesRotate = true">Rotate</button>
    <div :class="{ rotate: doesRotate }"></div>
</template>

<script>
export default {
    data() {
        return {
            doesRotate: false
        }
    }
}
</script>

<style scoped>
.rotate {
    rotate: 160deg;
    transition: rotate 1s;
}

div {
    border: solid black 2px;
    background-color: lightcoral;
    width: 60px;
    height: 60px;
}

h1,
button,
div {
    margin: 10px;
}
</style>