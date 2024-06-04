<script setup lang="ts">
    const props = defineProps({ blok: Object })
    const logo = props.blok;
</script>
<template>
  <div v-editable="logo" v-if="logo">
    <img alt="Vue logo" class="logo" :src="logo.vue_logo.filename" width="125" height="125" />
  </div>
</template>