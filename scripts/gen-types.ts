import { generateDirectusTypes } from 'directus-sdk-typegen'
import { authentication, createDirectus } from '@directus/sdk'

import { createLogger } from '~/lib/logger'
import { DIRECTUS_EMAIL, DIRECTUS_HOST, DIRECTUS_PASSWORD } from '~/env'

const logger = createLogger('gen-types')

async function generateTypes() {
  try {
    const directus = createDirectus(DIRECTUS_HOST).with(authentication())
    const { access_token } = await directus.login(
      DIRECTUS_EMAIL,
      DIRECTUS_PASSWORD,
    )

    if (!access_token) {
      throw new Error('No `access_token` provided')
    }

    const filePath = ['src', 'lib/directus', '_generated.ts'].join('/')
    const types = await generateDirectusTypes({
      outputPath: filePath,
      directusUrl: DIRECTUS_HOST,
      directusToken: access_token,
    })

    Bun.write(
      filePath,
      '/* eslint-disable @typescript-eslint/no-explicit-any */ \n' + types,
    )
  } catch (error) {
    logger.error({ error })
    return
  }
}

await generateTypes()
