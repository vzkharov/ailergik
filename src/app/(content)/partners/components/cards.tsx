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
      'absolute bottom-5 left-5 bg-[#E9EEF2CC]/80 backdrop-blur-sm',
      'flex max-w-[480px] flex-col gap-y-4 rounded-2xl p-6 leading-tight',
      className,
    )}
  >
    {children}
  </article>
)

type CardTitleProps = ReactPropsOf<'h6'>

const CardTitle = ({ children, className, ...props }: CardTitleProps) => (
  <h5
    {...props}
    className={cn('font-helveticaMedium text-3xl leading-none', className)}
  >
    {children}
  </h5>
)

type CardDescriptionProps = ReactPropsOf<'p'>

const CardDescription = ({
  children,
  className,
  ...props
}: CardDescriptionProps) => (
  <p {...props} className={cn('max-w-lg font-helveticaLight', className)}>
    {children}
  </p>
)

export { Card, CardTitle, CardDescription }
