<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <div>
        <div class="buttons">
            <button v-for="preset of presets" :key="preset.title" @click="populatePreset(preset.text)">
                {{ preset.label }}
            </button>
        </div>
        <div>
            <textarea v-model="text" cols="40" rows="9" spellcheck="false" class="text"></textarea>
        </div>
        <div ref="svg" class="qr"></div>
    </div>
</template>

<style scoped>
button {
    margin: 0.25rem;
    color: var(--background-color);
    background-color: var(--foreground-color);
}

.buttons {
    display: flex;
}

.text {
    margin: 2rex 0 1rex 0;
}

.qr {
    width: 128px;
    height: 128px;
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

const presets = [
    {
        label: 'parasaurolophus',
        text: `BEGIN:VCARD
VERSION:4.0
KIND:individual
N:;parasaurolophus;;;
EMAIL:info@parasaurolophus.art
URL:https://www.parasaurolophus.art
URL:https://github.com/parasaurolophus
URL:https://hyperfollow.com/kirkrader
END:VCARD`,
    },
    {
        label: 'M²VP',
        text: `BEGIN:VCARD
VERSION:4.0
KIND:org
ORG;CHARSET=UTF-8:M²VP
EMAIL:info@m2vp.org
URL:https://m2vp.org
END:VCARD`,
    },
]

function populatePreset(txt) {

    text.value = txt
}

function updateQR() {

    svg.value.innerHTML = encodeQR(text.value, 'svg')
}

onMounted(updateQR)
watch(text, updateQR)
</script>