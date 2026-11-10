<!-- Copyright (c) Kirk Rader 2026 -->

<template>

    <RouteTree />

    <hr>

    <TabsView :tabs="tabs" v-model="selectedTab">
        <template v-for="tab of tabs" :key="tab.label">
            <div v-if="tab.label === 'Contact'" :tab-value="tab.value">
                <div class="contact">
                    <a href="/parasaurolophus.vcf" type="text/vcard" download="parasaurolophus.vcf">
                        <QrCode v-model="vcard" size="large" />
                    </a>
                    <div>
                        <a href="mailto:info@parasaurolophus.art">
                            info@parasaurolophus.art
                        </a>
                    </div>
                </div>
            </div>
            <div v-else :tab-value="tab.value">
                <a :href="tab.value" tabindex="_blank">
                    <QrCode v-model="tab.value" :label="tab.label" size="large" />
                </a>
            </div>
        </template>
    </TabsView>

    <template v-if="mobile">

        <hr>

        <div>
            <UndecidableLink :table="true" />
        </div>

    </template>

</template>

<style scoped>
.contact {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
}
</style>

<script setup>
import QrCode from '../components/QrCode.vue'
import RouteTree from '../components/RouteTree.js'
import TabsView from '../components/TabsView.vue'
import UndecidableLink from '../components/UndecidableLink.vue'
import { inject, ref } from 'vue'

const mobile = inject('mobile')
const vcard = inject('vcard')

const tabs = [
    {
        label: 'https://rader.us',
        value: 'https://rader.us',
    },
    {
        label: 'HyperFollow',
        value: 'https://hyperfollow.com/kirkrader',
    },
    {
        label: 'GitHub',
        value: 'https://github.com/parasaurolophus',
    },
    {
        label: 'Contact',
        value: vcard.value,
    },
]

const selectedTab = ref(tabs[0].value)
</script>