import { Suspense } from 'react'
import { notFound } from 'next/navigation'

import type { Page } from '~/lib/types'

import {
  fetchTopics,
  fetchTopicBySlug,
  fetchTopicSections,
  fetchTopicSectionBySlug,
  fetchTopicSubsections,
} from '~/controllers/topics'
import { convertRawState } from '~/features/(posts)/use-posts-filter-state/utils'

import { Spacer } from '~/components/ui/spacer'
import { NavigationBreadcrumbs } from '~/components/navigation-breadcrumbs'

import { TopicToC } from '~/modules/topic-toc'
import { StyleAccent } from '~/modules/style-accent'

import { PostsFilterType } from './_components/posts-filter'
import { PostsList, PostsLoading } from './_components/posts-list'

import { styles } from './styles'

type Params = {
  topic: string
  section: string
}

type SearchParams = {
  state?: string
}

const SectionPage: Page<Params, SearchParams> = async props => {
  const params = await props.params
  const searchParams = await props.searchParams

  const topicSlug = params.topic
  const sectionSlug = params.section

  const { page, subsection: subsectionSlug } = convertRawState(
    searchParams.state,
  )

  const topic = await fetchTopicBySlug(topicSlug)
  const section = await fetchTopicSectionBySlug(sectionSlug)

  const subsections = await fetchTopicSubsections().then(items =>
    items.filter(
      item =>
        !!section.subsections?.find(subsection => subsection.id === item.id),
    ),
  )

  const currSubsection = subsections.find(
    subsection => subsection.slug === subsectionSlug,
  )

  if (!section || !topic) {
    notFound()
  }

  return (
    <>
      <StyleAccent color={topic.color} />

      <NavigationBreadcrumbs
        items={[
          { name: topic.name, href: '/' + topic.slug },
          { name: section.name },
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
          <PostsFilterType subsections={subsections} />
          <Suspense
            fallback={<PostsLoading count={5} />}
            key={[page, subsectionSlug].join('-')}
          >
            <PostsList
              page={page}
              count={30}
              topicId={topic.id ? String(topic.id) : undefined}
              sectionId={section.id ? String(section.id) : undefined}
              subsectionId={
                currSubsection ? String(currSubsection?.id) : undefined
              }
            />
          </Suspense>
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
