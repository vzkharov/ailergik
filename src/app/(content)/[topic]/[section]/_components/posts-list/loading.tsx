import { memo } from 'react'

import type { StyleProps } from '~/lib/types'

import { Skeleton } from '~/components/ui/skeleton'

import { styles } from './styles'

type LoadingComponentProps = StyleProps & {
  count?: number
}

const LoadingComponent = memo(
  ({ style, className, count = 9 }: LoadingComponentProps) => (
    <div style={style} className={styles.root({ className })}>
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className={styles.card()}>
          <Skeleton className="aspect-[4/3] w-full rounded-md" />
          <Skeleton className="mt-md h-[14px]" />
          <Skeleton className="mt-sm h-[40px]" />
        </div>
      ))}
    </div>
  ),
)
LoadingComponent.displayName = '@posts-list/loading'

export { LoadingComponent }
