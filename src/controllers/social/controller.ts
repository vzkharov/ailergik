import { readItems } from '@directus/sdk'

import { client } from '~/lib/directus/client'

const fetchSocials = async () =>
  client.request(
    readItems('social', {
      fields: ['url', 'name', { icon: ['*'] }],
    }),
  )

export { fetchSocials }
