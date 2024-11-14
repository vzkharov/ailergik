import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Title } from '~/components/ui/text'

type HighlightedTitleProps = StyleProps & {
  children: React.ReactNode
  spanclassName?: string
}

const HighlightedTitle = ({
  children,
  style,
  className,
}: HighlightedTitleProps) => (
  <Title
    style={style}
    highlighted
    uppercase
    className={cn(
      'relative mx-auto block w-fit max-w-[740px] text-center font-helveticaMedium text-2xl max-md:max-w-[300px] md:text-4xl',
      className,
    )}
  >
    {children}
  </Title>
)

export { HighlightedTitle }
