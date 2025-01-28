import { readItem } from '@directus/sdk'

import type { Page } from '~/lib/types'
import { directus } from '~/lib/directus'

import { fetchPosts } from '~/controllers/posts'
import { fetchTopics } from '~/controllers/topics'
import { convertRawState } from '~/features/(posts)/use-posts-filter-state/utils'

import { Title } from '~/components/title'
import { Spacer } from '~/components/ui/spacer'
import { PostCard } from '~/components/post-card'

import { PostsFilterTopic } from './_components/posts-filter-topic'

type SearchParams = {
  state?: string
}

const UserSavedPage: Page<{}, SearchParams> = async props => {
  const searchParams = await props.searchParams
  const state = convertRawState(searchParams.state)

  const topics = await fetchTopics()
  const filterTopic = topics.find(topic => topic.slug === state.topic)

  const user = await directus.request(
    readItem('user', '81c2015d-3cd0-4eb8-a672-b8708e04f7cd', {
      fields: [{ saved: ['post_id'] }],
    }),
  )

  const savedPostIds = user.saved
    ?.map(item => item.post_id)
    .filter(postId => typeof postId === 'string')

  const posts = await fetchPosts({
    ids: savedPostIds,
    topicId: filterTopic?.id,
  })

  return (
    <div>
      <Title
        highlight
        as="h3"
        className="text-xl !font-medium after:opacity-60"
      >
        Закладки
      </Title>
      <Spacer y="lg" />
      <PostsFilterTopic topics={topics} />
      <Spacer y="sm" />
      <div className="grid grid-cols-3 gap-xl">
        {posts.map((post, index) => (
          <PostCard key={post.slug} index={index} post={post} view="medium" />
        ))}
      </div>
    </div>
  )
}

export default UserSavedPage
