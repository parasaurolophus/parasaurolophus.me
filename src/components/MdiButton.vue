<!-- Copyright (c) Kirk Rader 2026 -->

<template>
    <MdiIcon :scale="scale" :d="d" class="button" />
</template>

<style scoped>
.button {
    cursor: pointer;
}
</style>

<script setup>
import MdiIcon from './MdiIcon.vue'

const { d, scale } = defineProps({

    d: {
        type: String,
        required: true,
    },

    scale: {
        type: Number,
        default: 1,
    },
})
</script>