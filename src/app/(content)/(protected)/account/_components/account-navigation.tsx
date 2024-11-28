'use client'

import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'

import { navigation } from '~/config/navigation'

import { TableOfContent } from '~/components/table-of-content'

const AccountNavigation = ({ style, className }: StyleProps) => {
  return (
    <aside style={style} className={styles.root({ className })}>
      <TableOfContent
        items={[
          navigation.account.anamnesis,
          navigation.account.appointment,
          navigation.account.consult,
          navigation.account.chat,
          navigation.account.saved,
        ]}
      />
      <TableOfContent
        items={[
          navigation.account.cart,
          navigation.account.pay,
          navigation.account.liked,
        ]}
      />
      <TableOfContent
        items={[navigation.account.support, navigation.account.review]}
      />
    </aside>
  )
}

const styles = tv({
  slots: {
    root: 'flex h-fit !w-72 flex-col gap-y-md',
  },
})()

export { AccountNavigation }
