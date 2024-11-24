/** @todo */

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'
import type { DirectusFile } from '~/lib/directus/_generated'

import { DetailButton } from '~/components/(buttons)/detail-button'
import { DirectusImage } from '~/components/(images)/directus-image'
import Link from 'next/link'

type BigCardProps = StyleProps & {
  href: string
  image: DirectusFile
  title: string
  description?: string | null | undefined
  detailLabel?: string
}

const BigCard = ({
  href,
  image,
  title,
  style,
  className,
  description,
  detailLabel = 'Подробнее',
}: BigCardProps) => (
  <article
    style={style}
    className={cn(
      'rounded-2xl relative flex justify-between gap-4 max-md:flex-col-reverse md:items-stretch md:gap-24',
      className,
    )}
  >
    <div className="flex flex-col gap-y-md">
      <h3 className="max-w-[550px] text-start leading-none">{title}</h3>
      {description ? (
        <p className="max-w-[550px] text-[18px] leading-snug">{description}</p>
      ) : null}
      <Link href={href} className="mt-auto w-fit">
        <DetailButton
          size="lg"
          variant="default"
          className="rounded-full uppercase"
        >
          {detailLabel}
        </DetailButton>
      </Link>
    </div>
    <DirectusImage
      image={image}
      style={{ width: 550, height: 385 }}
      className="overflow-hidden rounded-md object-cover"
    />
  </article>
)

export { BigCard }
