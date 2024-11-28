import { BaseIcon, type IconElement } from './_base'

const BookmarkIcon: IconElement = ({ size = '1.5em', ...props }) => (
  <BaseIcon {...props} size={size} viewBox="0 0 20 20">
    <path
      d="M4.16669 6.5C4.16669 5.09987 4.16669 4.3998 4.43917 3.86502C4.67885 3.39462 5.06131 3.01217 5.53171 2.77248C6.06649 2.5 6.76656 2.5 8.16669 2.5H11.8334C13.2335 2.5 13.9336 2.5 14.4683 2.77248C14.9387 3.01217 15.3212 3.39462 15.5609 3.86502C15.8334 4.3998 15.8334 5.09987 15.8334 6.5V17.5L10 14.1667L4.16669 17.5V6.5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export { BookmarkIcon }
