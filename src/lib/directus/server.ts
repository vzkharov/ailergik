import { rest, createDirectus, authentication } from '@directus/sdk'

import { DIRECTUS_EMAIL, DIRECTUS_HOST, DIRECTUS_PASSWORD } from '~/env'

import type { Schema } from './_generated'

const client = createDirectus<Schema>(DIRECTUS_HOST)
  .with(authentication('cookie', { autoRefresh: true, credentials: 'include' }))
  .with(
    rest({
      credentials: 'include',
      onRequest: options => ({ ...options, cache: 'no-store' }),
    }),
  )

await client.login(DIRECTUS_EMAIL, DIRECTUS_PASSWORD)

export { client, client as directus }
