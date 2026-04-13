<template>
    <h1>Vue Hook Example</h1>

    <h4>The 'beforeCreate' Lifecycle Hook</h4>
    <p>We can see the console.log() message from 'beforeCreate' lifecycle hook, but there is no effect from the text
        change we try to do to the Vue data property, because the Vue data property is not created yet.</p>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
    <div>
        <befcre-comp-one v-if="activeComp"></befcre-comp-one>
    </div>

    <hr />
    <h4>The 'created' Lifecycle Hook</h4>
    <p>We can see the console.log() message from 'created' lifecycle hook, and the text change we try to do to the Vue
        data property has an effect, because the Vue data property is created at this stage.</p>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
    <div>
        <cre-comp-one v-if="activeComp"></cre-comp-one>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeComp: true
        }
    }
}
</script>

<style>
#app>div {
    border: dashed black 1px;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    background-color: lightgreen;
}

#pResult {
    background-color: lightcoral;
    display: inline-block;
}
</style>