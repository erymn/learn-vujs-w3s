<template>
    <h4>Input File Type</h4>
    <form @submit.prevent="registerAnswer">
        <label>Choose a file:
            <!--Karena v-bind adalah 2 way binding, jadi dari model base diubah menjadi @change-->
            <input @change="updateVal" type="file">
        </label>
        <button type="submit">Submit</button>
    </form>
    <div>
        <h5>Submitted answer:</h5>
        <p id="pAnswer">{{ fileName }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fileName: 'Not Submitted yet',
            fileInp: null
        }
    },
    methods: {
        registerAnswer() {
            if (this.fileInp) {
                this.fileName = this.fileInp
            }
        },
        updateVal(e) {
            console.log(e)
            this.fileInp = e.target.value
        }
    }
}
</script>

<style>
div {
    border: dashed black 1px;
    border-radius: 10px;
    padding: 0 20px 20px 20px;
    margin-top: 20px;
    display: inline-block;
}

button {
    margin: 10px;
    display: block;
}

#pAnswer {
    background-color: lightgreen;
    padding: 5px;
}
</style>