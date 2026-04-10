<template>
    <h4>Copy from p1 to p2</h4>
    <p>Click the button to copy text from p1 to p2.</p>
    <button @click="changeVal">Transfer Text</button><br>
    <p ref="p1">Ini adalah teks asli dari html sebelum diubah</p>
    <p ref="p2">...</p>
</template>

<script>
export default {
    methods: {
        changeVal() {
            this.$refs.p2.innerHTML = this.$refs.p1.innerHTML
        }
    }
}
</script>

<style>
#p1 {
    background-color: lightgreen;
    display: inline-block;
}
</style>