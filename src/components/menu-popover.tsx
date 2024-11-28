'use client'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { useState } from 'react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'
import { Button } from '~/components/ui/button'
import { ArrowListIcon } from '~/components/ui/icons/arrow-list'

type SectionItem = {
  name: string
  slug: string
}

type TopicItems = {
  name: string
  href: string
  sections?: SectionItem[]
}

type MenuPopoverProps = StyleProps & {
  items: TopicItems[]
}

const MenuPopover = ({ style, className, items }: MenuPopoverProps) => {
  const links = [
    {
      href: '/',
      name: 'Главная',
    },
    ...items,
    {
      href: '/parners',
      name: 'Партнерам',
    },
    {
      href: '/advertisment',
      name: 'Реклама',
    },
    {
      href: '/contacts',
      name: 'Контакты',
    },
  ]

  const [open, setOpen] = useState<boolean>(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="group h-10 bg-transparent">
        <Button
          style={style}
          variant="outline"
          className={cn('flex items-center gap-2', className)}
        >
          МЕНЮ
        </Button>
      </PopoverTrigger>
      <PopoverContent
        width={200}
        sideOffset={30}
        align="start"
        className="mr-0 mt-0 bg-white/80 backdrop-blur-md"
      >
        <nav className="scrollbar-hidden h-96 w-full overflow-y-scroll rounded-md bg-transparent px-2">
          <ul>
            {links.map((item, index) => (
              <li key={item.href} className="py-3">
                {item.sections ? (
                  <Accordion type="multiple">
                    <AccordionItem value={String(index)} id={String(index)}>
                      <AccordionTrigger className="group/accordion-trigger py-0">
                        <a>
                          <span className="block flex-1 py-1 text-sm font-bold uppercase transition-all hover:text-topic">
                            {item.name}
                          </span>
                        </a>
                        <ArrowListIcon
                          width={20}
                          height={20}
                          className="h-6 w-6 group-[[data-state=open]]/accordion-trigger:hidden"
                        />
                        <ArrowListIcon
                          width={20}
                          height={20}
                          className="hidden h-6 w-6 rotate-180 group-[[data-state=open]]/accordion-trigger:inline-flex"
                        />
                      </AccordionTrigger>
                      <AccordionContent className="pb-0 pt-2">
                        <ul className="ml-1">
                          {item.sections.map(section => (
                            <li key={section.slug} className="py-3">
                              <a href={item.href + '#' + section.slug}>
                                <span className="block py-1 text-xs font-medium uppercase transition-all hover:text-topic">
                                  {section.name}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <a href={item.href}>
                    <span className="block py-1 text-sm font-bold uppercase transition-all hover:text-topic">
                      {item.name}
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </PopoverContent>
    </Popover>
  )
}

export { MenuPopover }
