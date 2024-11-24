import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { fetchTopicSections } from '~/controllers/topics'

type TopicToCProps = StyleProps & {
  activeSlug?: string
  baseUrl?: string
}

const TopicToC = async ({
  style,
  className,
  activeSlug,
  baseUrl = '/',
}: TopicToCProps) => {
  const sections = await fetchTopicSections()

  return (
    <nav
      style={style}
      className={cn(
        'rounded-3xl w-64 rounded-md bg-white px-6 py-6',
        className,
      )}
    >
      <ul>
        {sections.map(section => (
          <li
            key={section.slug}
            className="border-b border-popover py-4 first:border-t-0 first:pt-0 last:border-b-0 last:pb-0"
          >
            <a href={baseUrl + '/' + section.slug}>
              <span
                className={cn(
                  'block py-1 text-xs font-bold uppercase transition-all hover:text-topic',
                  section.slug === activeSlug ? 'text-topic' : '',
                )}
              >
                {section.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { TopicToC }
