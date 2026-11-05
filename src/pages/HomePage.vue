<!-- Copyright (c) Kirk Rader 2026 -->

<template>

    <RouteTree />

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

    <details name="sections">
        <summary>
            Contact
        </summary>
        <QrCode v-model="vcard" size="large" />
        <div class="contact">
            <ul>
                <li>
                    <a href="mailto:info@parasaurolophus.art">
                        info@parasaurolophus.art
                    </a>
                </li>
                <li>
                    <a href="https://github.com/parasaurolophus" target="_blank">
                        https://github.com/parasaurolophus
                    </a>
                </li>
                <li>
                    <a href="https://hyperfollow.com/kirkrader" target="_blank">
                        https://hyperfollow.com/kirkrader
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com/search?q=Undecidable+by+%22Kirk+Rader%22" target="_blank">
                        <math display="block">
                            <mrow>
                                <mo>(</mo>
                                <mo>&lambda;</mo>
                                <mi>x</mi>
                                <mo>.</mo>
                                <mi>x</mi>
                                <mspace width="0.5em" />
                                <mi>x</mi>
                                <mo>)</mo>
                            </mrow>
                            <mrow>
                                <mo>(</mo>
                                <mo>&lambda;</mo>
                                <mi>x</mi>
                                <mo>.</mo>
                                <mi>x</mi>
                                <mspace width="0.5em" />
                                <mi>x</mi>
                                <mo>)</mo>
                            </mrow>
                        </math>
                    </a>
                </li>
            </ul>
        </div>
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

.contact {
    text-align: center;
}

.contact ul {
    margin: 0;
    padding: 0;
}

.contact li {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
</style>

<script setup>
import QrCode from '../components/QrCode.vue'
import RouteTree from '../components/RouteTree.js'
import UndecidableLink from '../components/UndecidableLink.vue'
import { inject } from 'vue'

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

const mobile = inject('mobile')
const vcard = inject('vcard')
</script>