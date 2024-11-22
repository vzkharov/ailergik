/** @todo */

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import Image from 'next/image'

import { Text } from '~/components/ui/text'

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
    <Text className="font-helveticaItalicLight text-base text-center">
      {title}
    </Text>
  </article>
)

export { DoctorCard }
