import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { fetchTopics } from '~/controllers/topics'

import { TopicCard } from '~/components/(cards)/topic-card'

const BentoTopics = async ({ style, className }: StyleProps) => {
  const topics = await fetchTopics()

  return (
    <section style={style} className={cn(styles.root, className)}>
      {topics.map((topic, idx) => (
        <TopicCard
          key={topic.slug}
          topic={topic}
          image={idx < 2}
          className={styles.card}
        />
      ))}
    </section>
  )
}

const styles = {
  root: 'grid grid-cols-1 gap-md md:grid-cols-4',
  card: 'first:col-span-4 first:h-96 [&:nth-child(2)]:col-span-2 [&:nth-child(2)]:h-64',
}

export { BentoTopics }
