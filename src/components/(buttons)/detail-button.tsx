import { cn } from '~/lib/utils'

import { ArrowIcon } from '~/components/ui/icons/arrow-icon'
import { Button, type ButtonProps } from '~/components/ui/button'

const DetailButton = ({
  className,
  rotate = false,
  variant = 'outline',
  children = 'ПОДРОБНЕЕ',
  ...props
}: ButtonProps & { rotate?: boolean }) => (
  <Button
    {...props}
    variant={variant}
    className={cn('group/detail w-fit gap-x-sm', className)}
    icon={<ArrowIcon className={cn('', rotate ? '-rotate-90' : '')} />}
  >
    {children}
  </Button>
)

export { DetailButton }
