<template>
    <h4>$ref input sampel</h4>
    <p>Start writing inside the input element, and the text will be copied into the last paragraph by the use of the
        '$refs' object.</p>
    <input ref="inputEl" @input="getRefs" placeholder="Write something..">
    <p ref="pEl"></p>
</template>

<script>
export default {
    methods: {
        getRefs() {
            this.$refs.pEl.innerHTML = this.$refs.inputEl.value;
        }
    }
}
</script>
