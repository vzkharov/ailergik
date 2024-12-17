import OTPInput, { type OTPInputProps } from 'react-otp-input'

import { Input } from '~/components/ui/input'

type OtpInputProps = Pick<
  OTPInputProps,
  | 'value'
  | 'placeholder'
  | 'onPaste'
  | 'onChange'
  | 'numInputs'
  | 'shouldAutoFocus'
>

const OtpInput = (props: OtpInputProps) => (
  <OTPInput {...defaultProps} {...props} />
)

const defaultProps = {
  numInputs: 4,
  shouldAutoFocus: true,

  inputStyle: {
    fontSize: '40px',
    backgroundColor: 'transparent',
  },

  renderInput: props => (
    <Input
      {...props}
      className="h-20 !w-16 rounded-md border border-foreground font-gilroy text-3xl font-medium focus:!ring-2 focus:!ring-offset-0"
    />
  ),
  renderSeparator: () => <span className="w-4" />,
} satisfies Partial<OTPInputProps>

export { OtpInput }
export type { OtpInputProps }
