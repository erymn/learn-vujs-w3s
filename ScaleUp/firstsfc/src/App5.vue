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

    <!--Scope Slot Static Data-->
    <scoped-slot-static-data v-slot="dataFromSlot">
        <h5>{{ dataFromSlot.staticText }}</h5>
        <p class="greenP">{{ dataFromSlot.dynamicText }}</p>
    </scoped-slot-static-data>

    <!--Scoped Slot Named-->
    <h1>Named Scoped Slots</h1>
    <p>Named scoped slots "leftSlot" and "rightSlot" send different data to App.vue from the SlotComp.vue component.
    </p>
    <hr>
    <scoped-slot-named #leftSlot="leftProps">
        <div class="app_div">{{ leftProps.text }}</div>
    </scoped-slot-named>
    <scoped-slot-named #rightSlot="rightProps">
        <div class="app_div">{{ rightProps.text }}</div>
    </scoped-slot-named>
    <br />
    <h8>Atau memakai mekanisme template tag</h8>
    <scoped-slot-named>
        <template v-slot:leftSlot="leftProps">
            <div class="app_div">{{ leftProps.text }}</div>
        </template>
        <template v-slot:rightSlot="rightProps">
            <div class="app_div">{{ rightProps.text }}</div>
        </template>
    </scoped-slot-named>
</template>

<script>
</script>

<style>
#app {
    width: 300px;
}

h2,
h5,
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

.app_div {
    display: inline-block;
    background-color: lightgreen;
    width: 100px;
    padding: 10px;
    margin: 10px;
}
</style>