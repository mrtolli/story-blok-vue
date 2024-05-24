<script setup lang="ts">
    defineProps({
        logoSrc: String,
        logoBlok: Object
    })
</script>
<template>
    <img alt="Vue logo" class="logo" :src="logoSrc" width="125" height="125" v-editable="logoBlok" />
</template>