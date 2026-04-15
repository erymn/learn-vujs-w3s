<template>
    <h1>Add/Remove '&lt;p&gt;' Tag</h1>
    <p>We can also use the v-enter-active and v-leave-active to set styling or animation during adding or during removal
        of an element</p>
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
.v-enter-active {
    background-color: lightgreen;
    animation: added 1s;
}

.v-leave-active {
    background-color: lightcoral;
    animation: added 1s reverse;
}

@keyframes added {
    from {
        opacity: 0;
        translate: -100px 0;
    }

    to {
        opacity: 1;
        translate: 0 0;
    }
}

p {
    display: inline-block;
    padding: 10px;
    border: dashed black 1px;
}
</style>