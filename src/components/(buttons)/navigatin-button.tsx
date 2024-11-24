import { MenuPopover } from '../menu-popover'
import { fetchTopics, fetchTopicSections } from '~/controllers/topics'

const NavigationButton = async () => {
  const topics = await fetchTopics()
  const sections = await fetchTopicSections().then(items => items.slice(0, 4))
  const topicsSlug = topics.map(item => ({
    href: '/' + item.slug,
    name: item.name,
    sections: sections,
  }))

  return (
    <MenuPopover
      items={topicsSlug}
      className="hidden rounded-full md:inline-flex"
    />
  )
}

export { NavigationButton }
