import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { DOMAIN_URL } from '~/env'
import type { Page } from '~/lib/types'

import {
  fetchTopicBySlug,
  fetchTopics,
  fetchTopicSections,
} from '~/controllers/topics'

import { StyleAccent } from '~/modules/style-accent'
import { DirectusImage } from '~/components/(images)/directus-image'

import { TopicToC } from './_components/topic-toc'
import { TopicPosts } from './_components/topic-posts'
import { NavigationBreadcrumbs } from './_components/navigation-breadcrumbs'

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

  const sections = await fetchTopicSections().then(items => items.slice(0, 4))

  return (
    <div className="mt-[100px] flex flex-col gap-y-[50px]">
      <StyleAccent color={topic.color} />

      <div className="absolute inset-x-0 top-0 -z-10 h-[292px] bg-topic" />
      <div className="fixed inset-0 -z-20 bg-[#F7F7F9]" />

      <div className="relative">
        <NavigationBreadcrumbs
          items={[{ href: '/' + topic.slug, name: topic.name }]}
          className="py-md"
        />

        <DirectusImage
          loading="eager"
          image={topic.cover}
          className="h-[385px] rounded-md"
        />

        <h1 className="absolute bottom-0 left-0 rounded-tr-md bg-[#F7F7F9] pl-2 pr-8 pt-8 text-4xl font-normal uppercase max-md:-bottom-2 max-md:left-0 max-md:text-[19px]">
          [ {topic.name} ]
        </h1>
      </div>

      <div className="flex gap-md">
        <TopicToC
          items={sections}
          baseUrl={'/' + topic.slug}
          className="sticky top-32 h-fit w-[263px]"
        />
        <div className="flex-1">
          {sections.map(_section => (
            <TopicPosts key={_section.slug} topic={topic} section={_section} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const dynamic = 'force-static'
export const revalidate = false

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
