<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <main>
        <img src="/parasaurolophus_avatar.webp" alt="parasaurolophus" class="avatar">
        <div>
            <RouterView />
        </div>
        <img src="/parasaurolophus.webp" alt="parasaurolophus" class="image">
    </main>
</template>

<style scoped>
.avatar {
    margin-left: auto;
    margin-right: auto;
    width: min-content;
    padding: 1rem;
}

.image {
    display: none;
    margin-left: auto;
}

@media (orientation: landscape) {

    .avatar {
        display: none;
    }

    .image {
        display: inline;
    }
}
</style>

<script setup>
import { RouterView } from 'vue-router'
</script>