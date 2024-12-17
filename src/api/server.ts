import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { logger } from 'hono/logger'

import { middleware } from './middleware'

import { userRouter } from './routes/user'

const app = new Hono()
  .basePath('/api')
  .use(logger())
  .route('', middleware)
  .route('/user', userRouter)

const handler = handle(app)

type App = typeof app

export { handler }
export type { App }
