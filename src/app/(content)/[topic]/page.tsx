import { notFound } from 'next/navigation'

import type { Page } from '~/lib/types'

import { fetchTopicBySlug } from '~/controllers/topics'

import { TopicPosts } from './_components/topic-posts'

type Params = {
  topic: string
}

const TopicPage: Page<Params> = async props => {
  const params = await props.params

  const slug = params.topic

  const topic = await fetchTopicBySlug(slug)

  if (!topic) {
    notFound()
  }

  return (
    <div>
      <style className="hidden">{`:root {--accent-color: ${topic.color}}`}</style>
      <pre className="font-mono">{JSON.stringify(topic, null, 2)}</pre>
      <h1 className="text-_accent my-4 text-4xl font-bold">{topic?.name}</h1>

      <TopicPosts topicId={topic.id} />
    </div>
  )
}

export default TopicPage
