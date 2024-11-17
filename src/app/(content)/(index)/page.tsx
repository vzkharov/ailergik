import { Page } from '~/lib/types'

import { fetchTopics } from '~/controllers/topics'

import { FeedForm } from '~/modules/feed-form'
import { TopicTape } from '~/modules/topic-tape'
import { BentoTopics } from '~/modules/bento-topics'
import { SocialBanner } from '~/modules/social-banner'

import { WelcomeSection } from './_sections/welcome-section'

const Home: Page = async () => {
  const topics = await fetchTopics()

  return (
    <>
      <WelcomeSection />
      <BentoTopics />
      <SocialBanner />

      {topics.slice(0, 2).map(topic => (
        <TopicTape key={topic.slug} topic={topic} />
      ))}

      <FeedForm />
    </>
  )
}

export default Home
