<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <math display="block">
        <component :is="mobile ? 'mtable' : 'mrow'">
            <component :is="mobile ? 'mtr' : 'mrow'">
                <component :is="mobile ? 'mtd' : 'mrow'">
                    <mrow>
                        <mi>Y</mi>
                        <mi>f</mi>
                    </mrow>
                    <mo>&equiv;</mo>
                    <mrow>
                        <mi>f</mi>
                        <mo>(</mo>
                        <mi>Y</mi>
                        <mi>f</mi>
                        <mo>)</mo>
                    </mrow>
                </component>
            </component>
            <template v-if="mobile">
                <mtr>
                    <mtd>
                        <mtext>where</mtext>
                    </mtd>
                </mtr>
            </template>
            <mtr>
                <mtd>
                    <template v-if="!mobile">
                        <mtext>where</mtext>
                        <mspace width="0.5em" />
                    </template>
                    <mi>Y</mi>
                    <mo>=</mo>
                    <mrow>
                        <mo>&lambda;</mo>
                        <mi>y</mi>
                        <mo>.</mo>
                        <template v-for="count in 2">
                            <mrow>
                                <mo>(</mo>
                                <mo>&lambda;</mo>
                                <mi>x</mi>
                                <mo>.</mo>
                                <mrow>
                                    <mi>y</mi>
                                    <mo>(</mo>
                                    <mi>x</mi>
                                    <mspace width="0.5em" />
                                    <mi>x</mi>
                                    <mo>)</mo>
                                </mrow>
                                <mo>)</mo>
                            </mrow>
                        </template>
                    </mrow>
                </mtd>
            </mtr>
        </component>
    </math>
</template>

<script setup>
const mobile = defineModel()
</script>