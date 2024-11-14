import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Image } from '~/components/ui/image'

type ProblemCardProps = StyleProps & {
  title: string
  description: string
  img: string
}

const ProblemCard = ({
  img,
  title,
  description,
  style,
  className,
}: ProblemCardProps) => (
  <article style={style} className={cn('w-full overflow-hidden', className)}>
    <Image src={img} alt={title} className="w-full rounded-lg object-cover" />

    <h3 className="mt-4">{title}</h3>
    <p className="mt-2 font-helveticaLight text-base md:text-xl">
      {description}
    </p>
  </article>
)

export { ProblemCard }
