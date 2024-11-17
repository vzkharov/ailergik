import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & InputVariants

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={inputVariants({ variant, className })}
      {...props}
    />
  ),
)
Input.displayName = 'Input'

const inputVariants = cva(
  [
    'flex h-10 w-full py-2 text-sm ring-offset-background',
    'placeholder:text-muted-foreground placeholder:italic',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'focus-visible:outline-none',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        solid:
          'px-3 rounded-full bg-background focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2',
        outline: 'bg-transparent border-b border-foreground',
      },
    },
    defaultVariants: {
      variant: 'solid',
    },
  },
)

type InputVariants = VariantProps<typeof inputVariants>

export { Input }
