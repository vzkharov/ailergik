import Link from 'next/link'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'
import type { DirectusFile } from '~/lib/directus/_generated'

import { DetailButton } from '~/components/(buttons)/detail-button'
import { DirectusImage } from '~/components/(images)/directus-image'

import { OverlayCard } from './overlay-card'

type CoverCardProps = StyleProps & {
  image: DirectusFile
  title: string
  href?: string
  description?: string | null | undefined

  detailLabel?: string
}

const CoverCard = (props: CoverCardProps) => {
  const {
    href,
    title,
    description,
    image,
    style,
    className,
    detailLabel = 'Перейти',
  } = props

  return (
    <article style={style} className={cn(styles.root, className)}>
      <DirectusImage fill image={image} className="!object-cover" />

      <OverlayCard
        title={title}
        description={description ?? undefined}
        className={cn('absolute bottom-sm left-sm w-2/3')}
      >
        {href ? (
          <Link href={href}>
            <DetailButton>{detailLabel}</DetailButton>
          </Link>
        ) : null}
      </OverlayCard>
    </article>
  )
}

const styles = {
  root: 'group relative overflow-hidden rounded-md cursor-pointer',
  cover: 'pointer-events-none absolute inset-0',
}

export { CoverCard }
