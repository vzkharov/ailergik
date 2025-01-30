import { useFormStatus } from 'react-dom'

import { cn } from '~/lib/utils'

import { Button, type ButtonProps } from '~/components/ui/button'

const SubmitButton = ({
  children,
  className,
  variant = 'outline',
  ...props
}: ButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <Button
      {...props}
      disabled={pending}
      variant={variant}
      className={cn('', className)}
    >
      {pending ? 'Идет отправка...' : children}
    </Button>
  )
}

export { SubmitButton }
