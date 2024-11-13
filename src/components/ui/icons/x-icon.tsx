import type { IconElement } from './types'

const XIcon: IconElement = ({ ...props }) => (
  <svg
    width="20"
    height="20"
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 5L5 15M5 5L15 15"
      stroke="#142850"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export { XIcon }
