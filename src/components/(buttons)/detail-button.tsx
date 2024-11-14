import { cn } from '~/lib/utils'

import { ArrowIcon } from '~/components/ui/icons/arrow-icon'
import { Button, type ButtonProps } from '~/components/ui/button'

const DetailButton = ({
  className,
  children = 'ПОДРОБНЕЕ',
  rotate = false,
  ...props
}: Omit<ButtonProps, 'variant'> & { rotate?: boolean }) => (
  <Button {...props} variant="outline" className={cn('w-fit', className)}>
    <div className="translate-y-px uppercase">{children}</div>
    {rotate ? <ArrowIcon className="-rotate-90" /> : <ArrowIcon />}
  </Button>
)

export { DetailButton }
