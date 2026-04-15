<template>
    <div>
        <h2>Component</h2>
        <p>This is inside the component.</p>
        <Teleport to="body">
            <div id="redDiv">Hello! This is teleported.</div>
        </Teleport>
    </div>
</template>

<style scoped>
#redDiv {
    background-color: lightcoral;
    margin: 10px;
    padding: 10px;
    display: inline-block;
}
</style>