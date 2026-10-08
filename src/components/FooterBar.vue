<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <footer>
        <CopyrightNotice />
        <UndecidableLink class="undecidable" />
    </footer>
</template>

<style scoped>
.undecidable {
    display: none;
}

@media (width >= 1200px) {
    .undecidable {
        display: inline;
    }
}
</style>

<script setup>
import CopyrightNotice from '@/components/CopyrightNotice.vue'
import UndecidableLink from '@/components/UndecidableLink.vue'
</script>