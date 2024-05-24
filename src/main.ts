import './assets/main.css'

import { createApp } from 'vue';

import { StoryblokVue, apiPlugin } from "@storyblok/vue";

import App from './App.vue'
import Page from './pages/Home.vue';
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import WelcomeItem from './components/WelcomeItem.vue';
import Logo from './components/Logo.vue';

const app = createApp(App)

app.use(StoryblokVue, {
    accessToken: "JhZ1XPKLRNMLAoan9IQGrAtt",
    use: [apiPlugin],
    bridge: true
});

// app.component("hello-world", HelloWorld)
// app.component("logo", Logo)
// app.component("TheWelcome", TheWelcome)
// app.component("welcome-item", WelcomeItem)
//app.component("page", Page)

app.mount('#app')
