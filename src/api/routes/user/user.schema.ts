import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const schemas = {
  register: zValidator('json', z.object({})),
  login: zValidator('json', z.object({})),
  logout: zValidator('json', z.object({})),
}

export { schemas }
