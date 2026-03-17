<template>
  <h1>Hello World!</h1>
  <h2>{{ message }}</h2>

  <div id="wrapper">
    <food-item food-name="Apel" food-desc="Apel adalah buah yang tumbuh di pohon" v-bind:is-favorite="true" />
    <!-- <food-item food-name="Jeruk" food-desc="Jeruk adalah buah yang tumbuh di pohon" v-bind:is-favorite="true"/> -->
    <food-item food-name="Jeruk" v-bind:is-favorite="true" />
    <food-item food-name="Kesemek" food-desc="Kesemek adalah buah yang tumbuh di pohon" v-bind:is-favorite="false" />
  </div>

  <br />
  <h2>Food</h2>
  <p>Components created with v-for based on an array</p>
  <div id="wrapper">
    <food-item v-for="x in foods" v-bind:food-name="x"></food-item>
  </div>

  <br />
  <h2>Food</h2>
  <p>Food items are generated with v-for from the 'foods' array (use :key as unique id)</p>
  <div id="wrapper">
    <food-item-data v-for="x in foodObjs" :food-name="x.name" :food-desc="x.desc" :is-favorite="x.favorite"
      :key="x.name"></food-item-data>
    <button @click="removeItem">Remove Item</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'This is some text',
      foods: ['Apel', 'Jengkol', 'Pete', 'Anggur', 'Kesemek', 'Juwet'],
      foodObjs: [
        {
          name: 'Apples',
          desc: 'Apples are a type of fruit that grow on trees.',
          favorite: true
        },
        {
          name: 'Pizza',
          desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.',
          favorite: false
        },
        {
          name: 'Rice',
          desc: 'Rice is a type of grain that people like to eat.',
          favorite: false
        },
        {
          name: 'Fish',
          desc: 'Fish is an animal that lives in water.',
          favorite: true
        },
        {
          name: 'Cake',
          desc: 'Cake is something sweet that tastes good.',
          favorite: false
        }
      ]
    }
  },
  methods: {
    removeItem() {
      this.foodObjs.splice(1, 1)
    }
  }
}
</script>

<style>
#app>div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}

#app>div:hover {
  cursor: pointer;
}

#wrapper {
  display: flex;
  flex-wrap: wrap;
}

#wrapper>div {
  border: dashed black 1px;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
</style>

<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
