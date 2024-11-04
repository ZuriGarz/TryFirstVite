// import { createApp } from 'vue'
// import App from './App.vue'
// createApp(App).mount('#app')





import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import './style.css'

const app = createApp(App)

app.use(MotionPlugin)

app.mount('#app')






// import DefaultTheme from 'vitepress/theme'
// import 'vuetify/styles'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
// import { createVuetify } from 'vuetify'

// const vuetify = createVuetify({ components, directives })

// export default {
//     ...DefaultTheme,
//     enhanceApp({ app }) {
//         app.use(vuetify)
//     },
// }
