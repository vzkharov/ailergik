import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Image } from '~/components/ui/image'
import { DetailButton } from '~/components/(buttons)/detail-button'

type BlogCardProps = StyleProps & {
  title: string
  description?: string
  img: string
  button?: boolean
}

const BlogCard = ({
  img,
  title,
  description,
  button = false,
  style,
  className,
}: BlogCardProps) => (
  <article
    style={style}
    className={cn('w-full space-y-4 overflow-hidden', className)}
  >
    <Image
      src={img}
      alt={title}
      className={cn(
        'h-[250px] w-auto rounded-xl object-cover md:h-auto md:w-auto',
      )}
    />

    <h3 className=""> {title}</h3>
    {description ? <p className="text-md md:text-lg">{description}</p> : null}
    {button ? <DetailButton className="w-fit">Подробнее</DetailButton> : null}
  </article>
)

export { BlogCard }
