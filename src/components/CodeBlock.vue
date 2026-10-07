<!-- Copyright (c) Kirk Rader 2026 -->

<template>
    <highlightjs :code="code" class="code-block" />
</template>

<style scoped>
.code-block {
    border-style: solid;
}
</style>

<script setup>
const code = defineModel()
</script>