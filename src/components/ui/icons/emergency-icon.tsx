import { BaseIcon, type IconElement } from './_base'

const EmergencyIcon: IconElement = ({ size = '1.5em', ...props }) => (
  <BaseIcon {...props} fill size={size} strokeWidth={0} viewBox="0 0 28 28">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.63499 8.60408H4.66699C2.45766 8.60408 0.666992 10.3947 0.666992 12.6041V15.3014C0.666992 17.5107 2.45766 19.3014 4.66699 19.3014H8.63499V23.2987C8.63499 25.5081 10.4257 27.2987 12.635 27.2987H15.3323C17.5417 27.2987 19.3323 25.5081 19.3323 23.2987V19.3014H23.3337C25.543 19.3014 27.3337 17.5107 27.3337 15.3014V12.6041C27.3337 10.3947 25.543 8.60408 23.3337 8.60408H19.3323V4.66675C19.3323 2.45741 17.5417 0.666748 15.3323 0.666748H12.635C10.4257 0.666748 8.63499 2.45741 8.63499 4.66675V8.60408ZM9.96832 11.2707C10.7043 11.2707 11.3017 10.6734 11.3017 9.93741V4.66675C11.3017 3.92941 11.8977 3.33341 12.635 3.33341H15.3323C16.0683 3.33341 16.6657 3.92941 16.6657 4.66675V9.93741C16.6657 10.6734 17.2617 11.2707 17.999 11.2707H23.3337C24.0697 11.2707 24.667 11.8667 24.667 12.6041V15.3014C24.667 16.0374 24.0697 16.6347 23.3337 16.6347H17.999C17.2617 16.6347 16.6657 17.2307 16.6657 17.9681V23.2987C16.6657 24.0361 16.0683 24.6321 15.3323 24.6321H12.635C11.8977 24.6321 11.3017 24.0361 11.3017 23.2987V17.9681C11.3017 17.2307 10.7043 16.6347 9.96832 16.6347H4.66699C3.93099 16.6347 3.33366 16.0374 3.33366 15.3014V12.6041C3.33366 11.8667 3.93099 11.2707 4.66699 11.2707H9.96832Z"
    />
  </BaseIcon>
)

export { EmergencyIcon }