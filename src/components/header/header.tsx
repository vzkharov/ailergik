import Link from 'next/link'

import { cn } from '~/lib/utils'
import { StyleProps } from '~/lib/types'

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
  <header
    style={style}
    className={cn(
      'w-full rounded-full bg-popover/80 bg-white px-6 py-[18px] backdrop-blur-md',
      className,
    )}
  >
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
      <div className="flex items-center gap-6">
        <Logo />

        <LocationButton />
      </div>

      <NavigationButton className="hidden rounded-full md:inline-flex" />

      <SearchButton className="mx-4 max-w-xl flex-1" />

      <div className="flex items-center gap-x-sm">
        <Link href="/emergency">
          <Button size="icon" variant="destructive" title="Экстренная помощь">
            <EmergencyIcon className="h-6 w-6 -translate-y-px" />
          </Button>
        </Link>
        <BookmarkIcon className="h-7 w-7" />
        <HeartIcon className="h-7 w-7" />
        <AuthButton className="hidden md:inline-flex" />
      </div>
    </div>
  </header>
)

export { Header }
