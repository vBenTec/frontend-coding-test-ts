import { createApp } from 'vue'
import './styles/main.css'
import App from './App.vue'
import initializeRouter from './router'
import Toast, { POSITION } from 'vue-toastification'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  GiHealthPotion,
  GiSwordsPower,
  GiEggDefense,
  GiBroadsword,
  GiShield,
  GiSpeedometer,
} from 'oh-vue-icons/icons'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

const app = createApp(App)

//  Global components
app.component('base-icon', OhVueIcon)

addIcons(GiHealthPotion, GiSwordsPower, GiEggDefense, GiSpeedometer, GiBroadsword, GiShield)

app.use(Toast, {
  position: POSITION.TOP_RIGHT,
})

initializeRouter(app)

app.mount('#app')
