<template>
  <Hero
    v-if="home"
    :heading="home.hero.heading"
    :backgroundImageUrl="home.hero.backgroundImageUrl"
  />
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    class: 'h-full',
  },
  bodyAttrs: {
    class: 'h-full',
  },
})

const { data: blogPosts } = await useFetch('/api/getBlogEntries')
const { data: home } = await useFetch('/api/getHome')
</script>

<style>
#__nuxt {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
}
</style>
