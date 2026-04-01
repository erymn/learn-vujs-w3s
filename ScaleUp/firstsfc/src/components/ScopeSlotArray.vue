<template>
    <slot v-for="x in foods" :key="x" :foodName="x">

    </slot>
</template>
<script>
export default {
    data() {
        return {
            foods: ['Pizza', 'Burger', 'Sushi', 'Salad']
        }
    }
}
</script>