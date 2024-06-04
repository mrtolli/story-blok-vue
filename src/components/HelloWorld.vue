<script setup lang="ts">
const props = defineProps({ blok: Object })
const helloWorld = props.blok;
</script>

<template>
  <div class="greetings" v-if="helloWorld" :v-editable="helloWorld">
    <h1 class="green" >{{ helloWorld.heading }}</h1>
    <h3>
      {{ helloWorld.sub_heading }}
      <a :href="helloWorld.link_vite.url" target="_blank" rel="noopener">Vite</a> +
      <a :href="helloWorld.link_vue.url" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
