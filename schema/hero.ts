import z from 'zod'
import { sysSchema } from './sys'

export const heroSchema = z.object({
  fields: z.object({
    backgroundImage: z.object({
      sys: sysSchema,
    }),
    heading: z.string(),
  }),
})
