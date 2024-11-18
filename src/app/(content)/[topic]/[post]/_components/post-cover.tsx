import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import type { Post } from '~/controllers/posts'

import { Button } from '~/components/ui/button'
import { YouTubeIcon } from '~/components/ui/icons/youtube-icon'

import { CoverCard } from '~/components/(cards)/cover-card'

type PostCoverProps = StyleProps & {
  post: Pick<Post, 'cover' | 'name' | 'description'>
}

const PostCover = ({ post, style, className }: PostCoverProps) => (
  <div style={style} className={cn('relative', className)}>
    <CoverCard
      image={post.cover}
      title={post.name}
      description={post.description}
      className="h-[429px]"
    />

    <div className="absolute right-0 top-0 rounded-bl-md bg-[#F7F7F9] pb-3.5 pl-6">
      <Button
        variant="default"
        icon={<YouTubeIcon />}
        className="gap-x-2 px-12 text-xs font-medium uppercase"
      >
        Смотреть видео
      </Button>
    </div>
  </div>
)

export { PostCover }
