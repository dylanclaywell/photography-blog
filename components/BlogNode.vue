<template>
  <div>
    <div v-if="nodeType === 'document'">
      <template>
        <Teleport to="#blog-body">
          <BlogNode
            v-if="content"
            v-for="node in content"
            :key="node.nodeType"
            v-bind="node"
          ></BlogNode>
        </Teleport>
      </template>
    </div>
    <p v-if="nodeType === 'paragraph'">
      <template>
        <Teleport to="#blog-body">
          <BlogNode
            v-if="content"
            v-for="node in content"
            :key="node.nodeType"
            v-bind="node"
          ></BlogNode>
        </Teleport>
      </template>
    </p>
    <span v-if="nodeType === 'text'">
      {{ value }}
      <template>
        <Teleport to="#blog-body">
          <BlogNode
            v-if="content"
            v-for="node in content"
            :key="node.nodeType"
            v-bind="node"
          ></BlogNode>
        </Teleport>
      </template>
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { ContentfulNode } from '~/schema/blogPost'

type Props = {
  content?: ContentfulNode[]
  nodeType: string
  value?: string
}

const props = defineProps<Props>()
</script>
