import { cva, type VariantProps } from 'class-variance-authority'

import { renderSplittedText } from '~/helpers/string'
import type { As, MergeWithHTMLProps } from '~/lib/types'

type Props<T extends As> = VariantProps<typeof textVariants> & {
  as?: T
  weight?: React.CSSProperties['fontWeight']
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TextProps<T extends As = any> = MergeWithHTMLProps<T, Props<T>>

const Text = ({
  size,
  color,
  style,
  weight,
  children,
  lineClamp,
  className,
  highlight = false,
  font = 'gilroy',
  bold = false,
  inline = false,
  gradient = false,
  uppercase = false,
  ...props
}: TextProps) => {
  if (!children) {
    return null
  }

  return (
    <p
      {...props}
      style={{ ...style, fontWeight: weight }}
      className={textVariants({
        font,
        bold,
        size,
        color,
        inline,
        highlight,
        gradient,
        lineClamp,
        uppercase,
        className,
      })}
    >
      {typeof children === 'string' ? renderSplittedText(children) : children}
    </p>
  )
}

const Title = (props: TextProps) => <Text uppercase {...props} />

const textVariants = cva('leading-tight flex-none', {
  variants: {
    highlight: {
      true: 'after:absolute after:bottom-0 after:left-2 after:-z-10 after:h-[10px] after:w-0 after:bg-[#9ED8F6] after:rounded-md after:transition-[width] after:duration-300 hover:after:w-[95%]',
    },
    color: {
      inherit: '',

      default: 'text-dark',
      foreground: 'text-white',
      primary: 'text-primary',
      secondary: 'text-secondary',

      link: 'underline hover:text-primary cursor-pointer',

      ghost: 'text-gray-900',
      muted: 'text-gray-700',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
    },
    lineClamp: {
      none: 'line-clamp-none',
      1: 'line-clamp-1',
      2: 'line-clamp-2',
      3: 'line-clamp-3',
      4: 'line-clamp-4',
      5: 'line-clamp-5',
    },

    font: {
      gilroy: 'font-gilroy',
      ['gilroy-bold']: 'font-gilroy-bold',
      bebas: 'font-bebas leading-none',
    },

    bold: {
      true: 'font-gilroy-bold',
    },
    gradient: {
      true: 'text-gradient select-none',
    },
    inline: {
      true: 'inline-block',
    },
    uppercase: {
      true: 'uppercase',
    },
  },
  defaultVariants: {
    size: undefined,
    color: undefined,
    font: 'gilroy',
    lineClamp: 'none',

    highlight: false,
    bold: false,
    inline: false,
    gradient: false,
    uppercase: false,
  },
})

export { Text, Title }
export type { TextProps }
