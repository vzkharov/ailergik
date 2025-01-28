import {
  deleteItem,
  readItem,
  updateItem,
  createItem,
  readItems,
} from '@directus/sdk'

import { directus } from '~/lib/directus/server'
import { createLogger } from '~/lib/logger'

import type { ServiceError } from '~/api/lib/error'
import type { CreateUserDto, UpdateUserDto } from '~/api/dto/user'

import { fields, collectionKey, type UserId } from './user.constants'

const logger = createLogger('user.service')

class UserService {
  async create(body: CreateUserDto) {
    try {
      const createdUser = await directus.request(
        createItem(collectionKey, body, { fields: fields.full }),
      )

      return { data: createdUser, error: null }
    } catch (error) {
      logger.error(error)
      return { data: null, error: error as ServiceError }
    }
  }

  async findByPhone(body: CreateUserDto) {
    try {
      const users = await directus.request(
        readItems('user', {
          fields: fields.full,
          filter: { phone: { _eq: body.phone } },
        }),
      )
      const candidate = users.at(0)

      if (candidate) {
        return { data: candidate, error: null }
      }

      const createdUser = await directus.request(
        createItem(collectionKey, body, { fields: fields.full }),
      )

      return { data: createdUser, error: null }
    } catch (error) {
      logger.error(error)
      return { data: null, error: error as ServiceError }
    }
  }

  async findById(id: UserId) {
    try {
      const user = await directus.request(
        readItem(collectionKey, id, {
          fields: fields.full,
        }),
      )

      if (!user) {
        throw new Error('NOT_FOUND')
      }

      return { data: user, error: null }
    } catch (error) {
      logger.error(error)
      return { data: null, error: error as ServiceError }
    }
  }

  async updateById(id: UserId, body: UpdateUserDto) {
    try {
      const updatedUser = await directus.request(
        updateItem(collectionKey, id, body),
      )

      return { data: updatedUser, error: null }
    } catch (error) {
      logger.error(error)
      return { data: null, error: error as ServiceError }
    }
  }

  async deleteById(id: UserId) {
    try {
      await directus.request(deleteItem(collectionKey, id))

      return { data: true, error: null }
    } catch (error) {
      logger.error(error)
      return { data: false, error: error as ServiceError }
    }
  }
}

const userService = new UserService()

export { userService }
