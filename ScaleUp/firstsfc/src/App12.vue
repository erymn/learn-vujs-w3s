<template>
    <p>Choose what part of this page want to see</p>
    <router-link to="/sampleanim">Sample Animation</router-link>&nbsp;
    <router-link to="/basiccssanim">Basic CSS Animation</router-link>&nbsp;
    <router-link to="/vuetransition">Transition Comp</router-link>&nbsp;
    <router-link to="/transitionnameprop">Transition Name Prop</router-link>&nbsp;
    <router-link to="/jstranshook">JS Transition Hook</router-link>&nbsp;
    <router-link to="/appearpop">The Appear Pop</router-link>&nbsp;
    <router-link to="/transbetweenelem">Transition Between Elements</router-link>&nbsp;
    <router-link to="/inoutmode">In Out Mode</router-link>&nbsp;
    <router-link to="/dynamiccomp">Dynamic Comp</router-link>&nbsp;
    <router-link to="/transitiongroup">Transition Group</router-link>&nbsp;
    <router-link to="/addremovewithvmove">Add Remove With VMove</router-link>
    <div>
        <router-view></router-view>
    </div>
</template>