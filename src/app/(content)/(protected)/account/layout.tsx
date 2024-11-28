import { tv } from 'tailwind-variants'

import type { Layout } from '~/lib/types'

import { StyleAccent } from '~/modules/style-accent'

import { AccountNavigation } from './_components/account-navigation'

const AccountLayout: Layout = ({ children }) => (
  <>
    <StyleAccent color="#437CDC" />
    <div className={styles.root()}>
      <AccountNavigation className={styles.navigation()} />

      <div className={styles.page()}>{children}</div>
    </div>
  </>
)

const styles = tv({
  slots: {
    root: 'mt-[150px] flex gap-xl',
    navigation: 'sticky top-[150px]',
    page: 'min-h-[90vh] flex-1 py-sm',
  },
})()

export default AccountLayout
