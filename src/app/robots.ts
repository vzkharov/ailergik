import type { MetadataRoute } from 'next'

import { DOMAIN_URL } from '~/env'

const robots = (): MetadataRoute.Robots => ({
  rules: {
    allow: '/',
    userAgent: '*',
  },
  sitemap: new URL('sitemap.xml', DOMAIN_URL).toString(),
})

export default robots
