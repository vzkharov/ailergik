import { IconElement } from './types'

const MenuIcon: IconElement = ({ ...props }) => (
  <svg
    width="20"
    height="20"
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5"
      stroke="#142850"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export { MenuIcon }
