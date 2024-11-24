import { cn } from '~/lib/utils'
import type { StyleProps, ReactChildren } from '~/lib/types'

type ListBlockProps = StyleProps & {
  children: ReactChildren
}

const ListBlock = ({ className, children }: ListBlockProps) => (
  <div
    className={cn(
      'relative flex w-full flex-col gap-y-10 rounded-xs bg-white p-6',
      className,
    )}
  >
    <div className="absolute inset-y-5 -left-1 w-2 rounded-xl rounded-tl-md bg-topic opacity-50" />
    {children}
  </div>
)

export { ListBlock }
