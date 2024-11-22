import { ReactChildren, StyleProps } from '~/lib/types'
import { cn } from '~/lib/utils'
import { QuoteIcon } from '../ui/icons/quote-icon'

type QuoteBlockProps = StyleProps & {
  children: ReactChildren
}

const QuoteBlock = ({ className, children }: QuoteBlockProps) => (
  <div
    className={cn(
      'flex flex-col items-start gap-y-3 rounded-xs bg-white p-6',
      className,
    )}
  >
    <QuoteIcon className="self-start" />
    {children}
    <QuoteIcon className="rotate-180 self-end" />
  </div>
)

export { QuoteBlock }
