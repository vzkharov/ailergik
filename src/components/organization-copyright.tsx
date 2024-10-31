import { getCurrentYear } from '~/helpers/date'

import { Text, type TextProps } from '~/components/ui/text'

const OrganizationCopyright = (props: Omit<TextProps, 'children'>) => (
  <Text size="xs" color="muted" {...props}>
    Copyright {getCurrentYear()} © ...
  </Text>
)

export { OrganizationCopyright }
