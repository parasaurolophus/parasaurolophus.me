<!-- Copyright (c) Kirk Rader -->

<template>
    <div>
        <div ref="source" class="source">
            <slot></slot>
        </div>
        <highlightjs :code="xml" language="xml" @click.stop.prevent="copy" class="xml copyable" />
        <dialog ref="copied" popover closedby="any" @click.stop.prevent="closeDialog">
            Copied
        </dialog>
    </div>
</template>

<style scoped>
.source {
    border-style: solid;
    padding: 1rem;
}
</style>

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