import type { StyleProps } from '~/lib/types'

import { cn } from '~/lib/utils'

import { Text } from '~/components/ui/text'
import { Button } from '~/components/ui/button'

type CookiesBannerProps = StyleProps & {
  confirm?: (event: React.FormEvent<HTMLFormElement>) => unknown
}

const CookiesBanner = ({ style, confirm, className }: CookiesBannerProps) => (
  <form
    style={style}
    className={cn(styles.wrapper, className)}
    onSubmit={event => {
      event.preventDefault()
      confirm?.(event)
    }}
  >
    <Text className={styles.text}>
      Мы используем cookies, чтобы обеспечить вам максимальное удобство.
    </Text>

    <Button size="sm" type="submit" className={styles.confirmButton}>
      Ок
    </Button>
  </form>
)

const styles = {
  wrapper:
    'flex flex-col sm:flex-row items-center gap-3 sm:rounded-lg bg-white px-5 py-6 sm:px-8 sm:py-7',
  text: 'max-w-lg',
  confirmButton: 'px-7 max-md:w-full',
}

export { CookiesBanner }
export type { CookiesBannerProps }
