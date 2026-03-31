import { createApp } from "vue";
import App from './App.vue'
import App2 from './App2.vue'
import App3 from './AppSlot.vue'
import App4 from "./App4.vue";
import App5 from "./App5.vue";

import FoodItem from './components/FoodItem.vue'
import FoodItemData from "./components/FoodItemData.vue";
import TodoItem from "./components/TodoItem.vue";
import CompOne from "./components/CompOne.vue";
import CompTwo from "./components/CompTwo.vue";
import SlotComp from "./components/SlotComp.vue";
import SlotCard from "./components/SlotCard.vue";
import SlotName from "./components/SlotName.vue";

import ScopeSlot from "./components/ScopeSlot.vue";

// const app = createApp(App)
// app.component('food-item', FoodItem)
// app.component('food-item-data', FoodItemData)
// app.mount('#app')

// const app2 = createApp(App2)
// app2.component('todo-item', TodoItem)

// // removed from global component to local component in App.vue
// // app2.component('comp-one', CompOne)

// app2.component('comp-two', CompTwo)
// app2.component('slot-comp', SlotComp)

// app2.mount('#app')

//// Handle Slot Application
// const app3 = createApp(App3)
// app3.component('slot-comp', SlotComp)
// app3.component('slot-card', SlotCard)
// app3.component('slot-name', SlotName)
// app3.mount('#app')

////Named Slot
// const app4 = createApp(App4)
// app4.component('slot-name', SlotName)
// app4.mount('#app')

//--------Scope Slot----------
const app5 = createApp(App5)
app5.component('scope-slot', ScopeSlot)
app5.mount('#app')
//--------Scope Slot----------


//createApp(App).mount('#app')

// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
