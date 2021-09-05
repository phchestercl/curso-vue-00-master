import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'  // O simplemente './store'


createApp(App)
    .use(store)
    .mount('#app')
