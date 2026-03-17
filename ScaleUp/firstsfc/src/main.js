import { createApp } from "vue";
import App from './App.vue'

import FoodItem from './components/FoodItem.vue'
import FoodItemData from "./components/FoodItemData.vue";

const app = createApp(App)
app.component('food-item', FoodItem)
app.component('food-item-data', FoodItemData)
app.mount('#app')

//createApp(App).mount('#app')

// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
