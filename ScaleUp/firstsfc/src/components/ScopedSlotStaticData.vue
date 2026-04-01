<template>
    <slot staticText="Ini adalah teks statis" :dynamicText="text"></slot>
</template>

<script>
export default {
    data() {
        return {
            text: 'Ini adalah teks dinamis'
        }
    }
}
</script>