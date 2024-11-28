'use client'

import { tv } from 'tailwind-variants'
import { usePathname } from 'next/navigation'

import type { StyleProps, ReactChildren } from '~/lib/types'

type Item = {
  name: string
  href: string
  icon?: ReactChildren
  active?: boolean
}

type TableOfContentProps = StyleProps & {
  items: Item[]
}

const TableOfContent = ({ items, style, className }: TableOfContentProps) => {
  const styles = tocVariants()
  const pathname = usePathname()

  return (
    <nav style={style} className={styles.root({ className })}>
      <ul>
        {items.map(item => (
          <li key={item.href} className={styles.item()}>
            <a
              href={item.href}
              className={styles.link({ active: pathname.includes(item.href) })}
            >
              {item.icon ? <span className="w-5">{item.icon}</span> : null}
              <span className="translate-y-px uppercase">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const tocVariants = tv({
  slots: {
    root: 'rounded-3xl rounded-md bg-white px-6 py-6',
    item: 'border-b border-popover py-4 first:border-t-0 first:pt-0 last:border-b-0 last:pb-0',
    link: 'flex items-center gap-x-sm py-1 text-xs font-bold uppercase transition-all hover:text-topic',
  },
  variants: {
    active: {
      true: { link: 'text-topic' },
    },
  },
})

export { TableOfContent }
