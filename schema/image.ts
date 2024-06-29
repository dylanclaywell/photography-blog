import z from 'zod'

export const imageSchema = z.object({
  fields: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    file: z
      .object({
        url: z.string(),
        details: z.unknown().optional(),
        fileName: z.string(),
        contentType: z.string(),
      })
      .optional(),
  }),
})
