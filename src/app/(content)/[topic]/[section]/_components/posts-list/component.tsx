import { fetchPosts } from '~/controllers/posts'

import { PostCard } from '~/components/post-card'

import { styles } from './styles'

type ComponentProps = {
  topicId?: string
  sectionId?: string
  subsectionId?: string

  page?: number
  count?: number
}

const Component = async (props: ComponentProps) => {
  const { topicId, sectionId, subsectionId, count = 9, page = 1 } = props

  const posts = await fetchPosts({
    page,
    count,
    topic: topicId,
    section: sectionId,
    subsection: subsectionId,
  })

  return (
    <section className={styles.root()}>
      {posts.map((post, idx) => (
        <PostCard
          key={post.slug}
          index={idx}
          post={post}
          view="small"
          className={styles.card()}
        />
      ))}
    </section>
  )
}

export { Component }
export type { ComponentProps }
