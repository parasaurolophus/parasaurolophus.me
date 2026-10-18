<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <div>
        <div>
            <textarea v-model="source"></textarea>
        </div>
        <div ref="rendered"></div>
    </div>
</template>

<script setup>
import { onMounted, ref, useTemplateRef, watch } from 'vue'

const rendered = useTemplateRef('rendered')
const source = ref(`<math display="block">
    <mn>2</mn>
    <mo>+</mo>
    <mn>2</mn>
    <mo>=</mo>
    <mn>4</mn>
</math>`)

function updateMathML() {

    rendered.value.innerHTML = source.value
}

onMounted(updateMathML)
watch(source, updateMathML)
</script>