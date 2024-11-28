import type { StyleProps } from '~/lib/types'

import { Skeleton } from '~/components/ui/skeleton'

import { styles } from './styles'

type PostsLoadingProps = StyleProps & {
  count?: number
}

const PostsLoading = ({ style, className, count = 9 }: PostsLoadingProps) => (
  <div style={style} className={styles.root({ className })}>
    {Array.from({ length: count }).map((_, idx) => (
      <div key={idx} className={styles.card()}>
        <Skeleton className="aspect-[4/3] w-full rounded-md" />
        <Skeleton className="mt-md h-[14px]" />
        <Skeleton className="mt-sm h-[40px]" />
      </div>
    ))}
  </div>
)

export { PostsLoading }
