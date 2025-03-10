import { BaseIcon, type IconElement } from './_base'

const HeartIcon: IconElement = ({ size = '1em', ...props }) => (
  <BaseIcon {...props} size={size} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export { HeartIcon }
