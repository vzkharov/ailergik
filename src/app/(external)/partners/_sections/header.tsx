import { cn } from '~/lib/utils'

import { Logo } from '~/components/logo'
import { Title } from '~/components/ui/text'
import { MenuButton } from '~/components/(buttons)/menu-button'

import { navigation } from '../_data/links'

const Header = () => (
  <header className="flex w-full items-center rounded-full bg-white px-6 py-3 text-sm">
    <Logo href="/partners" className="flex-1 self-center max-md:text-center" />

    <ul className="ml-auto flex items-center max-md:hidden">
      {[
        navigation.benefits,
        navigation.sections,
        navigation.funcs,
        navigation.join,
      ].map(link => (
        <li key={link.id}>
          <a
            href={link.href}
            className={cn(
              'block',
              'font-helveticaMedium px-5 py-4 uppercase',
              link.className,
            )}
          >
            <Title
              highlight
              className="font-helveticaMedium relative block translate-y-px text-sm"
            >
              {link.title}
            </Title>
          </a>
        </li>
      ))}
      <li>
        <a
          href={navigation.contacts.href}
          className={cn(
            'block',
            'font-helveticaMedium px-5 py-4 uppercase',
            navigation.contacts.className,
          )}
        >
          <span className="block translate-y-px">
            {navigation.contacts.title}
          </span>
        </a>
      </li>
    </ul>

    <div className="md:hidden">
      <MenuButton />
    </div>
  </header>
)

export { Header }
