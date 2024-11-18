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
        fields: ['id', 'name', 'color', 'slug', { cover: ['*'] }],
      }),
    )
    .then(items => items.at(0))

const fetchTopicSections = () =>
  client.request(
    readItems('topic_section', {
      fields: ['id', 'name', 'slug', { view: ['value'] }],
      sort: 'order',
    }),
  )

export { fetchTopics, fetchTopicBySlug, fetchTopicSections }
export type { SearchParams }
