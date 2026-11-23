<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <div class="columns">
        <pre ref="source" class="copyable" @click="copy"></pre>
        <div>
            <div ref="rendered"></div>
            <highlightjs :code="scheme" language="scheme" class="copyable" @click="copy" />
        </div>
    </div>
</template>

<style scoped>
.columns {
    display: grid;
    grid-template-columns: max-content max-content;
}

.copyable {
    cursor: pointer;
}
</style>

<script setup>
import { onMounted, useTemplateRef } from 'vue'

const mathml = `<math display="block">
    <mtable>
        <mtr>
            <mtd>
                <mtext>Let</mtext>
                <mspace width="0.5em" />
                <mi>n</mi>
                <mo>!</mo>
            </mtd>
            <mtd>
                <mo>=</mo>
            </mtd>
            <mtd>
                <mi>f</mi>
                <mo>(</mo>
                <mi>n</mi>
                <mo rspace="0.5em">,</mo>
                <mn>1</mn>
                <mo>)</mo>
            </mtd>
        </mtr>
        <mtr>
            <mtd>
                <mtext>where</mtext>
                <mspace width="0.5em" />
                <mi>f</mi>
                <mo>(</mo>
                <mi>x</mi>
                <mo rspace="0.5em">,</mo>
                <mi>a</mi>
                <mo>)</mo>
            </mtd>
            <mtd>
                <mo>=</mo>
            </mtd>
            <mtd>
                <mrow>
                    <mo>{</mo>
                    <mtable>
                        <mtr>
                            <mtd>
                                <mi>a</mi>
                            </mtd>
                            <mtd>
                                <mtext>when</mtext>
                                <mspace width="0.5em" />
                                <mi>x</mi>
                                <mo>≤</mo>
                                <mn>1</mn>
                            </mtd>
                        </mtr>
                        <mtr>
                            <mtd>
                                <mi>f</mi>
                                <mo>(</mo>
                                <mrow>
                                    <mi>x</mi>
                                    <mo>−</mo>
                                    <mn>1</mn>
                                </mrow>
                                <mo rspace="0.5em">,</mo>
                                <mrow>
                                    <mi>a</mi>
                                    <mo>×</mo>
                                    <mi>x</mi>
                                </mrow>
                                <mo>)</mo>
                            </mtd>
                            <mtd>
                                <mtext>otherwise</mtext>
                            </mtd>
                        </mtr>
                    </mtable>
                </mrow>
            </mtd>
        </mtr>
    </mtable>
</math>`

const scheme = `(define (! n)
  (let f ((x n)
          (a 1))
    (if (<= x 1)
      a
      (f (- x 1) (* a x)))))`

const rendered = useTemplateRef('rendered')
const source = useTemplateRef('source')

function copy(target) {

    navigator.clipboard?.writeText(event.target.innerText)
}

onMounted(() => {
    source.value.innerText = mathml
    rendered.value.innerHTML = mathml
})
</script>