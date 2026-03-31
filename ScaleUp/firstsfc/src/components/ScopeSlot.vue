<template>
    <!--Send data from component (ScopeSlot.vue) to App5.vue-->
    <slot v-bind:lclData="Data"></slot>
</template>
<script>
export default {
    data() {
        return {
            Data: 'This is local data (lclData)'
        }
    }
}
</script>
<style></style>