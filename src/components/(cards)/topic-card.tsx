import Link from 'next/link'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'
import type { Topic } from '~/lib/directus/_generated'

import { DetailButton } from '~/components/(buttons)/detail-button'
import { DirectusImage } from '~/components/(images)/directus-image'

import { OverlayCard } from './overlay-card'

type TopicCardProps = StyleProps & {
  image?: boolean

  topic: Pick<Topic, 'color' | 'slug' | 'description' | 'name'> & {
    cover: Exclude<Topic['cover'], string>
  }
}

const TopicCard = (props: TopicCardProps) => {
  const { topic, style, className, image = false } = props

  return (
    <article style={style} className={cn(styles.root, className)}>
      {image ? (
        <DirectusImage fill image={topic.cover} />
      ) : (
        <div
          style={{ backgroundColor: image ? 'transparent' : topic.color }}
          className="pointer-events-none absolute inset-0 opacity-40"
        />
      )}

      <OverlayCard
        title={topic.name}
        description={topic.description}
        className={cn(
          'w-2/3',
          image
            ? 'bottom-sm left-sm absolute'
            : 'relative !bottom-0 !left-0 h-full w-full bg-transparent',
        )}
      >
        <Link href={'/' + topic.slug}>
          <DetailButton>Перейти</DetailButton>
        </Link>
      </OverlayCard>
    </article>
  )
}

const styles = {
  root: 'group relative overflow-hidden rounded-md cursor-pointer',
  cover: 'pointer-events-none absolute inset-0',
}

export { TopicCard }
