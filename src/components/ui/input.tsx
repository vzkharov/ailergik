import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import type { ReactChildren } from '~/lib/types'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  InputVariants & {
    endContent?: ReactChildren
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, endContent, ...props }, ref) => (
    <div className="relative flex">
      <input
        ref={ref}
        type={type}
        className={inputVariants({ variant, className })}
        {...props}
      />
      <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2">
        {endContent}
      </div>
    </div>
  ),
)
Input.displayName = 'Input'

const inputVariants = cva(
  [
    'flex h-10 w-full py-2 text-sm ring-offset-background',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'focus-visible:outline-none',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        solid: [
          'px-3 py-5 rounded-full bg-background ',
          'focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2',
          'placeholder:italic placeholder:text-muted-foreground',
        ],
        outline: [
          'bg-transparent border-b border-foreground',
          'font-medium font-foreground',
          'placeholder:font-medium placeholder:uppercase placeholder:not-italic placeholder:text-foreground',
        ],
      },
    },
    defaultVariants: {
      variant: 'solid',
    },
  },
)

type InputVariants = VariantProps<typeof inputVariants>

export { Input }
