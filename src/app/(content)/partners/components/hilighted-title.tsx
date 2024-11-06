import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

type HighlightedTitleProps = StyleProps & {
  children: React.ReactNode
}

const HighlightedTitle = ({
  children,
  style,
  className,
}: HighlightedTitleProps) => (
  <h3
    style={style}
    className={cn(
      'relative mx-auto block w-fit max-w-[740px] text-center font-helveticaMedium text-4xl uppercase',
      className,
    )}
  >
    <span className="absolute -right-2 bottom-0 -z-10 h-6 w-[96%] rounded-md bg-[#9ED8F6]" />
    {children}
  </h3>
)

export { HighlightedTitle }
