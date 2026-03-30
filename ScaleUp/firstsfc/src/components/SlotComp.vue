<template>
    <div>
        <!-- Slot akan mengambil alih string dari parent App2.vue -->
        <slot>
            <p>SlotComp.vue (Child file) -> default value</p>
        </slot>
    </div>
</template>


<style scoped>
div {
    background-color: lightgreen;
}
</style>