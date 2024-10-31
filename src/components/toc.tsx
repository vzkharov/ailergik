'use client'

import type { StyleProps } from '~/lib/types'

import { cn } from '~/lib/utils'

import { useHeadings } from '~/hooks/use-headings'

import { Link } from '~/components/ui/link'
import { Spacer } from '~/components/ui/spacer'
import { Skeleton } from '~/components/ui/skeleton'

type ToCProps = StyleProps & {
  levels: number[]
}

const ToC = ({ style, className, levels = [5] }: ToCProps) => {
  const [headings, isPending] = useHeadings(levels)

  return (
    <div style={style} className={cn(styles.section, className)}>
      <div className={styles.sticky}>
        <h6>Содержание</h6>

        <Spacer y="xl" />

        {headings.length > 0 && !isPending ? (
          <ul className={styles.list}>
            {headings.map((item, idx) => (
              <li key={idx}>
                <Link truncate href={'#' + item.id} className={styles.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}

const Loading = ({ style, className }: StyleProps) => (
  <div style={style} className={cn(styles.loading, className)}>
    {Array.from({ length: 4 }).map((_, idx) => (
      <Skeleton key={idx} className={styles.skeleton} />
    ))}
  </div>
)

const styles = {
  section: '',
  sticky: 'sticky top-28',
  list: 'list-none space-y-2',
  link: 'font-gilroy hover:text-dark hover:underline focus:text-dark',

  loading: 'space-y-5',
  skeleton: 'h-6 w-full',
}

export { ToC }
