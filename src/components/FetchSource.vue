<!-- Copyright (c) Kirk Rader -->

<template>
    <details :name="name">
        <summary>
            <span v-if="mobile">
                Show source for:
            </span>
            <slot></slot>
        </summary>
        <highlightjs :code="code" :language="language" @click.stop.prevent="copy" class="copyable" />
        <dialog ref="copied" popover closedby="any" @click.stop.prevent="closeDialog">
            Copied
        </dialog>
    </details>
</template>

<script setup>
import { inject, onMounted, ref, useTemplateRef } from 'vue'

const code = ref('fetching source...')
const copied = useTemplateRef('copied')
const mobile = inject('mobile')

const { language, name, url } = defineProps({

    language: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: false,
    },

    url: {
        type: String,
        required: true,
    },
})

function closeDialog() {

    copied.value.close()
}

function copy() {

    navigator.clipboard.writeText(code.value)
        .then(() => copied.value.show())
        .catch(alert)
}

onMounted(() => {

    fetch(url)
        .then(response => {
            if (response.ok) {
                response.text()
                    .then(text => code.value = text)
                    .catch(error => {
                        console.error(error)
                        code.value = 'error reading text'
                    })
            } else {
                code.value = response.statusText
            }
        })
        .catch(error => {
            console.error(error)
            code.value = 'error fetching source'
        })
})
</script>