<template>
  <div
    :style="{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https:${backgroundImageUrl}')`,
    }"
    class="bg-cover bg-center h-1/2 bg-no-repeat relative"
  >
    <h1
      class="text-2xl md:text-[5vw] xl:text-7xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      {{ heading }}
    </h1>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  heading: string
  backgroundImageUrl: string
}

defineProps<Props>()
</script>
