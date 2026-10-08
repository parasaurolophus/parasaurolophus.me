<!-- Copyright (c) Kirk Rader 2026 -->

<template>
    <div>
        <highlightjs :code="code" class="code-block copyable" @click.prevent.stop="copy" />
        <dialog ref="dialog" popover closedby="any" @click.prevent.stop="closeDialog">
            <pre>{{ code }}</pre> copied to the clipboard
        </dialog>
    </div>
</template>

<script setup>
import { useTemplateRef } from 'vue'

const code = defineModel()
const dialog = useTemplateRef('dialog')

function closeDialog(event) {

    dialog.value.close()
}

function copy() {

    navigator.clipboard.writeText(code.value)
        .then(() => dialog.value.show())
        .catch((err) => alert(err))
}
</script>