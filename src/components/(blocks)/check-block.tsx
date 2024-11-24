import { cn } from '~/lib/utils'
import type { StyleProps, ReactChildren } from '~/lib/types'

import { CheckIcon } from '~/components/ui/icons/check-icon'

type CheckBlockProps = StyleProps & {
  children: ReactChildren
}

const CheckBlock = ({ children, className }: CheckBlockProps) => (
  <div
    className={cn(
      'relative flex items-center gap-x-3 overflow-hidden rounded-xs p-5',
      className,
    )}
  >
    <div className="absolute inset-0 -z-10 bg-topic opacity-50" />
    <CheckIcon />
    <p className="flex-1 text-md font-bold leading-5">{children}</p>
  </div>
)

export { CheckBlock }
