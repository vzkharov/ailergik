import { cn } from '~/lib/utils'
import type { StyleProps, ReactChildren, ReactPropsOf } from '~/lib/types'

type CardProps = StyleProps & {
  children?: ReactChildren
  endContent?: ReactChildren
  startContent?: ReactChildren
}

const Card = ({ children, className }: CardProps) => (
  <article
    className={cn(
      'absolute bottom-2 left-2 bg-[#E9EEF2CC]/80 backdrop-blur-sm',
      'flex max-w-[500px] flex-col gap-y-4 rounded-3xl p-6 leading-tight',
      className,
    )}
  >
    {children}
  </article>
)

type CardTitleProps = ReactPropsOf<'h3'>

const CardTitle = ({ children, className, ...props }: CardTitleProps) => (
  <h3 {...props} className={cn('', className)}>
    {children}
  </h3>
)

type CardDescriptionProps = ReactPropsOf<'h5'>

const CardDescription = ({
  children,
  className,
  ...props
}: CardDescriptionProps) => (
  <h5 {...props} className={cn('max-w-lg', className)}>
    {children}
  </h5>
)

export { Card, CardTitle, CardDescription }
