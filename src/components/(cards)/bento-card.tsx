import Link from 'next/link'

import { cn } from '~/lib/utils'
import type { nullable, StyleProps } from '~/lib/types'
import type { DirectusFile } from '~/lib/directus/_generated'

import { DetailButton } from '~/components/(buttons)/detail-button'
import { DirectusImage } from '~/components/(images)/directus-image'

type BentoCardProps = StyleProps & {
  index: number
  title: string
  image: DirectusFile

  href?: nullable<string>
  button?: nullable<boolean>
  description?: nullable<string>
}

const BentoCard = ({
  index,
  href,
  title,
  image,
  style,
  className,
  description,
}: BentoCardProps) => (
  <article
    style={style}
    className={cn(styles.root, styles.index[index as 0 | 1 | 2], className)}
  >
    <DirectusImage image={image} className={cn(styles.image)} />

    <h3 className={styles.title}>{title}</h3>
    {description ? <p className={styles.description}>{description}</p> : null}
    {href ? (
      <Link href={href} className={styles.link}>
        <DetailButton>Подробнее</DetailButton>
      </Link>
    ) : null}
  </article>
)

const styles = {
  root: 'w-min space-y-md overflow-hidden',
  image: 'h-[360px] w-auto max-w-fit rounded-lg object-cover',
  title: 'max-w-fit line-clamp-2',
  description: 'text-base font-normal md:text-xl line-clamp-2',
  link: 'block [&>*]:w-fit',

  index: {
    0: 'row-span-1',
    1: 'col-start-2 row-span-2 row-start-1 place-self-center',
    2: 'col-span-1 row-span-2 row-start-2 place-content-center',
  },
}

export { BentoCard }
