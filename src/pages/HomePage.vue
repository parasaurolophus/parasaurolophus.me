<!-- Copyright (c) Kirk Rader 2026 -->

<template>

    <RouteTree/>

    <hr>

    <details v-for="link in links" name="sections">
        <summary>
            {{ link.label }}
        </summary>
        <a v-if="link.href" :href="link.href" target="_blank">
            <QrCode v-model="link.href" :label="link.href" size="large" />
        </a>
        <QrCode v-else v-model="link.text" />
    </details>

    <template v-if="mobile">

        <hr>

        <div class="undecidable">
            <UndecidableLink :table="true" />
        </div>

    </template>

</template>

<style scoped>
.undecidable {
    display: flex;
    justify-content: center;
}
</style>

<script setup>
import QrCode from '../components/QrCode.vue'
import RouteTree from '../components/RouteTree.js'
import UndecidableLink from '../components/UndecidableLink.vue'
import { inject } from 'vue'

const mobile = inject('mobile')

const links = [
    {
        href: 'https://rader.us',
        label: 'https://rader.us',
    },
    {
        href: 'https://hyperfollow.com/kirkrader',
        label: 'HyperFollow',
    },
    {
        href: 'https://github.com/parasaurolophus',
        label: 'GitHub',
    },
]
</script>