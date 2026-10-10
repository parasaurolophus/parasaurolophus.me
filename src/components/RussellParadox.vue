<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <math display="block">
        <component :is="mobile ? 'mtable' : 'mrow'">
            <component :is="mobile ? 'mtr' : 'mrow'">
                <component :is="mobile ? 'mtd' : 'mrow'">
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
                </component>
            </component>
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
        </component>
    </math>
</template>

<script setup>
const mobile = defineModel()
</script>