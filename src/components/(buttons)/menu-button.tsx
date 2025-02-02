'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { cn } from '~/lib/utils'

import { XIcon } from '../ui/icons/x-icon'
import { MenuIcon } from '../ui/icons/menu-icon'

import { navigation } from '~/app/(external)/partners/_data/links'

const MenuButton = () => {
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = (href: string) => {
    setOpen(false)
    router.push('#' + href.split('#')[1])
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(prev => !prev)}
        className={cn(
          'group flex h-8 w-8 items-center justify-center rounded-full',
          open ? 'bg-foreground text-white' : 'bg-white text-foreground',
        )}
      >
        {open ? <XIcon /> : <MenuIcon />}
      </button>
      {open && (
        <div className="rounded-3xl container absolute -right-4 top-[calc(100%+1.5rem)] w-[calc(100vw-4rem)] rounded-md !bg-white p-4 text-[#142850]">
          <ul className="flex w-full flex-col items-start">
            {[
              navigation.benefits,
              navigation.sections,
              navigation.funcs,
              navigation.join,
            ].map(link => (
              <li
                key={link.id}
                onClick={() => handleClick(link.href)}
                className={cn(
                  'block',
                  'font-helveticaMedium px-5 py-4 uppercase',
                  link.className,
                )}
              >
                <span className="block translate-y-px text-sm">
                  {link.title}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={navigation.contacts.href}
            className={cn(
              'block',
              'font-helveticaMedium px-5 uppercase',
              'mt-3 h-fit w-full rounded-full bg-[#142850] py-2.5 text-white flex-center',
            )}
          >
            <span className="block translate-y-px text-sm">
              {navigation.contacts.title}
            </span>
          </a>
        </div>
      )}
    </div>
  )
}

export { MenuButton }
