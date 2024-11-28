import { readItems } from '@directus/sdk'

import { directus } from '~/lib/directus'

import { fields, filters } from './post.constants'

type SearchParams = {
  page?: number
  count?: number
  topicId?: string
  sectionId?: string
  subsectionId?: string
}

class PostService {
  async search(params: SearchParams) {
    const { page, count, topicId, sectionId, subsectionId } = params

    const limit = count ?? 999
    const sort = '-date_created'
    const filter = {
      ...filters.published,
      topic: { _eq: topicId },
      section: { _eq: sectionId },
      subsection: { _eq: subsectionId },
    }

    try {
      const data = await directus.request(
        readItems('post', {
          page,
          sort,
          limit,
          filter,
          fields: fields.default,
        }),
      )

      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  async findBySlug(slug: string) {
    try {
      const filter = {
        ...filters.published,
        slug: { _eq: slug },
      }

      const posts = await directus.request(
        readItems('post', {
          filter,
          fields: fields.default,
        }),
      )

      const post = posts.at(0)

      if (!post) {
        throw new Error('NOT_FOUND')
      }

      return { data: post, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }
}

const postService = new PostService()

export { postService }
