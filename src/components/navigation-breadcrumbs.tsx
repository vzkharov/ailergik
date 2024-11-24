import { Fragment } from 'react'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb'

type NavigationItem = {
  name: string
  href?: string
}

type NavigationBreadcrumbsProps = StyleProps & {
  items: NavigationItem[]
}

const NavigationBreadcrumbs = ({
  items,
  style,
  className,
}: NavigationBreadcrumbsProps) => {
  const links = [
    {
      href: '/',
      name: 'Главная',
    },
    ...items,
  ]

  return (
    <Breadcrumb style={style} className={cn('', className)}>
      <BreadcrumbList>
        {links.map((link, idx) => {
          if (!link.href || idx === links.length - 1) {
            return (
              <BreadcrumbItem key={link.name}>
                <BreadcrumbPage>{link.name}</BreadcrumbPage>
              </BreadcrumbItem>
            )
          }

          return (
            <Fragment key={link.name}>
              <BreadcrumbItem>
                <BreadcrumbLink href={link.href}>{link.name}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export { NavigationBreadcrumbs }
export type { NavigationItem }
