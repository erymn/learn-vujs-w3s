<template>
    <div>
        <button @click="fetchData">Fetch Data</button>
        <p v-if="data">{{ data }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: null
        };
    },
    methods: {
        async fetchData() {
            const response = await fetch("./src/assets/file.txt")
            this.data = await response.text();
        }
    }
}
</script>