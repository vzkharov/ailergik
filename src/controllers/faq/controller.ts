import { readItems } from '@directus/sdk'

import { client } from '~/lib/directus/client'

const fetchFAQ = async () =>
  client.request(
    readItems('faq', {
      fields: ['title', 'content', { image: ['*'] }],
    }),
  )

export { fetchFAQ }
