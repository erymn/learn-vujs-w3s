import { createApp } from "vue";
import App from './App.vue'
import App2 from './App2.vue'

import FoodItem from './components/FoodItem.vue'
import FoodItemData from "./components/FoodItemData.vue";
import TodoItem from "./components/TodoItem.vue";
import CompOne from "./components/CompOne.vue";
import CompTwo from "./components/CompTwo.vue";

// const app = createApp(App)
// app.component('food-item', FoodItem)
// app.component('food-item-data', FoodItemData)
// app.mount('#app')

const app2 = createApp(App2)
app2.component('todo-item', TodoItem)
app2.component('comp-one', CompOne)
app2.component('comp-two', CompTwo)

app2.mount('#app')

//createApp(App).mount('#app')

// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
