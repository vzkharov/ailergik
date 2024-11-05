import { rest, createDirectus, authentication } from '@directus/sdk'

import { DIRECTUS_HOST } from '~/env'

import type { Schema } from './_generated'

const client = createDirectus<Schema>(DIRECTUS_HOST)
  .with(authentication())
  .with(rest())

// type CreateFetchOptions<TArgs, TData> = {
//   fetch: (args: TArgs) => Promise<TData>
// }

// const createFetch = <TArgs, TData>({
//   fetch: fetchData,
// }: CreateFetchOptions<TArgs, TData>) => {
//   return async (args: TArgs) => {
//     try {
//       const data = await fetchData(args)
//       return data
//     } catch (error) {
//       console.error(error)
//       return
//     }
//   }
// }

export { client }
