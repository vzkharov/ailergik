import { Suspense } from 'react'
import { readItems } from '@directus/sdk'

import { client } from '~/lib/directus'

import { Skeleton } from '~/components/ui/skeleton'

const _Posts = async () => {
  const items = await client.request(readItems('post'))

  return (
    <pre className="max-w-96 overflow-hidden font-mono">
      {JSON.stringify(items, null, 2)}
    </pre>
  )
}

const Posts = () => (
  <Suspense fallback={<Skeleton className="h-[312px] w-96" />}>
    <_Posts />
  </Suspense>
)

export { Posts }
