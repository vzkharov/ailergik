import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { DOMAIN_URL } from '~/env'
import type { Page } from '~/lib/types'

import {
  fetchTopics,
  fetchTopicBySlug,
  fetchTopicSections,
  fetchTopicSubsections,
  fetchTopicSectionBySlug,
} from '~/controllers/topics'
import { convertRawState } from '~/features/(posts)/use-posts-filter-state/utils'

import { Spacer } from '~/components/ui/spacer'
import { NavigationBreadcrumbs } from '~/components/navigation-breadcrumbs'

import { TopicToC } from '~/modules/topic-toc'
import { StyleAccent } from '~/modules/style-accent'

import { PostsList } from './_components/posts-list'
import { PostsFilterType } from './_components/posts-filter'

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
  const searchState = searchParams.state
  const { page, subsection: subsectionSlug } = convertRawState(searchState)

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
          <PostsList
            page={page}
            count={30}
            topicId={topic.id ? String(topic.id) : undefined}
            sectionId={section.id ? String(section.id) : undefined}
            subsectionId={
              currSubsection ? String(currSubsection?.id) : undefined
            }
          />
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

export const generateMetadata = async (props: {
  params: Promise<Params>
}): Promise<Metadata> => {
  const params = await props.params

  const topicSlug = params.topic
  const sectionSlug = params.section

  const topic = await fetchTopicBySlug(topicSlug)
  const section = await fetchTopicSectionBySlug(sectionSlug)

  if (!section || !topic) {
    notFound()
  }

  const path = [topic.slug, section.slug].join('/')

  const title = [section.name, topic.name, topic.description].join(' - ')
  const description = topic.description ?? undefined
  const cover = {
    alt: title,
    width: topic.cover.width ?? undefined,
    height: topic.cover.height ?? undefined,
    url: ['https://cms.allergik.by/assets', topic.cover.id].join('/'),
  }

  return {
    title,
    description,
    alternates: {
      canonical: new URL(path, DOMAIN_URL),
    },
    twitter: {
      card: 'summary',
      site: 'allergik',
      images: [cover],
    },
    openGraph: {
      title,
      description,
      images: [cover],
      type: 'website',
    },
  }
}

export default SectionPage
