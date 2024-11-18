import { readItems } from '@directus/sdk'

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
      limit: count ?? 999,
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

const fetchPostBySlug = (slug: string) =>
  client
    .request(
      readItems('post', {
        fields: fields.full,
        filter: {
          ...filters.published,
          slug: { _eq: slug },
        },
      }),
    )
    .then(posts => posts[0])

type Post = Awaited<ReturnType<typeof fetchPostBySlug>>
type PostId = Awaited<ReturnType<typeof fetchPostIds>>
type PostPreview = Awaited<ReturnType<typeof fetchPosts>>[number]

export { fetchPosts, fetchPostIds, fetchPostBySlug }
export type { SearchParams, Post, PostId, PostPreview }
