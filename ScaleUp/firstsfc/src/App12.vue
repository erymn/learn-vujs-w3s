<template>
    <p>Choose what part of this page want to see</p>
    <router-link to="/sampleanim">Sample Animation</router-link>&nbsp;
    <router-link to="/basiccssanim">Basic CSS Animation</router-link>&nbsp;
    <router-link to="/vuetransition">Transition Comp</router-link>&nbsp;
    <router-link to="/transitionnameprop">Transition Name Prop</router-link>
    <div>
        <router-view></router-view>
    </div>
</template>