<template>
    <scope-slot v-slot="dataFromSlot">
        <h5>this data from ScopeSlot.vue, the value '{{ dataFromSlot.lclData }}'</h5>
    </scope-slot>
</template>

<script>
import ScopeSlot from './components/ScopeSlot.vue';

</script>

<style></style>