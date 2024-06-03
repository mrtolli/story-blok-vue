<script setup lang="ts">
import {useStoryblok} from '@storyblok/vue';
import {provide} from 'vue';

const story = await useStoryblok('vue-test-page', { version: 'draft' });

const logo = story.value.content.body.find((field: { component: string; }) => field.component == 'logo');
const helloWorld = story.value.content.body.find((field: { component: string; }) => field.component == 'hello-world');
const theWelcome  = story.value.content.body.find((field: { component: string; }) => field.component == 'the-welcome');

provide('logo', logo)
provide('helloWorld', helloWorld)
provide('theWelcome', theWelcome)

</script>

<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>
    