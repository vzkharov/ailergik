import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Button } from '~/components/ui/button'

const NavigationButton = ({ style, className }: StyleProps) => (
  <Button
    style={style}
    variant="outline"
    className={cn('flex items-center gap-2', className)}
  >
    МЕНЮ
  </Button>
)

export { NavigationButton }
