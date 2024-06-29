import z from 'zod'

const baseContentfulNodeSchema = z.object({
  nodeType: z.enum([
    'document',
    'table',
    'tableRow',
    'tableRowHeaderCell',
    'tableRowCell',
    'paragraph',
    'text',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'blockquote',
    'horizontalRule',
    'orderedList',
    'unorderedList',
    'listItem',
    'embeddedEntryBlock',
    'embeddedAssetBlock',
    'embeddedEntryInline',
    'hyperlink',
    'entryHyperlink',
    'assetHyperlink',
  ]),
  value: z.string().optional(),
})

export type ContentfulNode = z.infer<typeof baseContentfulNodeSchema> & {
  content?: ContentfulNode[]
}

export const contentfulNodeSchema: z.ZodType<ContentfulNode> =
  baseContentfulNodeSchema.extend({
    content: z.lazy(() => z.array(contentfulNodeSchema)).optional(),
  })

export const blogPostSchema = z.object({
  fields: z.object({
    title: z.string(),
    subtitle: z.string(),
    body: contentfulNodeSchema,
  }),
})

export type BlogPost = z.infer<typeof blogPostSchema>
