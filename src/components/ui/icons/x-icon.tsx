import type { IconElement } from './types'

const XIcon: IconElement = ({ size = 20, strokeWidth = 2, ...props }) => (
  <svg
    {...props}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    stroke="currentColor"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

export { XIcon }
