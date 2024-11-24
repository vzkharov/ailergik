import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'

import { fetchPosts } from '~/controllers/posts'
import type { Topic, TopicSection } from '~/controllers/topics'

import { PostCard } from '~/components/post-card'

import { getItemsCountByViewType } from './utils'

type SectionTapeProps = StyleProps & {
  id: string
  topic: Topic
  section: TopicSection
}

const SectionTape = async ({ id, topic, section }: SectionTapeProps) => {
  const count = getItemsCountByViewType(section.view)

  const posts = await fetchPosts({
    count,
    topic: String(topic.id),
    section: String(section.id),
  })

  if (posts.length === 0) {
    return null
  }

  const styles = tapeStyles({ view: section.view })

  return (
    <div id={id} className={styles.root()}>
      <h5 className={styles.title()}>{section.name}</h5>
      <div className={styles.layout()}>
        {posts.map((post, idx) => (
          <PostCard key={idx} index={idx} post={post} view={section.view} />
        ))}
      </div>
    </div>
  )
}

const tapeStyles = tv({
  slots: {
    root: 'flex flex-col gap-y-md border-t py-[40px]',
    title: 'text-md font-medium uppercase text-muted-foreground',
    layout: '',
  },
  variants: {
    view: {
      big: { layout: 'w-full' },
      small: {
        layout: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg',
      },
      medium: {
        layout: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg',
      },
      cover: { layout: 'w-full' },
      bento: {
        layout:
          'h-fit flex flex-col gap-y-12 md:grid md:grid-cols-2 md:grid-rows-[1fr_1fr_auto] md:gap-x-20 md:gap-y-20',
      },
    },
  },
})

export { SectionTape }
