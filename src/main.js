import { createApp } from 'vue';
import App from './App.vue';
import './style/general.scss';
import { router } from "./router";

createApp(App).use(router).mount('#app')
