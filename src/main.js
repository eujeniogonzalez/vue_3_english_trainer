import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Global styles
import './theme.css'

// Global components
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

createApp(App).component('TheHeader', TheHeader).component('TheFooter', TheFooter).use(store).use(router).mount('#app')
