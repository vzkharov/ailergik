import { tv, type VariantProps } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'

import type { Post } from '~/controllers/posts'

import { BigCard } from '~/components/(cards)/big-card'
import { CoverCard } from '~/components/(cards)/cover-card'
import { BentoCard } from '~/components/(cards)/bento-card'
import { SmallCard } from '~/components/(cards)/small-card'
import { MediumCard } from '~/components/(cards)/medium-card'

type PostCardProps = StyleProps &
  Variants & {
    post: Post
    index: number
  }

const PostCard = ({ post, view, index, style, className }: PostCardProps) => {
  const props = {
    index,
    style,
    href: ['', post.topic.slug, post.section.slug, post.slug].join('/'),
    title: post.name,
    image: post.cover,
    description: post.description,
    className: variants({ view, className }),
  }

  if (view === 'big') {
    return <BigCard {...props} detailLabel="Читать статью" />
  }

  if (view === 'medium') {
    return <MediumCard {...props} />
  }

  if (view === 'small') {
    return <SmallCard {...props} />
  }

  if (view === 'cover') {
    return <CoverCard {...props} detailLabel="Подробнее" />
  }

  if (view === 'bento') {
    return <BentoCard {...props} />
  }

  return null
}

const variants = tv({
  base: '',
  variants: {
    view: {
      big: 'h-[385px]',
      medium: 'h-[464px]',
      small: '',
      cover: 'h-[550px]',
      bento: '',
    },
  },
})

type Variants = VariantProps<typeof variants>

export { PostCard }
