<script setup lang="ts">

import Page from '@/components/Page.vue';
import { useStoryblokApi, useStoryblokBridge, type ISbStoryData } from '@storyblok/vue';
import { onMounted, reactive, ref, type Ref } from 'vue';

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get(
  "cdn/stories/vue-test-page",
  { version: "published" }
)

const story: Ref<ISbStoryData> = ref(<ISbStoryData>{});
story.value = data.story;

const logo = story.value.content.body.find((field: { component: string; }) => field.component == 'logo');

onMounted(() => {
    useStoryblokBridge(story.value.id, (updatedStory) => (story.value = updatedStory));
});
</script>

<template>
  <Page :blok="logo" v-editable="story.content" />
</template>
    