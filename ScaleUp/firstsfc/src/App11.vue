<template>
    <p>Choose what part of this page want to see</p>
    <router-link to="/foodkinds">Food Kinds</router-link>
    <router-link to="/foodabout">Food About</router-link>
    <router-link to="/animal">Animal</router-link>
    <router-link to="/roform">ReadOnly Form</router-link>
    <router-link to="/varform">Various Form</router-link>
    <router-link to="/colorform">Color Form</router-link>
    <div>
        <router-view></router-view>
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
a {
    display: inline-block;
    background-color: black;
    border: solid 1px black;
    color: white;
    padding: 5px;
    margin: 10px;
}

a:hover,
a.router-link-active {
    background-color: rgb(110, 79, 13);
}

div {
    border: dashed black 1px;
    padding: 20px;
    margin: 10px;
    display: inline-block;
}
</style>