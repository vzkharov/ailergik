import { readItems } from '@directus/sdk'

import { client } from '~/lib/directus/client'

import { fields, filters } from './utils'

type SearchParams = {
  page?: number
  count?: number
  topic?: string
  section?: string
  subsection?: string

  ids?: string[]
  topicId?: string | number | null | undefined
}

const fetchPosts = ({
  ids,
  count,
  topic,
  topicId,
  section,
  subsection,
  page = 1,
}: SearchParams = {}) =>
  client.request(
    readItems('post', {
      page,
      fields: fields.full,
      limit: count ?? 999,
      sort: '-date_created',
      filter: {
        ...filters.published,
        id: { _in: ids },
        topic: {
          _eq: topic || topicId === undefined ? undefined : String(topicId),
        },
        section: { _eq: section },
        subsection: { _eq: subsection },
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
    .then(posts => posts.at(0))

type Post = Exclude<
  Awaited<ReturnType<typeof fetchPostBySlug>>,
  null | undefined
>
type PostId = Awaited<ReturnType<typeof fetchPostIds>>
type PostPreview = Awaited<ReturnType<typeof fetchPosts>>[number]

export { fetchPosts, fetchPostIds, fetchPostBySlug }
export type { SearchParams, Post, PostId, PostPreview }
