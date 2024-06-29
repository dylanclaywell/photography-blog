import z from 'zod'

export const sysSchema = z.object({
  type: z.enum(['Link', 'Entry', 'Asset']),
  linkType: z.enum(['Asset', 'Entry']).optional(),
  id: z.string(),
})
