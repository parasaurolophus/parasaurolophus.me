<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <math display="block">
        <component :is="mobile ? 'mtable' : 'mrow'">
            <component :is="mobile ? 'mtr' : 'mrow'">
                <component :is="mobile ? 'mtd' : 'mrow'">
                    <mrow>
                        <mo>|</mo>
                        <mi>&naturals;</mi>
                        <mo>|</mo>
                    </mrow>
                    <mo>=</mo>
                    <msub>
                        <mi>&aleph;</mi>
                        <mi>0</mi>
                    </msub>
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
                    <mi>&naturals;</mi>
                    <mo>=</mo>
                    <mrow>
                        <mo>{</mo>
                        <mi>n</mi>
                        <mo>:</mo>
                        <mo v-if="mobile">(</mo>
                        <component :is="mobile ? 'mtable' : 'mrow'">
                            <component :is="mobile ? 'mtr' : 'mrow'">
                                <component :is="mobile ? 'mtd' : 'mrow'">
                                    <mrow>
                                        <mo>(</mo>
                                        <mi>n</mi>
                                        <mo>=</mo>
                                        <mn>0</mn>
                                        <mo>)</mo>
                                    </mrow>
                                    <mo>&or;</mo>
                                </component>
                            </component>
                            <component :is="'mtr'">
                                <component :is="'mtd'">
                                    <mrow>
                                        <mo>&exist;</mo>
                                        <mi>m</mi>
                                        <mrow>
                                            <mo>(</mo>
                                            <mrow>
                                                <mi>m</mi>
                                                <mo>&in;</mo>
                                                <mi>&naturals;</mi>
                                            </mrow>
                                            <mpadded width="1.5em" lspace="0.5em">
                                                <mo>&and;</mo>
                                            </mpadded>
                                            <mrow>
                                                <mi>n</mi>
                                                <mo>=</mo>
                                                <mrow>
                                                    <mi>m</mi>
                                                    <mo>+</mo>
                                                    <mn>1</mn>
                                                </mrow>
                                                <mo>)</mo>
                                            </mrow>
                                        </mrow>
                                    </mrow>
                                </component>
                            </component>
                        </component>
                        <mo v-if="mobile">)</mo>
                        <mo>}</mo>
                    </mrow>
                </mtd>
            </mtr>
        </component>
    </math>
</template>

<script setup>
const mobile = defineModel()
</script>