'use client'

import Image from 'next/image'
import { useState } from 'react'
import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'
import type { DirectusFile } from '~/lib/directus/_generated'
import { getDirectusFileUrl } from '~/lib/directus/utils'

type DirectusImageProps = StyleProps & {
  alt?: string
  fill?: boolean
  image: DirectusFile
  loading?: 'lazy' | 'eager' | undefined
}

const DirectusImage = ({
  alt,
  style,
  image,
  className,
  fill = false,
  loading = 'lazy',
}: DirectusImageProps) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Image
      style={style}
      loading={loading}
      alt={alt || image.title || 'no alt'}
      src={getDirectusFileUrl(image)}
      width={image.width ?? 1280}
      height={image.height ?? 720}
      onLoad={() => setLoaded(true)}
      className={imageVariants({ fill, loaded, className })}
    />
  )
}

const imageVariants = tv({
  base: 'object-cover transition-opacity duration-200 ease-in-out',
  variants: {
    fill: { true: 'pointer-events-none absolute inset-0 h-full w-full' },
    loaded: { true: 'opacity-100', false: 'opacity-0' },
  },
  defaultVariants: {
    fill: false,
    loaded: false,
  },
})

export { DirectusImage }
export type { DirectusImageProps }
