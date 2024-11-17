import { Search } from 'lucide-react'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Button } from '~/components/ui/button'

const SearchButton = ({ style, className }: StyleProps) => (
  <Button
    style={style}
    startContent={<Search className="h-4 w-4" />}
    className={cn(
      'gap-x-sm relative justify-start bg-popover/60 font-normal italic text-muted-foreground hover:bg-popover/80',
      className,
    )}
  >
    Найти по теме...
  </Button>
)

export { SearchButton }
