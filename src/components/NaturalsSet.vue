<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <XmlExample>
        <math display="block">
            <mtable>
                <mtr>
                    <mtd>
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
                    </mtd>
                </mtr>
                <mtr>
                    <mtd>
                        <mtext>where</mtext>
                    </mtd>
                </mtr>
                <mtr>
                    <mtd>
                        <mi>&naturals;</mi>
                        <mo>=</mo>
                        <mrow>
                            <mo>{</mo>
                            <mi>n</mi>
                            <mo>:</mo>
                            <mo v-if="mobile">(</mo>
                            <mtable>
                                <mtr>
                                    <mtd>
                                        <mrow>
                                            <mo>(</mo>
                                            <mi>n</mi>
                                            <mo>=</mo>
                                            <mn>0</mn>
                                            <mo>)</mo>
                                        </mrow>
                                        <mo>&or;</mo>
                                    </mtd>
                                </mtr>
                                <mtr>
                                    <mtd>
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
                                    </mtd>
                                </mtr>
                            </mtable>
                            <mo v-if="mobile">)</mo>
                            <mo>}</mo>
                        </mrow>
                    </mtd>
                </mtr>
            </mtable>
        </math>
    </XmlExample>
</template>

<script setup>
import XmlExample from './XmlExample.vue'
import { inject } from 'vue'

const mobile = inject('mobile')
</script>