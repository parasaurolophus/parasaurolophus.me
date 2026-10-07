<!-- Copyright (c) Kirk Rader 2026 -->

<template>
    <svg :width="24 * scale" :height="24 * scale" class="button">
        <path :d="path" />
    </svg>
</template>

<style scoped>
.button {
    cursor: pointer;
}

svg path {
    stroke: rgb(from currentColor r g b / 0.5);
    fill: currentColor;
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