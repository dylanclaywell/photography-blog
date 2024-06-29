<template>
  <section id="blog-body">
    <ClientOnly fallback="loading">
      <BlogNode
        v-for="node in body.content"
        :content="node.content"
        :nodeType="node.nodeType"
        :value="node.value"
      />
    </ClientOnly>
  </section>
</template>

<script lang="ts" setup>
import type { ContentfulNode } from '~/schema/blogPost'

type Props = {
  body: ContentfulNode
}

defineProps<Props>()
</script>
