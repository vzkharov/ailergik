import { readItems } from '@directus/sdk'

import { client } from '~/lib/directus/client'

type SearchParams = {}

const fetchTopics = async (params: SearchParams = {}) =>
  client.request(readItems('topic', params))

const fetchTopicBySlug = (slug: string) =>
  client
    .request(
      readItems('topic', {
        filter: { slug: { _eq: slug } },
        fields: ['id', 'name', 'color', 'slug'],
      }),
    )
    .then(items => items.at(0))

export { fetchTopics, fetchTopicBySlug }
export type { SearchParams }
