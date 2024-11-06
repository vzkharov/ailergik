/** @todo */

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { DetailButton } from '~/components/(buttons)/detail-button'

type TopicCardProps = StyleProps & {
  title: string
  color: string
  description: string

  content: string
}

const TopicCard = ({
  title,
  description,
  style,
  className,
}: TopicCardProps) => (
  <article
    style={style}
    className={cn(
      'flex items-center gap-2 rounded-2xl border border-current p-6',
      className,
    )}
  >
    <div className="flex-1 space-y-1 self-start">
      <p className="flex w-full items-center justify-between font-helveticaItalicLight text-sm md:text-base">
        {description}
      </p>
      <h6 className="font-helveticaMedium text-2xl">{title}</h6>
    </div>
    <DetailButton className="border-none max-md:[&>div]:hidden" />
  </article>
)

export { TopicCard }
