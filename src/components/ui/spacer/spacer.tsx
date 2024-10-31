import { cn } from '~/lib/utils'
import type { MergeWithHTMLProps } from '~/lib/types'

import styles from './styles.module.css'

type SpacerProps = MergeWithHTMLProps<
  'div',
  Partial<{
    full: boolean

    x: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'auto'
    y: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'auto'

    children: never
  }>
>

const Spacer = ({ x, y, full, style, className, ...props }: SpacerProps) => (
  <div
    {...props}
    aria-hidden
    style={{
      marginTop: typeof y === 'number' ? y : undefined,
      marginLeft: typeof x === 'number' ? x : undefined,
      ...style,
    }}
    className={cn(
      'relative, select-none',
      styles.spacer,
      styles[`y_${y}`],
      styles[`x_${x}`],
      full ? styles.full : '',
      className,
    )}
  />
)

export { Spacer }
export type { SpacerProps }
