import { readItem, readItems } from '@directus/sdk'

import { client } from '~/lib/directus/client'

import { fields, filters } from './utils'

type SearchParams = {
  topic?: string
}

const fetchPosts = ({ topic }: SearchParams = {}) =>
  client.request(
    readItems('post', {
      fields: fields.brief,
      filter: {
        ...filters.published,
        topic: { _eq: String(topic) },
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
