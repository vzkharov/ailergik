import Image from 'next/image'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'
import type { DirectusFile } from '~/lib/directus/_generated'

type DirectusImageProps = StyleProps & {
  fill?: boolean
  image: DirectusFile
  loading?: 'lazy' | 'eager' | undefined
}

const DirectusImage = ({
  style,
  image,
  className,
  fill = false,
  loading = 'lazy',
}: DirectusImageProps) => (
  <Image
    style={style}
    loading={loading}
    alt={image.title || ''}
    src={['https://cms.allergik.by/assets', image.id].join('/')}
    width={image.width ?? 1000}
    height={image.height ?? 1000}
    className={cn(
      'object-cover',
      fill ? 'pointer-events-none absolute inset-0 h-full w-full' : '',
      className,
    )}
  />
)

export { DirectusImage }
export type { DirectusImageProps }
