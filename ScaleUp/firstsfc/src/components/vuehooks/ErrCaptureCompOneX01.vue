<template>
    <h2>Component</h2>
    <p>This is the component</p>
    <button @click="generateError">Generate Error</button>
</template>

<script>
export default {
    methods: {
        generateError() {
            this.$refs.objEl.innerHTML = "hi";
        }
    }
}
</script>