import Link from 'next/link'
import { tv } from 'tailwind-variants'

import { fetchPosts } from '~/controllers/posts'
import type { Topic, TopicSection } from '~/controllers/topics'

import { Title } from '~/components/title'
import { Button } from '~/components/ui/button'
import { PostCard } from '~/components/post-card'

type TopicPostsProps = {
  topic: Topic
  section: TopicSection
}

const TopicPosts = async ({ topic, section }: TopicPostsProps) => {
  const posts = await fetchPosts({
    count: 4,
    topic: String(topic.id),
    section: String(section.id),
  })

  if (posts.length === 0) {
    return null
  }

  const coverPosts = posts.slice(0, 1)
  const otherPosts = posts.slice(1)

  return (
    <section id={section.slug} className={styles.root()}>
      <Title highlight as="h4" className={styles.title()}>
        {section.name}
      </Title>

      {coverPosts.map(post => (
        <PostCard
          key={post.slug}
          index={0}
          post={post}
          view="cover"
          className={styles.mainPost()}
        />
      ))}

      {otherPosts.length > 0 ? (
        <div className={styles.grid()}>
          {otherPosts.map(post => (
            <PostCard
              key={post.slug}
              index={0}
              post={post}
              view="medium"
              className={styles.mainPost()}
            />
          ))}
        </div>
      ) : null}

      <Link href={'/' + topic.slug + '/' + section.slug}>
        <Button variant="outline" className={styles.button()}>
          Показать больше
        </Button>
      </Link>
    </section>
  )
}

const styles = tv({
  slots: {
    root: 'border-b border-b-popover py-[60px] first:pt-0 last:border-b-0',
    title: 'mb-lg text-md font-bold after:!h-2/3',
    mainPost: '!mb-2xl !h-[430px]',
    button: 'h-16 w-full',
    grid: 'mb-2xl grid grid-cols-3 gap-lg',
  },
})()

export { TopicPosts }
