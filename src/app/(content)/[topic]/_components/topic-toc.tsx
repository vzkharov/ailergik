import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

type ToCItem = {
  name: string
  slug: string
  active?: boolean
}

type TopicToCProps = StyleProps & {
  items: ToCItem[]
  baseUrl?: string
}

const TopicToC = ({
  items,
  style,
  className,
  baseUrl = '/',
}: TopicToCProps) => {
  return (
    <nav
      style={style}
      className={cn(
        'rounded-3xl font-helveticaMedium w-full rounded-md bg-white px-6 py-6',
        className,
      )}
    >
      <ul>
        {items.map(item => (
          <li
            key={item.slug}
            className="border-b border-popover py-4 first:border-t-0 first:pt-0 last:border-b-0 last:pb-0"
          >
            <a href={baseUrl + '#' + item.slug}>
              <span
                className={cn(
                  'block py-1 text-xs font-bold uppercase transition-all hover:text-topic',
                  item.active ? 'text-topic' : '',
                )}
              >
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { TopicToC }
