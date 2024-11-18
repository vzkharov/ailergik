import { IconElement } from './types'

const NoteIcon: IconElement = ({ ...props }) => (
  <svg
    width="20"
    height="20"
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.16602 6.5C4.16602 5.09987 4.16602 4.3998 4.4385 3.86502C4.67818 3.39462 5.06063 3.01217 5.53104 2.77248C6.06582 2.5 6.76588 2.5 8.16602 2.5H11.8327C13.2328 2.5 13.9329 2.5 14.4677 2.77248C14.9381 3.01217 15.3205 3.39462 15.5602 3.86502C15.8327 4.3998 15.8327 5.09987 15.8327 6.5V17.5L9.99935 14.1667L4.16602 17.5V6.5Z"
      stroke="#142850"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export { NoteIcon }
