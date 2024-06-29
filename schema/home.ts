import z from 'zod'
import { sysSchema } from './sys'

export const homeSchema = z.object({
  fields: z.object({
    title: z.string(),
    hero: z.object({
      sys: sysSchema,
    }),
  }),
})
