import { fetchPosts } from '~/controllers/posts'

import { PostCard } from '~/components/post-card'

import { styles } from './styles'

type PostsListProps = {
  topicId?: string
  sectionId?: string
  subsectionId?: string

  page?: number
  count?: number
}

const PostsList = async (props: PostsListProps) => {
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
      {posts.map(post => (
        <PostCard
          key={post.slug}
          index={0}
          post={post}
          view="small"
          className={styles.card()}
        />
      ))}
    </section>
  )
}

export { PostsList }
