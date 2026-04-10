<template>
    <h4>ref attribute samples</h4>
    <p>Click the button to put "Hello!" as the text in the green p element.</p>
    <button @click="changeVal">Change Text</button><br>
    <p ref="p1">Ini adalah teks asli dari html sebelum diubah</p>
</template>

<script>
export default {
    methods: {
        changeVal() {
            const nextText = "Hello! Ini adalah teks perubahannya.";
            this.$refs.p1.innerHTML = nextText;
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