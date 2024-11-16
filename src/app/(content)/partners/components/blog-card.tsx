import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Image } from '~/components/ui/image'
import { DetailButton } from '~/components/(buttons)/detail-button'

type BlogCardProps = StyleProps & {
  title: string
  description?: string
  img: string
  button?: boolean
  imageClassName: string
}

const BlogCard = ({
  img,
  title,
  description,
  button = false,
  style,
  imageClassName,
  className,
}: BlogCardProps) => (
  <article
    style={style}
    className={cn(
      'w-full space-y-4 overflow-hidden',
      className,
      imageClassName,
    )}
  >
    <Image
      src={img}
      alt={title}
      className={cn('rounded-lg object-cover', imageClassName)}
    />

    <h3> {title}</h3>
    {description ? (
      <p className="font-helveticaLight text-base md:text-xl">{description}</p>
    ) : null}
    {button ? <DetailButton className="w-fit">Подробнее</DetailButton> : null}
  </article>
)

export { BlogCard }
