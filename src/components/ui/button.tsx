import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/lib/utils'
import type { ReactChildren } from '~/lib/types'

const buttonVariants = cva(
  [
    'inline-flex flex-row items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    '',
    'active:scale-[0.98] transition-all',
  ],
  {
    variants: {
      variant: {
        default:
          'font-medium bg-foreground text-background hover:bg-foreground/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'uppercase border border-foreground text-foreground bg-transparent gap-x-3 !px-6 py-3  hover:text-white hover:bg-foreground',
        colored:
          'bg-[#142850] text-white font-helveticaLight uppercas !px-7 !py-5',
        regular:
          'uppercase border border-foreground text-foreground bg-transparent gap-x-3 !px-6 py-3 ',
        otp: 'cursor-pointer border-0 !px-0 font-helvetica text-xs font-bold underline',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',

        ghost: '!px-0 font-medium ',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-9 w-9',
      },
      readOnly: {
        true: 'pointer-events-none',
      },
    },
    defaultVariants: {
      readOnly: false,
      size: 'default',
      variant: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean

  icon?: ReactChildren
  startContent?: ReactChildren
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      icon,
      title,
      readOnly,
      children,
      startContent,
      className,
      size = 'default',
      variant = 'default',
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ size, variant, readOnly, className }))}
        ref={ref}
        title={title}
        aria-label={title}
        {...props}
      >
        {startContent ? (
          <span className="flex-none">{startContent}</span>
        ) : null}
        <span className="translate-y-[1.5px]">{children}</span>
        {icon ? <span className="flex-none">{icon}</span> : null}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
