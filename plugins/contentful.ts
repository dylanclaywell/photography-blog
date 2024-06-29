import contentful from 'contentful'
import { config } from '~/config'

export const client = contentful.createClient({
  space: config.CONTENTFUL_SPACE_ID,
  accessToken: config.CONTENTFUL_ACCESS_TOKEN,
})
