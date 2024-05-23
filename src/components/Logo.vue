<script setup lang="ts">
    defineProps({
        logoSrc: String
    })
</script>
<template>
    <img alt="Vue logo" class="logo" :src="logoSrc" width="125" height="125" />
</template>