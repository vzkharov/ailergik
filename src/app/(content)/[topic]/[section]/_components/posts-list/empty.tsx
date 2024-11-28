import { memo } from 'react'
import { ImagesIcon } from 'lucide-react'

const EmptyComponent = memo(() => (
  <div className="flex h-[50svh] items-center justify-center">
    <div className="space-y-4 text-center">
      <ImagesIcon className="mx-auto h-12 w-12" />
      <h3 className="font-semibold text-2xl">No media yet</h3>
      <p className="text-muted-foreground">
        It looks like you there are not media with this query. Why don&apos;t
        you
        <br className="hidden sm:block" />
        change query string or refresh page?
      </p>
    </div>
  </div>
))

EmptyComponent.displayName = '@post-list/empty'

export { EmptyComponent }
