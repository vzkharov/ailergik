'use client'

import { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import type { Post } from '~/controllers/posts'

import { Button } from '~/components/ui/button'
import { ShareIcon } from '~/components/ui/icons/share-icon'
import { BookmarkIcon } from '~/components/ui/icons/bookmark'

import { getUserBookmars, bookmarkPost, incrementViews } from './action'

type PostActionsProps = StyleProps & {
  post: Pick<Post, 'id' | 'views'>
}

const PostActions = ({ post, style, className }: PostActionsProps) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)

  useEffect(() => {
    getUserBookmars().then(postIds =>
      setIsBookmarked(postIds?.includes(post.id) ?? false),
    )
    incrementViews(post.id, post.views ?? 0)
  }, [post.id, post.views])

  return (
    <div style={style} className={cn('flex flex-row gap-x-5', className)}>
      <Button
        variant="outline"
        onClick={() => bookmarkPost(post.id)}
        icon={
          <BookmarkIcon
            fill={isBookmarked}
            strokeWidth={1.5}
            className={isBookmarked ? 'text-yellow-400' : ''}
          />
        }
        className="gap-x-2 rounded-full px-6 text-xs font-medium uppercase"
      >
        {isBookmarked ? 'Убрать из закладок' : 'В закладки'}
      </Button>

      <Button
        variant="default"
        icon={<ShareIcon />}
        className="gap-x-2 rounded-full px-6 text-xs font-medium uppercase"
      >
        Поделиться
      </Button>

      {post.views ? (
        <div className="pointer-events-none ml-auto flex select-none items-center rounded-full bg-white px-4 text-sm font-medium text-foreground">
          <Eye
            strokeWidth={1.5}
            className="mr-1.5 h-5 w-5 animate-pulse text-foreground/50"
          />
          <span className="mr-1 translate-y-px">
            {post.views?.toLocaleString() || ''}
          </span>
        </div>
      ) : null}
    </div>
  )
}

export { PostActions }
