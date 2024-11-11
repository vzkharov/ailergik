import { cn } from '~/lib/utils'

import { Logo } from '~/components/logo'

import { navigation } from '../_data/links'
import { HighlightedTitle } from '../components/hilighted-title'

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
      ].map((link, index, array) => (
        <li key={link.id}>
          <a
            href={link.href}
            className={cn(
              'block',
              'px-5 py-4 font-helveticaMedium uppercase',
              link.className,
            )}
          >
            {index === array.length - 1 ? (
              <span className="block translate-y-px">{link.title}</span>
            ) : (
              <HighlightedTitle
                className="group translate-y-px text-sm"
                spanclassName="h-[10px] -right-1 w-[90%] group-hover:bg-[#9BD5F3] transition duration-300 bg-transparent"
              >
                {link.title}
              </HighlightedTitle>
            )}
          </a>
        </li>
      ))}
    </ul>
  </header>
)

export { Header }
