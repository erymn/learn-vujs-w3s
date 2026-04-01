<template>
    <!--Receive data from scope-slot tag-->
    <scope-slot v-slot="dataFromSlot">
        <h5>this data from ScopeSlot.vue, the value '{{ dataFromSlot.lclData }}'</h5>
    </scope-slot>

    <!--Scoped Array-->
    <scope-slot-array v-slot="dataFromSlot">
        <h5>this data from ScopeSlotArray.vue, the value '{{ dataFromSlot.foodName }}'</h5>
    </scope-slot-array>

    <!--Scoped Array Object-->
    <scope-slot-array-object v-slot="dataFromSlot">
        <hr>
        <h2>{{ dataFromSlot.foodName }}<img :src=dataFromSlot.foodUrl></h2>
        <p class="greenP">{{ dataFromSlot.foodDesc }}</p>
    </scope-slot-array-object>
</template>

<script>

</script>

<style>
#app {
    width: 300px;
}

h2,
.greenP {
    background-color: lightgreen;
    padding: 10px;
    margin: 0;
}

img {
    float: right;
    height: 70px;
    margin-left: 10px;
}
</style>