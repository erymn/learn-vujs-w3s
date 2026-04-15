<template>
    <h1>Transition Between Elements</h1>
    <p>Click the button to get a new image.</p>
    <p>The new image is added before the previous is removed. We will fix this in the next example with mode="out-in".
    </p>
    <button @click="newImg">Next image</button><br>
    <Transition>
        <img src="../../assets/img_pizza.svg" v-if="imgActive === 'pizza'">
        <img src="../../assets/img_apple.svg" v-else-if="imgActive === 'apple'">
        <img src="../../assets/img_cake.svg" v-else-if="imgActive === 'cake'">
        <img src="../../assets/img_fish.svg" v-else-if="imgActive === 'fish'">
        <img src="../../assets/img_rice.svg" v-else-if="imgActive === 'rice'">
    </Transition>
</template>

<script>
export default {
    data() {
        return {
            imgActive: 'pizza',
            imgs: ['pizza', 'apple', 'cake', 'fish', 'rice'],
            indexNbr: 0
        }
    },
    methods: {
        newImg() {
            this.indexNbr++;
            if (this.indexNbr >= this.imgs.length) {
                this.indexNbr = 0;
            }
            this.imgActive = this.imgs[this.indexNbr];
        }
    }
}
</script>

<style>
.v-enter-active {
    animation: swirlAdded 1s;
}

.v-leave-active {
    animation: swirlAdded 1s reverse;
}

@keyframes swirlAdded {
    from {
        opacity: 0;
        rotate: 0;
        scale: 0.1;
    }

    to {
        opacity: 1;
        rotate: 360deg;
        scale: 1;
    }
}

img {
    width: 100px;
    margin: 20px;
}

img:hover {
    cursor: pointer;
}
</style>