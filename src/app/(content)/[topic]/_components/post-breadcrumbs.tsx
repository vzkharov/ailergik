import { Fragment } from 'react'

import type { Topic, TopicSection } from '~/lib/directus/_generated'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb'

type PostBreadcrumbsProps = {
  current: string

  topic: Pick<Topic, 'name' | 'slug'>
  section: Pick<TopicSection, 'name' | 'slug'>
}

const PostBreadcrumbs = ({ topic, section, current }: PostBreadcrumbsProps) => {
  const links = [
    {
      href: '/',
      title: 'Главная',
    },
    {
      href: '/' + topic.slug,
      title: topic.name,
    },
    {
      href: '/' + topic.slug + '#' + section.slug,
      title: section.name,
    },
  ]

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map(link => (
          <Fragment key={link.href}>
            <BreadcrumbItem>
              <BreadcrumbLink href={link.href}>{link.title}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{current}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export { PostBreadcrumbs }
