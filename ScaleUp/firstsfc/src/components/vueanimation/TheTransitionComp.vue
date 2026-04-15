<template>
    <h1>Add/Remove '&lt;p&gt;' Tag</h1>
    <button @click="this.exists = !this.exists">{{ btnText }}</button><br>
    <Transition>
        <p v-if="exists">Hello World!</p>
    </Transition>
</template>

<script>
export default {
    data() {
        return {
            exists: false
        }
    },
    computed: {
        btnText() {
            if (this.exists) {
                return 'Remove';
            }
            else {
                return 'Add';
            }
        }
    }
}
</script>

<style>
.v-enter-from {
    opacity: 0;
    translate: -100px 0;
}

.v-enter-to {
    opacity: 1;
    translate: 0 0;
}

.v-leave-from {
    opacity: 1;
    translate: 0 0;
}

.v-leave-to {
    opacity: 0;
    translate: 100px 0;
}

p {
    background-color: lightgreen;
    display: inline-block;
    padding: 10px;
    transition: all 0.5s;
}
</style>