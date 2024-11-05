import { generateDirectusTypes } from 'directus-sdk-typegen'

import { DIRECTUS_HOST, DIRECTUS_TOKEN } from '~/env'

async function generateTypes() {
  try {
    const filePath = ['src', 'lib/directus', '_generated.ts'].join('/')
    const types = await generateDirectusTypes({
      outputPath: filePath,
      directusUrl: DIRECTUS_HOST,
      directusToken: DIRECTUS_TOKEN,
    })

    Bun.write(
      filePath,
      '/* eslint-disable @typescript-eslint/no-explicit-any */ \n' + types,
    )
  } catch (error) {
    console.error('Failed to generate types:', error)
  }
}

await generateTypes()
