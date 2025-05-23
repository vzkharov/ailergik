/** @todo */

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Image } from '~/components/ui/image'

import { Card, CardTitle } from './cards'

type BenefitCardProps = StyleProps & {
  img: string
  title: string
  card?: { title: string }
}

const BenefitCard = ({
  img,
  title,
  card,
  style,
  className,
}: BenefitCardProps) => (
  <article style={style} className={cn('flex items-stretch gap-5', className)}>
    <div className="relative overflow-hidden rounded-xl md:flex-1">
      <Image
        alt={title}
        src={img}
        width={1128}
        height={572}
        className="object-[30%] max-md:h-full max-md:rounded-xl"
      />
      <Card className="max-md:inset-x-2 max-md:bottom-2">
        <CardTitle>{title}</CardTitle>
      </Card>
    </div>
    {card ? (
      <div className="flex items-center justify-center rounded-xl bg-[#9ED8F6] p-6 text-left md:w-1/3">
        <h3 className="leading-[1.1]">{card.title}</h3>
      </div>
    ) : null}
  </article>
)

export { BenefitCard }
