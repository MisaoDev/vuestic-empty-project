import { createApp } from "vue"
import router from "./router"
import { VuesticPlugin } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'
import App from "./App.vue"

const app = createApp(App)
app.use(router)
app.use(VuesticPlugin)
app.mount("#app")
