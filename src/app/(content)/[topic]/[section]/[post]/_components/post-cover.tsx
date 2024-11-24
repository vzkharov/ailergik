import { tv } from 'tailwind-variants'

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
  <div style={style} className={cn(styles.root(), className)}>
    <CoverCard
      title={post.name}
      image={post.cover}
      description={post.description}
      className={styles.image()}
    />

    <div className={styles.buttonWrapper()}>
      <Button
        variant="default"
        icon={<YouTubeIcon />}
        className={styles.button()}
      >
        Смотреть видео
      </Button>
    </div>
  </div>
)

const styles = tv({
  slots: {
    root: 'relative',
    image: 'h-[480px] cursor-auto select-none',
    buttonWrapper:
      'absolute right-0 top-0 rounded-bl-md bg-background pb-3.5 pl-6',
    button: 'gap-x-2 px-12 text-xs font-medium uppercase',
  },
})()

export { PostCover }
