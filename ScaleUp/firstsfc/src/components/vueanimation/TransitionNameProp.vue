<template>
    <h1>Add/Remove &lt;p&gt; Tag</h1>
    <p>The second transition in this example has the <mark>name prop "swirl"</mark>, so that we can keep the transitions
        apart with
        different class names.</p>
    <hr>
    <button @click="this.p1Exists = !this.p1Exists">{{ btn1Text }}</button><br>
    <Transition>
        <p v-if="p1Exists" id="p1">Hello World Existing!</p>
    </Transition>
    <hr>
    <button @click="this.p2Exists = !this.p2Exists">{{ btn2Text }}</button><br>
    <Transition name="swirl">
        <p v-if="p2Exists" id="p2">Hello World Swirl!</p>
    </Transition>
</template>

<script>
export default {
    data() {
        return {
            p1Exists: false,
            p2Exists: false
        }
    },
    computed: {
        btn1Text() {
            if (this.p1Exists) {
                return 'Remove';
            }
            else {
                return 'Add';
            }
        },
        btn2Text() {
            if (this.p2Exists) {
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

.swirl-enter-active {
    animation: swirlAdded 1s;
}

.swirl-leave-active {
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

#p1,
#p2 {
    display: inline-block;
    padding: 10px;
    border: dashed black 1px;
}

#p2 {
    background-color: lightcoral;
}
</style>