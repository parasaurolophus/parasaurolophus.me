<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <p>
        As shown by Bertrand Russell, the <i>comprehension theorem</i> of
        Gottlob Frege's "naive" Set Theory leads to self-contradiction. For
        example, there is no such thing as the set of all sets that are not
        members of themselves since such a set would have to both be a member of
        itself and not a member of itself:
    </p>
    <XmlExample>
        <math display="block">
            <mtable>
                <mtr>
                    <mtd>
                        <mrow>
                            <mi>S</mi>
                            <mi>&in;</mi>
                            <mi>S</mi>
                        </mrow>
                        <mo>&equiv;</mo>
                        <mrow>
                            <mi>S</mi>
                            <mi>&notin;</mi>
                            <mi>S</mi>
                        </mrow>
                    </mtd>
                </mtr>
                <mtr>
                    <mtd>
                        <mtext>where</mtext>
                        <mspace width="0.5em" />
                        <mi>S</mi>
                        <mo>=</mo>
                        <mrow>
                            <mo>{</mo>
                            <mi>s</mi>
                            <mo>:</mo>
                            <mrow>
                                <mi>s</mi>
                                <mo>&notin;</mo>
                                <mi>s</mi>
                            </mrow>
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