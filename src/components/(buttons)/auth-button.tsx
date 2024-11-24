import { cn } from '~/lib/utils'

import { UserIcon } from '~/components/ui/icons/user'
import { Button, type ButtonProps } from '~/components/ui/button'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { EntryForm } from '../(dialog-forms)/entry-form'

const AuthButton = ({
  className,
  children = 'ВХОД',
  variant = 'outline',
  ...props
}: ButtonProps) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button
        variant={variant}
        {...props}
        icon={<UserIcon className="h-5 w-5" />}
        className={cn('px-6', className)}
      >
        {children}
      </Button>
    </DialogTrigger>
    <EntryForm />
  </Dialog>
)

export { AuthButton }
