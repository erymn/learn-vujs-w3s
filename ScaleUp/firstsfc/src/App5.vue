<template>
    <!--Receive data from scope-slot tag-->
    <scope-slot v-slot="dataFromSlot">
        <h5>this data from ScopeSlot.vue, the value '{{ dataFromSlot.lclData }}'</h5>
    </scope-slot>

    <!--Scoped Array-->
    <scope-slot-array v-slot="dataFromSlot">
        <h5>this data from ScopeSlotArray.vue, the value '{{ dataFromSlot.foodName }}'</h5>
    </scope-slot-array>
</template>

<script>

</script>

<style></style>