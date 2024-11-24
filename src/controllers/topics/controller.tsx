import { readItems } from '@directus/sdk'

import { client } from '~/lib/directus/client'

type SearchParams = {}

const fetchTopics = async (params: SearchParams = {}) =>
  client.request(
    readItems('topic', {
      filter: params,
      sort: 'order',
      fields: ['id', 'color', 'slug', 'name', 'description', { cover: ['*'] }],
    }),
  )

const fetchTopicBySlug = (slug: string) =>
  client
    .request(
      readItems('topic', {
        filter: { slug: { _eq: slug } },
        fields: [
          'id',
          'name',
          'color',
          'slug',
          'description',
          { cover: ['*'] },
        ],
      }),
    )
    .then(items => items.at(0))

const fetchTopicSections = () =>
  client.request(
    readItems('topic_section', {
      sort: 'order',
      fields: ['id', 'name', 'slug', 'view', { subsections: ['*'] }],
    }),
  )

const fetchTopicSectionBySlug = (slug: string) =>
  client
    .request(
      readItems('topic_section', {
        filter: { slug: { _eq: slug } },
        fields: ['id', 'name', 'slug', 'view', { subsections: ['*'] }],
      }),
    )
    .then(items => items[0])

const fetchTopicSubsections = () =>
  client.request(
    readItems('topic_subsection', {
      sort: 'id',
      fields: ['id', 'name', 'slug'],
    }),
  )

type Topic = Awaited<ReturnType<typeof fetchTopics>>[number]
type TopicSection = Awaited<ReturnType<typeof fetchTopicSections>>[number]
type TopicSubsection = Awaited<ReturnType<typeof fetchTopicSubsections>>[number]

export {
  fetchTopics,
  fetchTopicBySlug,
  fetchTopicSections,
  fetchTopicSubsections,
  fetchTopicSectionBySlug,
}
export type { SearchParams, Topic, TopicSection, TopicSubsection }
