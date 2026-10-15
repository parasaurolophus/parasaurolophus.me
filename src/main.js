import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import 'highlight.js/styles/stackoverflow-dark.css'
import hljs from 'highlight.js/lib/core'
import scheme from 'highlight.js/lib/languages/scheme'
import xml from 'highlight.js/lib/languages/xml'
import hljsVuePlugin from "@highlightjs/vue-plugin"

hljs.registerLanguage('scheme', scheme)
hljs.registerLanguage('xml', xml)

const app = createApp(App)

app.use(router)
app.use(hljsVuePlugin)
app.mount('#app')
