import { cn } from '~/lib/utils'

import { ArrowIcon } from '~/components/ui/icons/arrow-icon'
import { Button, type ButtonProps } from '~/components/ui/button'

const DetailButton = ({
  className,
  children = 'ПОДРОБНЕЕ',
  ...props
}: Omit<ButtonProps, 'variant'>) => (
  <Button {...props} variant="outline" className={cn('w-fit', className)}>
    <div className="translate-y-px uppercase">{children}</div>
    <ArrowIcon />
  </Button>
)
export { DetailButton }
