<template>
    <div>
        <p>SlotComp.vue (Child file)</p>

        <!-- Slot akan mengambil alih string dari parent App2.vue -->
        <slot></slot>
    </div>
</template>


<style scoped>
div {
    background-color: lightgreen;
}
</style>