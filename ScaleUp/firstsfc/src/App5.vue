<template>
    <!--Receive data from scope-slot tag-->
    <scope-slot v-slot="dataFromSlot">
        <h5>this data from ScopeSlot.vue, the value '{{ dataFromSlot.lclData }}'</h5>
    </scope-slot>
</template>

<script>

</script>

<style></style>