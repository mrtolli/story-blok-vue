<script setup lang="ts">
  import Home from './pages/Home.vue';
</script>

<template>
  <Suspense>
    <template #default>
      <Home />
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

