<template>
    <br />
    <h3>Named slot(s)</h3>
    <p>The component has two &lt;div&gt; tags with one &lt;slot&gt; in each.</p>
    <slot-name v-slot:bottomSlot>
        'Hello from bottomSlot'
    </slot-name>
    <slot-name v-slot:default>
        'Hello from default bottomSlot'
    </slot-name>

    <h1>v-slot in (template)</h1>
    <p>The component has two div tags with one slot in each</p>
    <slot-name>
        <template v-slot:bottomSlot>
            <h4>To the bottom slot</h4>
            <p>This p tag and the h5 tag above are directed to the bottom slot with the v-slot directive used on the
                template tag.</p>
        </template>
        <p>this goes to default slot</p>
    </slot-name>
</template>

<script></script>

<style>
#app {
    width: 300px;
}
</style>