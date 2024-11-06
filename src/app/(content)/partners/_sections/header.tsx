import { cn } from '~/lib/utils'

import { Logo } from '~/components/logo'

import { navigation } from '../_data/links'

const Header = () => (
  <header className="flex w-full items-center rounded-full bg-white px-6 py-3 text-sm">
    <Logo />
    <ul className="ml-auto flex items-center">
      {[
        navigation.benefits,
        navigation.sections,
        navigation.funcs,
        navigation.join,
        navigation.contacts,
      ].map(link => (
        <li key={link.id}>
          <a
            href={link.href}
            className={cn(
              'block',
              'px-5 py-4 font-helveticaMedium uppercase',
              link.className,
            )}
          >
            <span className="block translate-y-px">{link.title}</span>
          </a>
        </li>
      ))}
    </ul>
  </header>
)

export { Header }
