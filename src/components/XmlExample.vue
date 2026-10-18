<!-- Copyright (c) Kirk Rader -->

<template>
    <details>
        <summary ref="source">
            <slot></slot>
        </summary>
        <highlightjs :code="xml" language="xml" @click.stop.prevent="copy" class="copyable" />
        <dialog ref="copied" popover closedby="any" @click.stop.prevent="closeDialog">
            Copied
        </dialog>
    </details>
</template>

<script setup>
import { inject, onMounted, ref, useTemplateRef, watch } from 'vue'
import xmlFormat from 'xml-formatter'

const copied = useTemplateRef('copied')
const mobile = inject('mobile')
const source = useTemplateRef('source')
const xml = ref('<fubar></fubar>')

function closeDialog() {

    copied.value.close()
}

function copy() {

    navigator.clipboard.writeText(xml.value)
        .then(() => copied.value.show())
        .catch(alert)
}

function updateXml() {

    xml.value = xmlFormat(source.value.innerHTML)
}

onMounted(updateXml)
watch(mobile, updateXml)
</script>