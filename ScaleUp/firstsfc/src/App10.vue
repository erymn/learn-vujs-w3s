<template>
    <h1>Food</h1>
    <p>We use the 'provide' configuration option to make data available to other components</p>
    <div @click="this.activeComp = 'food-about'" class="divBtn">About</div>
    <div @click="this.activeComp = 'food-kinds'" class="divBtn">Kinds</div>
    <div id="divComp">
        <component :is="activeComp"></component>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeComp: 'food-kinds',
            foods: [
                { name: 'Pizza', imgUrl: 'src/assets/img_pizza.svg' },
                { name: 'Apple', imgUrl: 'src/assets/img_apple.svg' },
                { name: 'Cake', imgUrl: 'src/assets/img_cake.svg' },
                { name: 'Fish', imgUrl: 'src/assets/img_fish.svg' },
                { name: 'Rice', imgUrl: 'src/assets/img_rice.svg' }
            ],
            aboutFoodCat: 'Makanan ringan dan berat'
        }
    },
    provide() {
        return {
            foodKinds: this.foods,
            aboutFoodCat: this.aboutFoodCat
        }
    }
}
</script>

<style scoped>
.divBtn {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    background-color: white;
    border: solid 2px #04AA6D;
    border-radius: 10px;
    font-family: Verdana, sans-serif;
    color: black;
    padding: 10px;
    margin: 10px;
}

.divBtn:hover {
    background-color: #04AA6D;
    color: white;
    cursor: pointer;
}

#divComp {
    border: dashed black 1px;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    width: 400px;
}
</style>