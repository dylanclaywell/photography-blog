import z from 'zod'

import { client } from '~/plugins/contentful'
import { blogPostSchema, contentfulNodeSchema } from '~/schema/blogPost'

const reformattedBlogPostSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string(),
  body: contentfulNodeSchema,
})

type ReformattedBlogPost = z.infer<typeof reformattedBlogPostSchema>

export default defineEventHandler(async (event) => {
  const blogPosts = await client.getEntries({ content_type: 'blogPost' })

  const posts = z.array(blogPostSchema).parse(blogPosts.items)

  const reformattedPosts: ReformattedBlogPost[] = posts.map((post) => ({
    title: post.fields.title,
    subtitle: post.fields.subtitle,
    body: post.fields.body,
  }))

  return reformattedPosts
})
