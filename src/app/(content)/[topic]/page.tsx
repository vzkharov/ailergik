import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { DOMAIN_URL } from '~/env'
import type { Page } from '~/lib/types'

import {
  fetchTopics,
  fetchTopicBySlug,
  fetchTopicSections,
} from '~/controllers/topics'

import { Spacer } from '~/components/ui/spacer'
import { DirectusImage } from '~/components/(images)/directus-image'
import { NavigationBreadcrumbs } from '~/components/navigation-breadcrumbs'

import { TopicToC } from '~/modules/topic-toc'
import { StyleAccent } from '~/modules/style-accent'

import { TopicPosts } from './_components/topic-posts'

import { styles } from './styles'

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

  const sections = await fetchTopicSections()

  return (
    <>
      <StyleAccent color={topic.color} />
      <div className={styles.overlay()} />

      <NavigationBreadcrumbs
        items={[{ href: '/' + topic.slug, name: topic.name }]}
      />

      <Spacer y="md" />

      <div className="relative">
        <DirectusImage
          loading="eager"
          image={topic.cover}
          className={styles.cover()}
        />

        <div className={styles.titleWrapper()}>
          <h1 className={styles.title()}>[ {topic.name} ]</h1>
        </div>
      </div>

      <Spacer y="3xl" />

      <div className={styles.main()}>
        <TopicToC baseUrl={'/' + topic.slug} className={styles.toc()} />
        <div className={styles.content()}>
          {sections.map(_section => (
            <TopicPosts key={_section.slug} topic={topic} section={_section} />
          ))}
        </div>
      </div>
    </>
  )
}

export const generateStaticParams = async (): Promise<Params[]> => {
  const topics = await fetchTopics()

  const params = topics.map(topic => ({ topic: topic.slug }))

  return params
}

export const generateMetadata = async (props: {
  params: Promise<Params>
}): Promise<Metadata> => {
  const params = await props.params
  const slug = params.topic

  const topic = await fetchTopicBySlug(slug)

  if (!topic) {
    notFound()
  }

  const title = [topic.name, topic.description].join(' - ')
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
      canonical: new URL(topic.slug, DOMAIN_URL),
    },
    twitter: {
      card: 'summary_large_image',
      site: 'allergik',
      images: [cover],
    },
    openGraph: {
      title,
      description,
      images: [cover],
      type: 'article',
      section: topic.name,
      tags: [topic.name],
    },
  }
}

export default TopicPage
