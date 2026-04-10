<template>
    <p>Click the button to fetch data with an HTTP request.</p>
    <p>Each click generates an object with a random user from <a href="https://jsonplaceholder.typicode.com/todos"
            target="_blank">https://jsonplaceholder.typicode.com/todos</a>.</p>
    <p>The robot avatars are lovingly delivered by <a href="http://Robohash.org" target="_blank">RoboHash</a>.</p>
    <button @click="fetchData">Fetch Data</button>
    <pre v-if="data">{{ data }}</pre>
</template>

<script>
export default {
    data() {
        return {
            data: null
        }
    },
    methods: {
        async fetchData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")
            this.data = await response.json()
        }
    }
}
</script>