<template>
    <h1>JavaScript Transition Hooks</h1>
    <p>This code hooks into "after-enter" so that after the initial animation is done, a method runs that displays a red
        div.</p>
    <button @click="pVisible = true">Create p-tag!</button><br>
    <Transition @after-enter="onAfterEnter">
        <p v-show="pVisible" id="p1">Hello World!</p>
    </Transition>
    <br>
    <div v-show="divVisible">This appears after the "enter-active" phase of the transition.</div>

    <h1>The 'enter-cancelled' Event</h1>
    <p>Click the toggle button again before the enter animation is finished to trigger the 'enter-cancelled' event.</p>
    <button @click="pVisible = !pVisible">Toggle</button><br>
    <Transition @enter-cancelled="onEnterCancelled">
        <p v-if="pVisible" id="p1">Hello World!</p>
    </Transition>
    <br>
    <div v-if="divVisible">You interrupted the "enter-active" transition.</div>
</template>

<script>
export default {
    data() {
        return {
            pVisible: false,
            divVisible: false
        }
    },
    methods: {
        onAfterEnter() {
            this.divVisible = true;
        },
        onEnterCancelled() {
            this.divVisible = true;
        }
    }
}
</script>

<style scoped>
.v-enter-active {
    animation: swirlAdded 1s;
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
div {
    display: inline-block;
    padding: 10px;
    border: dashed black 1px;
}

#p1 {
    background-color: lightgreen;
}

div {
    background-color: lightcoral;
}
</style>