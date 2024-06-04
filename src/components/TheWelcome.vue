<script setup lang="ts">
import { inject } from 'vue'

import type {SbBlokData} from "@storyblok/vue";

const theWelcome: SbBlokData = <SbBlokData>inject('theWelcome')
const welcomeItems: Array<SbBlokData> = <Array<SbBlokData>>theWelcome.items;

</script>

<template>
  <div v-if="theWelcome" v-for="welcomeItem in welcomeItems" :key="welcomeItem._uid">
    <StoryblokComponent v-if="welcomeItem" :blok="welcomeItem" />
  </div>
</template>
