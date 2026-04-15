<template>
    <h1>Basic CSS Animation</h1>
    <button @click="this.doesMove = true">Start</button>
    <div :class="{ move: doesMove }"></div>
</template>

<script>
export default {
    data() {
        return {
            doesMove: false
        }
    }
}
</script>

<style scoped>
.move {
    animation: move .5s alternate 4 ease-in-out;
}

@keyframes move {
    from {
        translate: 0 0;
    }

    to {
        translate: 70px 0;
    }
}

div {
    border: solid black 2px;
    background-color: lightcoral;
    border-radius: 50%;
    width: 60px;
    height: 60px;
}

h1,
button,
div {
    margin: 10px;
}
</style>