import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import type { PostPreview as Type } from '~/controllers/posts'

type PostProps = Type

const PostPreview: React.FC<PostProps> = ({
  slug,
  name,
  topic,
  description,
  cover,
}) => {
  return (
    <div className="relative flex w-full flex-col gap-y-3 rounded-xl">
      <Image
        alt={name}
        src={'https://cms.allergik.by/assets' + '/' + cover.id}
        width={400}
        height={200}
        className="aspect-video w-full rounded-xl"
      />
      <h4 className="capitilize text-xl font-semibold">{name}</h4>
      <p className="line-clamp-2">{description}</p>

      <Link
        href={['', topic.slug, slug].join('/')}
        className="absolute inset-0 bg-white opacity-0 transition-opacity hover:opacity-40 focus:opacity-40"
      />
    </div>
  )
}

export { PostPreview }
