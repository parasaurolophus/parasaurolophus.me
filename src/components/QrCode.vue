<!-- Copyright (c) Kirk Rader 2026 -->

<template>
    <div class="qr">
        <div ref="svg" class="svg"></div>
        <span v-if="label">{{ label }}</span>
    </div>
</template>

<style scoped>
.qr {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

.svg {
    width: 64px;
    height: 64px;
}
</style>

<script setup>
import { onMounted, useTemplateRef } from 'vue'
import { encodeQR } from 'qr'

const { label, text } = defineProps({

    label: {
        type: String,
        default: null,
    },

    text: {
        type: String,
        required: true,
    },
})

const svg = useTemplateRef('svg')

function updateSvg() {

    svg.value.innerHTML = encodeQR(text, 'svg')
}

onMounted(updateSvg)
</script>