import { z } from 'zod'
import { directusImage } from './shared'

/**
 * @description main entity
 */

const userRole = z.enum(['patient', 'doctor'])

const user = z.object({
  id: z.string().or(z.number()),
  role: userRole,
  phone: z.string(),
  email: z.string().nullish(),

  avi: directusImage.nullish(),
  last_name: z.string().nullish(),
  first_name: z.string().nullish(),
  sex: z.enum(['w', 'm']).nullish(),
  birthday: z.date().or(z.string()).nullish(),
})

type User = z.infer<typeof user>
type UserRole = z.infer<typeof userRole>

/**
 * @description user dto
 */
const userDto = user.omit({ id: true, email: true, phone: true })
const createUserDto = user.pick({
  role: true,
  email: true,
  phone: true,
})
const updateUserDto = user.pick({
  sex: true,
  avi: true,
  birthday: true,
  last_name: true,
  first_name: true,
})
const deleteUserDto = user.pick({ id: true })

type UserDto = z.infer<typeof userDto>
type CreateUserDto = z.infer<typeof createUserDto>
type UpdateUserDto = z.infer<typeof updateUserDto>
type DeleteUserDto = z.infer<typeof deleteUserDto>

export { user, userDto, createUserDto, updateUserDto, deleteUserDto }
export type {
  User,
  UserRole,
  UserDto,
  CreateUserDto,
  UpdateUserDto,
  DeleteUserDto,
}
