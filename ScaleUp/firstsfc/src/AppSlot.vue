<template>
    <!-- <div>
        <h3>Slot in Vue</h3>
        <p>Send 'Hello World' as content ke slot tag inside component</p>
        <slot-comp>Hello World from Parent 'App3.vue'</slot-comp>
    </div> -->

    <br />
    <h3>Slot in Card</h3>
    <p>We create card like div box from the food array</p>
    <div id="wrapper">
        <slot-card v-for="x in foods">
            <img v-bind:src="x.url" />
            <h4>{{ x.name }}</h4>
            <p>{{ x.desc }}</p>
        </slot-card>
    </div>

    <br />
    <h3>Slots Fallback Content</h3>
    <p>A component without content provided can have fallback content in the slot tag.</p>
    <slot-comp></slot-comp>
    <slot-comp>
        <p>Hello World from Parent 'App3.vue'</p>
    </slot-comp>
</template>

<script>
import SlotComp from './components/SlotComp.vue';

export default {
    data() {
        return {
            foods: [
                { name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.', url: './assets/img_apple.svg' },
                { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', url: './assets/img_pizza.svg' },
                { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', url: './assets/img_rice.svg' },
                { name: 'Fish', desc: 'Fish is an animal that lives in water.', url: './assets/img_fish.svg' },
                { name: 'Cake', desc: 'Cake is something sweet that tates good but is not consodered healthy.', url: './assets/img_cake.svg' }
            ]
        }
    }
}
</script>

<style>
p {
    width: 250px;
}

#app div {
    border: dashed black 1px;
    margin: 10px;
    padding: 10px;
    display: inline-block;
}

#wrapper {
    display: flex;
    flex-wrap: wrap;
}

#wrapper img {
    display: block;
    margin: auto;
    width: 60%;
}
</style>