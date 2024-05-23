<script setup lang="ts">

import Page from '@/components/Page.vue';
import { useStoryblokApi, useStoryblokBridge } from '@storyblok/vue';
import { onMounted, ref } from 'vue';

const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get(
  "cdn/stories/vue-test-page",
  { version: "published" }
)

const story = ref(null);
story.value = data.story;

onMounted(() => {
    useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory));
});
</script>

<template>
  <Page :blok="story.content" />
</template>
    