<template>
    <div>
        <p>Try clicking the button more than once to see new animals picked randomly.</p>
        <button @click="fetchData">Fetch Data</button>
        <div v-if="randomMammal">
            <h2>{{ randomMammal.name }}</h2>
            <h4>Is Carnivour: {{ randomMammal.carnivore ? "Yes" : "No" }}</h4>
            <p>Max Weight: {{ randomMammal.maxWeight }} kg</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            //data: null
            randomMammal: null
        };
    },
    methods: {
        async fetchData() {
            const response = await fetch("/src/assets/bigLandMammals.json")
            const data = await response.json();

            const randIndex = Math.floor(Math.random() * data.results.length)
            this.randomMammal = data.results[randIndex]
        }
    }
}
</script>