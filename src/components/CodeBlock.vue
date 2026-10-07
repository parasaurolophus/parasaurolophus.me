<!-- Copyright (c) Kirk Rader 2026 -->

<template>
    <highlightjs :code="code" class="code-block" />
</template>

<script setup>
const code = defineModel()
</script>