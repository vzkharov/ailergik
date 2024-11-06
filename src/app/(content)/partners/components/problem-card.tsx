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

    <h5 className="mt-4 font-helveticaMedium text-3xl">{title}</h5>
    <p className="mt-2 font-helveticaLight text-xl">{description}</p>
  </article>
)

export { ProblemCard }
