import { BaseIcon, type IconElement } from './_base'

const UserIcon: IconElement = ({ size = '1em', ...props }) => (
  <BaseIcon {...props} size={size} strokeWidth={1.5} viewBox="0 0 30 30">
    <path
      d="M3.75 25.75C6.66974 22.6532 10.6338 20.75 15 20.75C19.3662 20.75 23.3303 22.6532 26.25 25.75M20.625 10.125C20.625 13.2316 18.1066 15.75 15 15.75C11.8934 15.75 9.375 13.2316 9.375 10.125C9.375 7.0184 11.8934 4.5 15 4.5C18.1066 4.5 20.625 7.0184 20.625 10.125Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export { UserIcon }
