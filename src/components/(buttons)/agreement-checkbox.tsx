import { StyleProps } from '~/lib/types'

import { cn } from '~/lib/utils'
import { Link } from '../ui/link'
import { Text } from '../ui/text'
import { Checkbox, CheckboxProps } from '../ui/checkbox'

type AgreementCheckboxProps = Pick<CheckboxProps, 'id' | 'name' | 'required'> &
  StyleProps & {
    text: string
    legal: string
    href: string
  }

const AgreementCheckbox = ({
  id,
  text,
  legal,
  href,
  className,
  ...props
}: AgreementCheckboxProps) => (
  <div className="flex items-center gap-x-3">
    <Checkbox defaultChecked {...props} id={id} />
    <Text
      size="xs"
      htmlFor={id}
      className={cn('min-w-0 max-w-fit select-none font-normal', className)}
    >
      {text}&nbsp;
      <Link
        className="w-fit cursor-pointer font-helvetica text-xs font-bold underline"
        href={href}
      >
        {legal}
      </Link>
    </Text>
  </div>
)

export { AgreementCheckbox }
