import { createApp } from "vue";
import App from './App.vue'
import App2 from './App2.vue'
import App3 from './AppSlot.vue'
import App4 from "./App4.vue";
import App5 from "./App5.vue";
import App6 from "./App6.vue";

import FoodItem from './components/FoodItem.vue'
import FoodItemData from "./components/FoodItemData.vue";
import TodoItem from "./components/TodoItem.vue";
import CompOne from "./components/CompOne.vue";
import CompTwo from "./components/CompTwo.vue";
import SlotComp from "./components/SlotComp.vue";
import SlotCard from "./components/SlotCard.vue";
import SlotName from "./components/SlotName.vue";

import ScopeSlot from "./components/ScopeSlot.vue";
import ScopeSlotArray from "./components/ScopeSlotArray.vue";
import ScopeSlotArrayObject from "./components/ScopedSlotArrayObject.vue";
import ScopedSlotStaticData from "./components/ScopedSlotStaticData.vue";
import ScopedSlotNamed from "./components/ScopedSlotNamed.vue";
import VueTeleport from "./components/VueTeleport.vue";

import App7 from "./App7.vue";
import FromApiRandom from "./components/httpcomp/FromApiRandom.vue";
import UsingAxiosLib from "./components/httpcomp/UsingAxiosLib.vue";

import App8 from "./App8.vue";
import refsample01 from "./components/refattr/refsample01.vue";
import refsample02 from "./components/refattr/refsample02.vue";
import RefInput from "./components/refattr/refInput.vue";
import refWithvfor from "./components/refattr/refWithvfor.vue";

import App9 from "./App9.vue";
import BefCreCompOne01 from "./components/vuehooks/BefCreCompOne01.vue";

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

// //--------Scope Slot----------
// const app5 = createApp(App5)
// app5.component('scope-slot', ScopeSlot)
// app5.component('scope-slot-array', ScopeSlotArray)
// app5.component('scope-slot-array-object', ScopeSlotArrayObject)
// app5.component('scoped-slot-static-data', ScopedSlotStaticData)
// app5.component('scoped-slot-named', ScopedSlotNamed)
// app5.mount('#app')
// //--------Scope Slot----------

// //-------Dynamic Component-------
// const app6 = createApp(App6)
// app6.component('comp-one', CompOne)
// app6.component('comp-two', CompTwo)
// app6.component("vue-teleport", VueTeleport)
// app6.mount('#app')
// //-------Dynamic Component-------

// //-----------HTTP Request--------------
// const app7 = createApp(App7)
// app7.component('from-api-random', FromApiRandom)
// app7.component('using-axios-lib', UsingAxiosLib)
// app7.mount('#app')
// //-----------HTTP Request--------------

// //--------Ref Attributes---------
// const app8 = createApp(App8)
// app8.component('ref-sample-01', refsample01)
// app8.component('ref-sample-02', refsample02)
// app8.component('ref-input', RefInput)
// app8.component('ref-with-vfor', refWithvfor)
// app8.mount('#app')
// //--------Ref Attributes---------

//-----------Vue Hooks---------------
const app9 = createApp(App9)
app9.component('befcre-comp-one', BefCreCompOne01)
app9.mount('#app')
//-----------Vue Hooks---------------

//createApp(App).mount('#app')

// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
