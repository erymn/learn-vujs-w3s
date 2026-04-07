<template>
    <h1>Dynamic Component</h1>
    <p>App.vue switches between which component to show.</p>
    <button @click="toggleValue = !toggleValue">Switch component</button>
    <!--Digunakan untuk simpan state ketika terjadi perpindahan komponen-->
    <!-- <KeepAlive exclude="CompTwo" include="CompOne"> -->
    <!-- <KeepAlive include="CompOne,CompTwo"> -->
    <KeepAlive :max="1">
        <component :is="activeComp"></component>
    </KeepAlive>
</template>

<script>
export default {
    data() {
        return {
            toggleValue: false
        }
    },
    computed: {
        activeComp() {
            return this.toggleValue ? 'comp-one' : 'comp-two'
        }
    }
}
</script>