import { readItem, readItems } from '@directus/sdk'

import { client } from '~/lib/directus/client'

import { fields, filters } from './utils'

type SearchParams = {
  count?: number
  topic?: string
  section?: string
}

const fetchPosts = ({ topic, section, count }: SearchParams = {}) =>
  client.request(
    readItems('post', {
      fields: fields.brief,
      page: 1,
      limit: count,
      sort: 'date_created',
      filter: {
        ...filters.published,
        topic: { _eq: topic },
        section: { _eq: section },
      },
    }),
  )

const fetchPostIds = () =>
  client.request(
    readItems('post', {
      fields: fields.ids,
    }),
  )

const fetchPostById = (id: string) =>
  client.request(
    readItem('post', id, {
      fields: fields.full,
      filter: filters.published,
    }),
  )

type Post = Awaited<ReturnType<typeof fetchPostById>>
type PostId = Awaited<ReturnType<typeof fetchPostIds>>
type PostPreview = Awaited<ReturnType<typeof fetchPosts>>[number]

export { fetchPosts, fetchPostIds, fetchPostById }
export type { SearchParams, Post, PostId, PostPreview }
