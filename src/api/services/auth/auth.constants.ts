import { z } from 'zod'

type Account = {
  id: string
  phone: string
  email?: string | null
}

type Payload = {
  userId: string
}

const payload = z.object({
  userId: z.string(),
})

export { payload }
export type { Account, Payload }
