<template>
    <h2>Component</h2>
    <p>This is the component</p>
    <p ref="pEl" id="pEl">We try to access this text from the 'beforeMount' hook.</p>
</template>

<script>
export default {
    beforeMount() {
        console.log("beforeMount: This is just before the component is mounted.");
        this.$refs.pEl.innerHTML = "Hello World!"; // <-- We cannot reach the 'pEl' DOM element at this stage 
    }
}
</script>