<!-- Copyright (c) Kirk Rader 2026 -->

<template>
    <div class="qr">
        <div ref="svg" :class="size"></div>
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

.small {
    width: 32px;
    height: 32px;
}

.medium {
    width: 64px;
    height: 64px;
}

.large {
    width: 128px;
    height: 128px;
}
</style>

<script setup>
import { onMounted, useTemplateRef, watch } from 'vue'
import { encodeQR } from 'qr'

const { label, size } = defineProps({

    label: {
        type: String,
        default: null,
    },

    size: {
        type: String,
        default: 'medium',
    },
})

const svg = useTemplateRef('svg')
const text = defineModel()

function updateSvg() {

    svg.value.innerHTML = encodeQR(text.value, 'svg')
}

onMounted(updateSvg)
watch(text, updateSvg)
</script>