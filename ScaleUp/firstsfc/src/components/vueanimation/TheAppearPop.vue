<template>
    <h1>The 'appear' Prop</h1>
    <p>The 'appear' prop starts the animation when the p tag below is rendered for the first time as the page opens.
        Without the 'appear' prop, this example would have had no animation.</p>
    <Transition appear>
        <p id="p1">Hello World!</p>
    </Transition>
</template>

<style>
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

#p1 {
    display: inline-block;
    padding: 10px;
    border: dashed black 1px;
    background-color: lightgreen;
}
</style>