import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import HelloWorld from "@/components/HelloWorld.vue";
import Logo from "@/components/Logo.vue";
import Page from "@/components/Page.vue";
import TheWelcome from "@/components/TheWelcome.vue";
import WelcomeItem from "@/components/WelcomeItem.vue";

const app = createApp(App);

app.use(StoryblokVue, {
    accessToken: "JhZ1XPKLRNMLAoan9IQGrAtt",
    use: [apiPlugin],
    bridge: true
});

app.component("page", Page);
app.component("logo", Logo);
app.component("hello-world", HelloWorld);
app.component("the-welcome", TheWelcome);
app.component("welcome-item", WelcomeItem);

app.mount('#app')
