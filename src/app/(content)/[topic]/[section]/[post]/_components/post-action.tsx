import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Button } from '~/components/ui/button'
import { ShareIcon } from '~/components/ui/icons/share-icon'
import { BookmarkIcon } from '~/components/ui/icons/bookmark'

const PostActions = ({ style, className }: StyleProps) => (
  <div style={style} className={cn('flex flex-row space-x-5', className)}>
    <Button
      variant="outline"
      icon={<BookmarkIcon strokeWidth={1.5} />}
      className="gap-x-2 rounded-full px-6 text-xs font-medium uppercase"
    >
      В закладки
    </Button>

    <Button
      variant="default"
      icon={<ShareIcon />}
      className="gap-x-2 rounded-full px-6 text-xs font-medium uppercase"
    >
      Поделиться
    </Button>
  </div>
)

export { PostActions }
