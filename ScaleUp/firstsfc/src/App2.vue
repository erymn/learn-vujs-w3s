<template>
    <h3>Todo List</h3>
    <ul>
        <todo-item v-for="x in items" :key="x" :item-name="x" style="background-color: lightgreen;" />
    </ul>
    <input v-model="newItem" />
    <button @click="addItem">Tambah</button>
</template>

<script>
export default {
    data() {
        return {
            newItem: '',
            items: ['Beli Susu', 'Makan Nasi Goreng', 'Belajar Vue']
        }
    },
    methods: {
        addItem() {
            this.items.push(this.newItem)
            this.newItem = ''
        }
    }
}
</script>
<style>
ul {
    width: 150px;
    list-style-type: none;
    padding-left: 10px;
}
</style>