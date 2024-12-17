type UserId = string | number

const collectionKey = 'user'

const fields = {
  full: [
    'id',
    'role',
    'email',
    'phone',
    'verified',
    'sex',
    'birthday',
    'last_name',
    'first_name',
    'count(saved)',
    { avi: ['id', 'width', 'height'] },
  ],
} as const

export { fields, collectionKey }
export type { UserId }
