import { createApp, h } from 'vue';
import App from './App.vue'

const myApp = createApp({
    render() {
      return h(App);
    },
  });
  

  myApp.mount('#app')

