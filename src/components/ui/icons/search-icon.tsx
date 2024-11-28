import { IconElement } from './types'

const SearchIcon: IconElement = ({ ...props }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.25 26.25L20.8125 20.8125M23.75 13.75C23.75 19.2728 19.2728 23.75 13.75 23.75C8.22715 23.75 3.75 19.2728 3.75 13.75C3.75 8.22715 8.22715 3.75 13.75 3.75C19.2728 3.75 23.75 8.22715 23.75 13.75Z"
      stroke="#142850"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export { SearchIcon }