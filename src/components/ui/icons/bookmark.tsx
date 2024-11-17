import { BaseIcon, type IconElement } from './_base'

const BookmarkIcon: IconElement = ({ size = '1em', ...props }) => (
  <BaseIcon {...props} size={size} viewBox="0 0 30 30">
    <path
      d="M6.25 9.75C6.25 7.6498 6.25 6.5997 6.65873 5.79754C7.01825 5.09193 7.59193 4.51825 8.29754 4.15873C9.0997 3.75 10.1498 3.75 12.25 3.75H17.75C19.8502 3.75 20.9003 3.75 21.7025 4.15873C22.4081 4.51825 22.9817 5.09193 23.3413 5.79754C23.75 6.5997 23.75 7.6498 23.75 9.75V26.25L15 21.25L6.25 26.25V9.75Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export { BookmarkIcon }
