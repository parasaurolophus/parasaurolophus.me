<!-- Copyright (c) 2026 Kirk Rader -->

<template>
    <div>
        <MathMlEditor />
        <hr />
        <div>
            <div class="note">
                Note that the global CSS stylesheet for this site includes the
                following rule:
            </div>
            <pre>    mtd {
        text-align: start;
    }</pre>
        </div>
        <hr />
        <FactorialExample />
    </div>
</template>

<style scoped>
.note {
    font-style: italic;
}
</style>

<script setup>
import FactorialExample from '../components/FactorialExample.vue'
import MathMlEditor from '../components/MathMlEditor.vue'
</script>