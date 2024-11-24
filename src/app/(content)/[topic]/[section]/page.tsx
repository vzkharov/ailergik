import { notFound } from 'next/navigation'

import type { Page } from '~/lib/types'

import {
  fetchTopics,
  fetchTopicBySlug,
  fetchTopicSections,
  fetchTopicSectionBySlug,
} from '~/controllers/topics'

import { Spacer } from '~/components/ui/spacer'
import { NavigationBreadcrumbs } from '~/components/navigation-breadcrumbs'

import { TopicToC } from '~/modules/topic-toc'
import { StyleAccent } from '~/modules/style-accent'

import { SectionPosts } from './_components/section-posts'

import { styles } from './styles'

type Params = {
  topic: string
  section: string
}

const SectionPage: Page<Params> = async props => {
  const params = await props.params

  const topicSlug = params.topic
  const sectionSlug = params.section

  const topic = await fetchTopicBySlug(topicSlug)
  const section = await fetchTopicSectionBySlug(sectionSlug)

  if (!section || !topic) {
    notFound()
  }

  return (
    <>
      <StyleAccent color={topic.color} />

      <NavigationBreadcrumbs
        items={[
          { name: topic.name, href: '/' + topic.slug },
          {
            name: section.name,
          },
        ]}
      />

      <Spacer y="md" />

      <div className={styles.main()}>
        <TopicToC
          activeSlug={section.slug}
          baseUrl={'/' + topic.slug}
          className={styles.toc()}
        />
        <div className={styles.content()}>
          <SectionPosts topic={topic} section={section} />
        </div>
      </div>

      <Spacer y="2xl" />
    </>
  )
}

export const generateStaticParams = async (): Promise<Params[]> => {
  const topics = await fetchTopics()
  const sections = await fetchTopicSections()

  const params: Params[] = []

  topics.forEach(topic =>
    sections.forEach(section =>
      params.push({
        topic: topic.slug,
        section: section.slug,
      }),
    ),
  )

  return params
}

export default SectionPage
