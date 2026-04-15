import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from './App.vue'
import App2 from './App2.vue'
import App3 from './AppSlot.vue'
import App4 from "./App4.vue";
import App5 from "./App5.vue";
import App6 from "./App6.vue";

import FoodItem from './components/basiclearn/FoodItem.vue'
import FoodItemData from "./components/basiclearn/FoodItemData.vue";
import TodoItem from "./components/basiclearn/TodoItem.vue";
import CompOne from "./components/basiclearn/CompOne.vue";
import CompTwo from "./components/basiclearn/CompTwo.vue";
import SlotComp from "./components/basiclearn/SlotComp.vue";
import SlotCard from "./components/basiclearn/SlotCard.vue";
import SlotName from "./components/basiclearn/SlotName.vue";

import ScopeSlot from "./components/basiclearn/ScopeSlot.vue";
import ScopeSlotArray from "./components/basiclearn/ScopeSlotArray.vue";
import ScopeSlotArrayObject from "./components/basiclearn/ScopedSlotArrayObject.vue";
import ScopedSlotStaticData from "./components/basiclearn/ScopedSlotStaticData.vue";
import ScopedSlotNamed from "./components/basiclearn/ScopedSlotNamed.vue";
import VueTeleport from "./components/basiclearn/VueTeleport.vue";

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
import CreCompOne02 from "./components/vuehooks/CreCompOne02.vue";
import BefMouCompOne03 from "./components/vuehooks/BefMouCompOne03.vue";
import MouCompOne04 from "./components/vuehooks/MouCompOne04.vue";
import MouCompOne041 from "./components/vuehooks/MouCompOne041.vue";
import BefUpdCompOne05 from "./components/vuehooks/BefUpdCompOne05.vue";
import ErrCaptureCompOneX01 from "./components/vuehooks/ErrCaptureCompOneX01.vue";
import RenTrackTriggeredComOneDevMode from "./components/vuehooks/RenTrackTriggeredComOneDevMode.vue";
import ActivateDeactivateCompOne06 from "./components/vuehooks/ActivateDeactivateCompOne06.vue";
import JoiningHookAtVue from "./components/vuehooks/JoiningHookAtVue.vue";

import App10 from "./App10.vue";

import App11 from "./App11.vue";
import FoodKinds from "./components/provideinject/FoodKinds.vue";
import FoodAbout from "./components/provideinject/FoodAbout.vue";
import Animal from "./components/routingpage/animalcollection.vue";
import ReadOnlyFormInput from "./components/forminputadv/ReadOnlyFormInput.vue";
import VariousFormInput from "./components/forminputadv/VariousFormInput.vue";
import ColorFormInput from "./components/forminputadv/ColorFormInput.vue";

import App12 from "./App12.vue"
import SampleCssAnimation from "./components/vueanimation/SampleCssAnimation.vue";  
import BasicCssAnimation from "./components/vueanimation/BasicCssAnimation.vue";
import TheTransitionComp from "./components/vueanimation/TheTransitionComp.vue";
import TransitionNameProp from "./components/vueanimation/TransitionNameProp.vue";

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

// //-----------Vue Hooks---------------
// const app9 = createApp(App9)
// // app9.component('befcre-comp-one', BefCreCompOne01)
// // app9.component('cre-comp-one', CreCompOne02)
// // app9.component('befmou-comp-one', BefMouCompOne03)
// // app9.component('mou-comp-one', MouCompOne04)
// // app9.component('mou-comp-one-041', MouCompOne041)
// // app9.component('befupd-comp-one', BefUpdCompOne05)
// app9.component('errcapture-comp-one', ErrCaptureCompOneX01)
// app9.component('ren-track-triggered-com-one', RenTrackTriggeredComOneDevMode)
// app9.component('activate-deactivate-comp-one', ActivateDeactivateCompOne06)
// app9.component('joining-hook-at-vue', JoiningHookAtVue)
// app9.mount('#app')
// //-----------Vue Hooks---------------

// //-------------Vue Provide/Inject-----------------
// const app10 = createApp(App10)
// app10.component('food-kinds', FoodKinds)
// app10.component('food-about', FoodAbout)
// app10.mount('#app')
// //-------------Vue Provide/Inject-----------------

//createApp(App).mount('#app')

// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// //-----------Using Vue Router-----------
// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         {
//             path: '/foodkinds',
//             name: 'Food Kinds',
//             component: FoodKinds
//         },
//         {
//             path: '/foodabout',
//             name: 'About Food',
//             component: FoodAbout
//         },
//         {
//             path: '/animal',
//             name: 'Animal',
//             component: Animal
//         },
//         {
//             path: '/roform',
//             name: 'ReadOnly Form',
//             component: ReadOnlyFormInput
//         },
//         {
//             path: '/varform',
//             name: 'Various Form',
//             component: VariousFormInput
//         },
//         {
//             path: '/colorform',
//             name: 'Color Form',
//             component: ColorFormInput
//         }
//     ]
// })

// const app11 = createApp(App11)
// app11.use(router)
// app11.mount('#app')
// //-----------Using Vue Router-----------

// //-----------Vue Animation-----------
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/sampleanim',
            name: 'Sample CSS Animation',
            component: SampleCssAnimation
        },
        {
            path: '/basiccssanim',
            name: 'Basic CSS Animation',
            component: BasicCssAnimation
        },
        {
            path: '/vuetransition',
            name: 'Transition Comp',
            component: TheTransitionComp
        },
        {
            path: '/transitionnameprop',
            name: 'Transition Name Prop',
            component: TransitionNameProp
        },
        // {
        //     path: '/varform',
        //     name: 'Various Form',
        //     component: VariousFormInput
        // },
        // {
        //     path: '/colorform',
        //     name: 'Color Form',
        //     component: ColorFormInput
        // }
    ]
})

const app12 = createApp(App12)
app12.use(router)
app12.mount('#app')
// //-----------Vue Animation-----------