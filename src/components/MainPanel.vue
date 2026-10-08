<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <main>
        <div>
            <RouterView />
        </div>
        <img src="/parasaurolophus.webp" alt="parasaurolophus" class="image">
    </main>
</template>

<style scoped>
.image {
    display: none;
}

@media (width >= 1200px) {

    .image {
        display: inline;
        margin-left: auto;
    }
}
</style>

<script setup>
import { RouterView } from 'vue-router'
</script>