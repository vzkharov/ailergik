import { fetchPosts } from '~/controllers/posts'

import { PostPreview } from './post-preview'

type TopicPostsProps = { topicId: string | number }

const TopicPosts: React.FC<TopicPostsProps> = async ({ topicId }) => {
  const posts = await fetchPosts({ topic: String(topicId) })

  return (
    <div className="grid grid-cols-3 gap-6">
      {posts.map(post => (
        <PostPreview key={post.slug} {...post} />
      ))}
    </div>
  )
}

export { TopicPosts }
