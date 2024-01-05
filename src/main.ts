import { createApp } from 'vue'
import './styles/main.css'
import App from './App.vue'
import initializeRouter from './router'
import Toast, { POSITION } from 'vue-toastification'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

const app = createApp(App)

app.use(Toast, {
  position: POSITION.TOP_RIGHT,
})

initializeRouter(app)

app.mount('#app')
