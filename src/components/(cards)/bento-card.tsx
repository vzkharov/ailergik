import Link from 'next/link'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'
import type { DirectusFile } from '~/lib/directus/_generated'

import { DetailButton } from '~/components/(buttons)/detail-button'
import { DirectusImage } from '~/components/(images)/directus-image'

type BentoCardProps = StyleProps & {
  href?: string
  title: string
  description?: string
  image: DirectusFile
  button?: boolean
}

const BentoCard = ({
  href,
  title,
  image,
  style,
  className,
  description,
}: BentoCardProps) => (
  <article
    style={style}
    className={cn('w-min space-y-md overflow-hidden', className)}
  >
    <DirectusImage
      image={image}
      className={cn('h-[360px] w-auto max-w-fit rounded-lg object-cover')}
    />

    <h3 className="max-w-fit">{title}</h3>
    {description ? (
      <p className="text-base font-normal md:text-xl">{description}</p>
    ) : null}
    {href ? (
      <Link href={href} className="block">
        <DetailButton className="w-fit">Подробнее</DetailButton>
      </Link>
    ) : null}
  </article>
)

export { BentoCard }
