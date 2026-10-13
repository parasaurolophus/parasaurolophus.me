<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <textarea v-model="text" cols="40" rows="15"></textarea>
    <div ref="svg" class="qr"></div>
</template>

<style scoped>
.qr {
    width: 128px;
    height: 128px;
    margin-top: 1rex;
}
</style>

<script setup>
import { onMounted, ref, useTemplateRef, watch } from 'vue'
import { encodeQR } from 'qr'

const svg = useTemplateRef('svg')

const text = ref(`BEGIN:VCARD
VERSION:4.0
KIND:individual
N:;parasaurolophus;;;
EMAIL:info@parasaurolophus.art
URL:https://www.parasaurolophus.art
URL:https://github.com/parasaurolophus
URL:https://hyperfollow.com/kirkrader
END:VCARD`)

function updateQR() {

    svg.value.innerHTML = encodeQR(text.value, 'svg')
}

onMounted(updateQR)
watch(text, updateQR)
</script>