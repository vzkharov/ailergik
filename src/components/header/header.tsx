import Link from 'next/link'
import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'

import { Button } from '~/components/ui/button'

import { Logo } from '~/components/logo'
import { HeartIcon } from '~/components/ui/icons/heart'
import { BookmarkIcon } from '~/components/ui/icons/bookmark'
import { EmergencyIcon } from '~/components/ui/icons/emergency-icon'

import { AuthButton } from '~/components/(buttons)/auth-button'
import { SearchButton } from '~/components/(buttons)/search-button'
import { LocationButton } from '~/components/(buttons)/location-button'
import { NavigationButton } from '~/components/(buttons)/navigatin-button'

const Header = ({ style, className }: StyleProps) => (
  <header style={style} className={styles.root({ className })}>
    <div className={styles.header()}>
      <div className={styles.headerInner()}>
        <Logo />

        <LocationButton />

        <NavigationButton />

        <SearchButton className={styles.search()} />

        <div className={styles.buttonsContainer()}>
          <Link href="/emergency">
            <Button size="icon" variant="destructive" title="Экстренная помощь">
              <EmergencyIcon className={styles.emergencyButton()} />
            </Button>
          </Link>
          <BookmarkIcon className={styles.bookmarkButton()} />
          <HeartIcon className={styles.likeButton()} />
          <AuthButton className={styles.authButton()} />
        </div>
      </div>
    </div>
  </header>
)

const styles = tv({
  slots: {
    root: 'fixed top-xl z-50 w-full',
    header: 'container mx-auto w-full',
    headerInner:
      'flex items-center justify-between gap-6 rounded-full bg-white px-6 py-4 backdrop-blur-md',

    search: 'mx-4 max-w-xl flex-1',

    buttonsContainer: 'flex items-center gap-x-sm',
    emergencyButton: 'h-6 w-6 -translate-y-px',
    likeButton: 'h-7 w-7',
    bookmarkButton: 'h-7 w-7',
    authButton: 'hidden md:inline-flex',
  },
})()

export { Header }
