<template>
    <h4>Using "Axios" library</h4>
    <p>Click the button to fetch data with an HTTP request.</p>
    <p>Each click generates an object with a random user from <a href="https://jsonplaceholder.typicode.com/users"
            target="_blank">https://jsonplaceholder.typicode.com/users</a>.</p>
    <p>The robot avatars are lovingly delivered by <a href="http://Robohash.org" target="_blank">RoboHash</a>.</p>
    <button @click="fetchData">Fetch Data</button>
    <div v-if="data" id="dataDiv">
        <p>{{ data.data[0].name }}</p>
        <p>{{ data.data[0].email }}</p>
        <p>{{ data.data[0].address.city }}</p>
        <p>{{ data.data[0].company.name }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            data: null
        }
    },
    methods: {
        async fetchData() {
            this.data = await axios.get("https://jsonplaceholder.typicode.com/users")
        }
    }
}
</script>