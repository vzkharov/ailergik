/** @todo */

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Image } from '~/components/ui/image'
import { DetailButton } from '~/components/(buttons)/detail-button'

type ServiceCardProps = StyleProps & {
  img: string
  title: string
}

const ServiceCard = ({ img, title, style, className }: ServiceCardProps) => (
  <article
    style={style}
    className={cn(
      'relative flex gap-4 rounded-2xl max-md:flex-col-reverse md:items-stretch md:gap-24',
      className,
    )}
  >
    <div className="flex flex-col">
      <h3 className="mb-5 max-w-[550px] text-start leading-tight md:mb-auto md:mt-auto">
        {title}
      </h3>
      <DetailButton className="w-fit group-[[data-state=open]]/accordion-trigger:invisible" />
    </div>
    <Image
      src={img}
      alt={title}
      width={550}
      height={385}
      style={{ width: 550, height: 385 }}
      className="overflow-hidden rounded-2xl object-cover"
    />
  </article>
)

export { ServiceCard }
