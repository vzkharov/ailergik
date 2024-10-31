import type { MetadataRoute } from 'next'

import { DOMAIN_URL } from '~/env'

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date()

  return [
    {
      lastModified,
      priority: 1,
      changeFrequency: 'monthly',
      url: createSitemapPath('/'),
    },
  ]
}

const createSitemapPath = (path: string) => new URL(path, DOMAIN_URL).toString()

export default sitemap
