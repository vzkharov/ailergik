import { fetchTopics } from '~/controllers/topics'

import { TopicCard } from '~/components/(cards)/topic-card'

const BentoTopics = async () => {
  const topics = await fetchTopics()

  return (
    <section className="gap-md grid grid-cols-1 md:grid-cols-4">
      {topics.map((topic, idx) => (
        <TopicCard
          key={topic.slug}
          topic={topic}
          image={idx < 2}
          className="first:col-span-4 first:h-96 [&:nth-child(2)]:col-span-2 [&:nth-child(2)]:h-64"
        />
      ))}
    </section>
  )
}

export { BentoTopics }
