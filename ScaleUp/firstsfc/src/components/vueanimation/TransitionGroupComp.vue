<template>
    <h3>The &lt;TransitionGroup&gt; Component</h3>
    <p>New products are given animations using the &lt;TransitionGroup&gt; component.</p>
    <input type="text" v-model="inpName">
    <button @click="addEl">Add</button>
    <TransitionGroup tag="ol">
        <li v-for="x in products" :key="x">
            {{ x }}
        </li>
    </TransitionGroup>
</template>

<script>
export default {
    data() {
        return {
            products: ['Apple', 'Pizza', 'Rice'],
            inpName: ''
        }
    },
    methods: {
        addEl() {
            const el = this.inpName;
            this.products.push(el);
            this.inpName = null;
        }
    }
}
</script>

<style>
.v-enter-from {
    opacity: 0;
    translate: 200px 0;
    rotate: 360deg;
}

.v-enter-to {
    opacity: 1;
    translate: 0 0;
    rotate: 0deg;
}

.v-enter-active,
.v-leave-active,
.v-move {
    transition: all 0.7s;
}

.v-leave-active {
    position: absolute;
}

.v-leave-from {
    opacity: 1;
}

.v-leave-to {
    opacity: 0;
}

.diceDiv {
    margin: 10px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    text-align: center;
    border: solid black 1px;
    border-radius: 5px;
    display: inline-block;
}
</style>

<!-- <style>
.v-enter-from {
    opacity: 0;
    rotate: 180deg;
}

.v-enter-to {
    opacity: 1;
    rotate: 0deg;
}

.v-enter-active {
    transition: all 0.7s;
}
</style> -->