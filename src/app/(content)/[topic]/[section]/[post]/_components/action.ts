'use server'

import { createItem, readItem, updateItem } from '@directus/sdk'
import { cookies } from 'next/headers'

import { directus } from '~/lib/directus/server'

import { decodeJwt } from './_jwt'

const incrementViews = async (id: string | number, previewsViews?: number) => {
  return directus.request(
    updateItem('post', id, { views: (previewsViews ?? 0) + 1 }),
  )
}

const bookmarkPost = async (id: string) => {
  // eslint-disable-next-line unicorn/no-await-expression-member
  const token = (await cookies()).get('token')?.value

  if (!token) {
    return
  }

  const { userId } = decodeJwt(token)

  return directus.request(
    createItem('user_post', { post_id: id, user_id: userId }),
  )
}

const getUserBookmars = async () => {
  // eslint-disable-next-line unicorn/no-await-expression-member
  const token = (await cookies()).get('token')?.value

  if (!token) {
    return
  }

  const { userId } = decodeJwt(token)

  return directus
    .request(readItem('user', userId, { fields: [{ saved: ['post_id'] }] }))
    .then(res => res.saved?.map(saved => saved.post_id))
}

export { getUserBookmars, bookmarkPost, incrementViews }
