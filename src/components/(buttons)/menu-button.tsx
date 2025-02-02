'use client'

import { cn } from '~/lib/utils'
import { useState } from 'react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'

import { XIcon } from '../ui/icons/x-icon'
import { MenuIcon } from '../ui/icons/menu-icon'

import { navigation } from '~/app/(external)/partners/_data/links'

const MenuButton = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="group flex h-14 w-14 items-center justify-center bg-transparent">
        <XIcon className="hidden group-aria-expanded:block" />
        <MenuIcon className="group-aria-expanded:hidden" />
      </PopoverTrigger>
      <PopoverContent
        sideOffset={10}
        className="rounded-3xl py-5 text-[#142850]"
      >
        <ul className="flex w-full flex-col items-start">
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
                <span className="block translate-y-px text-sm">
                  {link.title}
                </span>
              </a>
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
      </PopoverContent>
    </Popover>
  )
}

export { MenuButton }
