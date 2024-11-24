import { tv, type VariantProps } from 'tailwind-variants'

import type { MergeWithHTMLProps } from '~/lib/types'

type SpacerProps = MergeWithHTMLProps<
  'div',
  SpacerVariants & {
    children?: never
  }
>

const Spacer = ({ x, y, full, style, className, ...props }: SpacerProps) => (
  <div
    {...props}
    aria-hidden
    className={spacerVariants({ x, y, full, className })}
    style={{
      marginTop: typeof y === 'number' ? y : undefined,
      marginLeft: typeof x === 'number' ? x : undefined,
      ...style,
    }}
  />
)

const spacerVariants = tv({
  base: 'relative select-none',
  variants: {
    y: {
      xs: 'mt-xs',
      sm: 'mt-sm',
      md: 'mt-md',
      lg: 'mt-lg',
      xl: 'mt-xl',
      '2xl': 'mt-2xl',
      '3xl': 'mt-3xl',
      '4xl': 'mt-4xl',
      auto: 'mt-auto',
    },
    x: {
      xs: 'ml-xs',
      sm: 'ml-sm',
      md: 'ml-md',
      lg: 'ml-lg',
      xl: 'ml-xl',
      '2xl': 'ml-2xl',
      '3xl': 'ml-3xl',
      '4xl': 'ml-4xl',
      auto: 'ml-auto',
    },
    full: {
      true: 'flex-1',
      false: '',
    },
  },
})

type SpacerVariants = VariantProps<typeof spacerVariants>

export { Spacer }
export type { SpacerProps }
