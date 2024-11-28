import { Hono } from 'hono'

import { schemas } from './user.schema'

const userRouter = new Hono()
  .post('/register', schemas.register, async c => {
    const body = c.req.valid('json')

    return c.json(body)
  })
  .post('/login', schemas.login, async c => {
    const body = c.req.valid('json')
    return c.json(body)
  })
  .post('/logout', schemas.logout, async c => {
    const body = c.req.valid('json')
    return c.json(body)
  })

export { userRouter }
