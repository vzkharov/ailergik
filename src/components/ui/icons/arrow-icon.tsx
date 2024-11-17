import { BaseIcon, type IconElement } from './_base'

const ArrowIcon: IconElement = ({ size = '1em', ...props }) => (
  <BaseIcon {...props} size={size} viewBox="0 0 14 14">
    <path
      d="M1.1665 6.99935H12.8332M12.8332 6.99935L6.99984 1.16602M12.8332 6.99935L6.99984 12.8327"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export { ArrowIcon }
