<script setup lang="ts">

import Page from '@/components/Page.vue';
import { useStoryblokApi, useStoryblokBridge, type ISbStoryData } from '@storyblok/vue';
import { onMounted, ref, type Ref } from 'vue';

const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get(
  "cdn/stories/vue-test-page",
  { version: "published" }
)

const story: Ref<ISbStoryData> = ref(<ISbStoryData>{});
story.value = data.story;

onMounted(() => {
    let storyValue = story.value ?? {};
    useStoryblokBridge(storyValue.id, (evStory) => (storyValue = evStory));
});
</script>

<template>
  <Page :blok="story.content" />
</template>
    