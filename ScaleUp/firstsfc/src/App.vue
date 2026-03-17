
<template>
  <h1>Hello World!</h1>
  <h2>{{ message }}</h2>

  <div id="wrapper">
  <food-item food-name="Apel" food-desc="Apel adalah buah yang tumbuh di pohon" v-bind:is-favorite="true"/>
  <!-- <food-item food-name="Jeruk" food-desc="Jeruk adalah buah yang tumbuh di pohon" v-bind:is-favorite="true"/> -->
  <food-item food-name="Jeruk" v-bind:is-favorite="true"/>
  <food-item food-name="Kesemek" food-desc="Kesemek adalah buah yang tumbuh di pohon" v-bind:is-favorite="false"/>
</div>
</template>
<style></style>
<script>
  export default {
    data() {
      return {
        message: 'This is some text'
      }
    }
  }
</script>

<style>
  #app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }

  #app > div:hover {
    cursor: pointer;
  }

  #wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  #wrapper > div {
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
