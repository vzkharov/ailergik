/** @todo */

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Text } from '~/components/ui/text'
import { Image } from '~/components/ui/image'

type DoctorCardProps = StyleProps & {
  img: string
  title: string
}

const DoctorCard = ({ img, title, style, className }: DoctorCardProps) => (
  <article style={style} className={cn('flex flex-col gap-5', className)}>
    <Image
      src={img}
      alt={title}
      width={200}
      height={200}
      className="w-[230px] rounded-full border border-[#142850] p-2"
    />
    <Text className="text-center font-helveticaItalicLight text-base">
      {title}
    </Text>
  </article>
)

export { DoctorCard }
