<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <math>
        <component :is="table ? 'mtable' : 'mrow'">
            <component :is="table ? 'mtr' : 'mrow'">
                <component :is="table ? 'mtd' : 'mrow'">
                    <mtext>let</mtext>
                    <mspace width="0.5em" />
                    <mi>&Omega;</mi>
                    <mo>=</mo>
                    <mrow>
                        <mi>&omega;</mi>
                        <mspace width="0.5em" />
                        <mi>&omega;</mi>
                    </mrow>
                </component>
            </component>
            <component :is="table ? 'mtr' : 'mrow'">
                <component :is="table ? 'mtd' : 'mrow'">
                    <mspace v-if="!table" width="0.5em" />
                    <mtext>where</mtext>
                    <mspace width="0.5em" />
                    <mi>&omega;</mi>
                    <mo>=</mo>
                    <mrow>
                        <mo>&lambda;</mo>
                        <mi>x</mi>
                        <mo>.</mo>
                        <mrow>
                            <mi>x</mi>
                            <mspace width="0.5em" />
                            <mi>x</mi>
                        </mrow>
                    </mrow>
                </component>
            </component>
        </component>
    </math>
</template>

<script setup>
const { table } = defineProps({

    table: {
        type: Boolean,
        default: false,
    },
})
</script>