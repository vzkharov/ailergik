import { authentication, createDirectus, rest } from '@directus/sdk'

import { DIRECTUS_EMAIL, DIRECTUS_HOST, DIRECTUS_PASSWORD } from '~/env'

const client = createDirectus(DIRECTUS_HOST).with(authentication()).with(rest())

await client.login(DIRECTUS_EMAIL, DIRECTUS_PASSWORD)

export { client }
