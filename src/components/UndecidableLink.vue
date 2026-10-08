<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <a href="https://www.google.com/search?q=Undecidable+by+%22Kirk+Rader%22" target="_blank">
        <OmegaFormula :table="table" />
    </a>
</template>

<script setup>
import OmegaFormula from '@/components/OmegaFormula.vue'

const { table } = defineProps({

    table: {
        type: Boolean,
        default: false,
    },
})
</script>