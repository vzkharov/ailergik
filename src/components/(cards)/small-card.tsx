import Link from 'next/link'
import { tv } from 'tailwind-variants'
import { ArrowRight } from 'lucide-react'

import type { StyleProps } from '~/lib/types'
import { DirectusFile } from '~/lib/directus/_generated'

import { Button } from '~/components/ui/button'
import { DirectusImage } from '~/components/(images)/directus-image'

type SmallCardProps = StyleProps & {
  href: string
  title: string
  image: DirectusFile
}

const SmallCard = ({
  href,
  image,
  title,
  style,
  className,
}: SmallCardProps) => (
  <article style={style} className={styles.root({ className })}>
    <DirectusImage image={image} className={styles.image()} />
    <h5 className={styles.title()}>{title}</h5>

    <div className={styles.footer()}>
      <Button
        variant="ghost"
        className={styles.button()}
        icon={<ArrowRight className={styles.buttonIcon()} />}
      >
        Читать
      </Button>
    </div>

    <Link href={href} className={styles.link()} />
  </article>
)

const styles = tv({
  slots: {
    root: 'group relative flex w-full cursor-pointer flex-col',
    image: 'aspect-[4/3] w-full rounded-sm object-cover',
    title: 'mt-md line-clamp-2 text-sm',
    footer: 'mt-auto',
    button: 'gap-x-1',
    buttonIcon: 'h-4 w-4 transition-all',
    link: 'absolute inset-0 bg-background opacity-0 transition-all group-hover:opacity-30',
  },
})()

export { SmallCard }
