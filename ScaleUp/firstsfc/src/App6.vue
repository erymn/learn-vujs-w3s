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

    <br />
    <h2>Teleport Component</h2>
    <p>With &lt;teleport to="body"&gt; we move the red &lt;div&gt; from inside the component to the body tag.</p>
    <vue-teleport></vue-teleport>
</template>

<style>
#app {
    width: 350px;
    margin: 10px;
}

#app>div {
    border: solid black 2px;
    padding: 10px;
    margin-top: 10px;
    background-color: rgb(186, 228, 255);
}

h2 {
    text-decoration: underline;
}
</style>
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