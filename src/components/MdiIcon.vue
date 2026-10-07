<!-- Copyright (c) Kirk Rader 2026 -->

<template>
    <svg :width="24 * scale" :height="24 * scale">
        <path :d="path" />
    </svg>
</template>

<style scoped>
svg path {
    stroke: rgb(from currentColor r g b / 0.5);
}
</style>

<script setup>
const { path } = defineProps({

    path: {
        type: String,
        required: true,
    },

    scale: {
        type: Number,
        default: 1,
    },
})
</script>