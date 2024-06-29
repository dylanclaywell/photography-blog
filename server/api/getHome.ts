import z from 'zod'

import { client } from '~/plugins/contentful'
import { heroSchema } from '~/schema/hero'
import { homeSchema } from '~/schema/home'
import { imageSchema } from '~/schema/image'

const hydratedHomeSchema = z.object({
  title: z.string(),
  hero: z.object({
    heading: z.string(),
    backgroundImageUrl: z.string(),
  }),
})

export default defineEventHandler(async (event) => {
  const home = await client.getEntry('4pQ0GmSJnGlQkkrU4CjitU')

  const rawHome = homeSchema.parse(home)

  const rawHero = heroSchema.parse(
    await client.getEntry(rawHome.fields.hero.sys.id),
  )

  const rawHeroImage = imageSchema.parse(
    await client.getAsset(rawHero.fields.backgroundImage.sys.id),
  )

  return hydratedHomeSchema.parse({
    title: rawHome.fields.title,
    hero: {
      heading: rawHero.fields.heading,
      backgroundImageUrl: rawHeroImage.fields.file?.url ?? '',
    },
  })
})
