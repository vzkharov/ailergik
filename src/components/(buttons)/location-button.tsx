import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Button } from '~/components/ui/button'
import { LocationIcon } from '~/components/ui/icons/location'

const LocationButton = ({ style, className }: StyleProps) => (
  <Button
    style={style}
    variant="ghost"
    startContent={<LocationIcon className="h-7 w-7" />}
    className={cn('gap-sm font-normal', className)}
  >
    Новополоцк
  </Button>
)

export { LocationButton }
