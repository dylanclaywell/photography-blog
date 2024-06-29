import z from 'zod'

export const configSchema = z.object({
  CONTENTFUL_SPACE_ID: z.string().min(1),
  CONTENTFUL_ACCESS_TOKEN: z.string().min(1),
})

export type Config = z.infer<typeof configSchema>

export const config: Config = configSchema.parse({
  CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
})
