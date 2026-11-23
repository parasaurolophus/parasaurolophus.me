<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <div class="container">
        <div class="controls">
            <div class="source">
                <textarea v-model="source" cols="40" rows="20" spellcheck="false" wrap="0"></textarea>
            </div>
            <div class="presets">
                <button v-for="preset of presets" :key="preset.title" @click="populatePreset(preset.text)">
                    {{ preset.label }}
                </button>
            </div>
        </div>
        <hr class="separator">
        <div ref="rendered" class="rendered"></div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}

.controls {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: min-content;
}

.presets {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
}

.presets>* {
    margin: 0.25rem;
}

.rendered {
    margin: 1rem;
}

.separator {
    display: initial;
    width: 100%;
}

textarea {
    white-space: pre;
}

@media (width >=1200px) {

    .container {
        flex-flow: row nowrap;
    }

    .separator {
        display: none;
    }
}
</style>

<script setup>
import { onMounted, ref, useTemplateRef, watch } from 'vue'

const rendered = useTemplateRef('rendered')

const presets = [
    {
        label: 'undecidable',
        text: `<math display="block">
    <mtable>
        <mtr>
            <mtd>
                <mtext>Let</mtext>
                <mspace width="0.5em" />
                <mi>Ω</mi>
            </mtd>
            <mtd>
                <mo>=</mo>
            </mtd>
            <mtd>
                <mi>ω</mi>
                <mspace width="0.5em" />
                <mi>ω</mi>
            </mtd>
        </mtr>
        <mtr>
            <mtd>
                <mtext>where</mtext>
                <mspace width="0.5em" />
                <mi>ω</mi>
            </mtd>
            <mtd>
                <mo>=</mo>
            </mtd>
            <mtd>
                <mo>λ</mo>
                <mi>x</mi>
                <mo>.</mo>
                <mrow>
                    <mi>x</mi>
                    <mspace width="0.5em" />
                    <mi>x</mi>
                </mrow>
            </mtd>
        </mtr>
    </mtable>
</math>`,
    },
    {
        label: 'divide by zero',
        text: `<math display="block">
    <mrow>
        <mrow>
            <munder>
                <mo>lim</mo>
                <mrow>
                    <mi>x</mi>
                    <mo>→</mo>
                    <mn>∞</mo>
                </mrow>
            </munder>
            <mo>(</mo>
                <mfrac>
                    <mn>1</mn>
                    <mi>x</mn>
                </mfrac>
            <mo>)</mo>
        </mrow>
        <mo>=</mo>
        <mn>0</mn>
    </mrow>
    <mpadded width="2em" lspace="0.75em">
        <mo>≡</mo>
    </mpadded>
    <mrow>
        <mrow>
            <munder>
                <mo>lim</mo>
                <mrow>
                    <mi>x</mi>
                    <mo>→</mo>
                    <mn>0</mo>
                </mrow>
            </munder>
            <mo>(</mo>
                <mfrac>
                    <mn>1</mn>
                    <mi>x</mn>
                </mfrac>
            <mo>)</mo>
        </mrow>
        <mo>=</mo>
        <mn>∞</mn>
    </mrow>
</math>`,
    },
    {
        label: 'ℕ',
        text: `<math display="block">
    <mtable>
        <mtr>
            <mtd>
                <mrow>
                    <mo>|</mo>
                    <mi>ℕ</mi>
                    <mo>|</mo>
                </mrow>
                <mo>=</mo>
                <msub>
                    <mi>ℵ</mi>
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
                <mi>ℕ</mi>
                <mo>=</mo>
                <mrow>
                    <mo>{</mo>
                    <mi>n</mi>
                    <mo>:</mo>
                    <mo>(</mo>
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
                                <mo>∨</mo>
                            </mtd>
                        </mtr>
                        <mtr>
                            <mtd>
                                <mrow>
                                    <mo>∃</mo>
                                    <mi>m</mi>
                                    <mrow>
                                        <mo>(</mo>
                                        <mrow>
                                            <mi>m</mi>
                                            <mo>∈</mo>
                                            <mi>ℕ</mi>
                                        </mrow>
                                        <mpadded width="1.5em" lspace="0.5em">
                                            <mo>∧</mo>
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
                    <mo>)</mo>
                    <mo>}</mo>
                </mrow>
            </mtd>
        </mtr>
    </mtable>
</math>`,
    },
    {
        label: 'y combinator',
        text: `<math display="block">
    <mtable>
        <mtr>
            <mtd>
                <mi>Y</mi>
                <mi>f</mi>
            </mtd>
            <mtd>
                <mo>≡</mo>
            </mtd>
            <mtd>
                <mrow>
                    <mi>f</mi>
                    <mo>(</mo>
                    <mi>Y</mi>
                    <mi>f</mi>
                    <mo>)</mo>
                </mrow>
                <mspace width="0.5em" />
                <mtext>where</mtext>
            </mtd>
        </mtr>
        <mtr>
            <mtd>
                <mi>Y</mi>
            </mtd>
            <mtd>
                <mo>=</mo>
            </mtd>
            <mtd>
                <mo>λ</mo>
                <mi>y</mi>
                <mo>.</mo>
                <mrow>
                    <mo>(</mo>
                    <mo>λ</mo>
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
                <mrow>
                    <mo>(</mo>
                    <mo>λ</mo>
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
            </mtd>
        </mtr>
    </mtable>
</math>`,
    },
    {
        label: "russell's paradox",
        text: `<math display="block">
    <mtable>
        <mtr>
            <mtd>
                <mi>S</mi>
                <mi>∈</mi>
                <mi>S</mi>
            </mtd>
            <mtd>
                <mo>≡</mo>
            </mtd>
            <mtd>
                <mi>S</mi>
                <mi>∉</mi>
                <mi>S</mi>
            </mtd>
        </mtr>
        <mtr>
            <mtd>
                <mtext>where</mtext>
                <mspace width="0.5em" />
                <mi>S</mi>
            </mtd>
            <mtd>
                <mo>=</mo>
            </mtd>
            <mtd>
                <mo>{</mo>
                <mi>s</mi>
                <mo>:</mo>
                <mrow>
                    <mi>s</mi>
                    <mo>∉</mo>
                    <mi>s</mi>
                </mrow>
                <mo>}</mo>
            </mtd>
        </mtr>
    </mtable>
</math>`,
    },
]

const source = ref(presets[0].text)

function populatePreset(src) {

    source.value = src
}

function updateMathML() {

    rendered.value.innerHTML = source.value
}

onMounted(updateMathML)
watch(source, updateMathML)
</script>