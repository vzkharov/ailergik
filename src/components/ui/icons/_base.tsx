import * as React from 'react'

import { cn } from '~/lib/utils'

type HTMLSvgAttributes = React.SVGProps<SVGSVGElement>

type IconProps = Omit<HTMLSvgAttributes, 'fill'> & {
  fill?: boolean
  size?: number | string
}

type IconElement = React.FC<IconProps>

const BaseIcon: IconElement = ({
  className,
  size = '1em',
  fill = false,
  strokeWidth = 1,
  viewBox = '0 0 24 24',
  ...props
}) => (
  <svg
    strokeLinecap="round"
    strokeLinejoin="round"
    stroke="currentColor"
    {...props}
    viewBox={viewBox}
    fill={fill ? 'currentColor' : 'none'}
    className={cn('transition-transform', className)}
    strokeWidth={strokeWidth}
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
  />
)

export { BaseIcon }
export type { IconElement, IconProps }
