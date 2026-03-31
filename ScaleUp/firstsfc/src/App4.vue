<template>
    <br />
    <h3>Named slot(s)</h3>
    <p>The component has two &lt;div&gt; tags with one &lt;slot&gt; in each.</p>
    <slot-name v-slot:default>
        'Hello from default bottomSlot'
    </slot-name>
    <slot-name v-slot:bottomSlot>
        'Hello from bottomSlot'
    </slot-name>
</template>

<script></script>

<style>
#app {
    width: 300px;
}
</style>