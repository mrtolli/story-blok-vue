<script setup lang="ts">
import { inject } from 'vue'

import type {SbBlokData} from "@storyblok/vue";

const theWelcome = <SbBlokData>inject('theWelcome')

</script>

<template>
  <div v-editable="theWelcome" v-if="theWelcome" v-for="welcomeItem in theWelcome.items" :key="welcomeItem._uid">
    <StoryblokComponent v-if="welcomeItem" :blok="welcomeItem" />
  </div>
</template>
