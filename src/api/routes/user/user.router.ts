import { Hono } from 'hono'
import { CookieOptions } from 'hono/utils/cookie'
import { HTTPException } from 'hono/http-exception'
import { setCookie, deleteCookie, getCookie } from 'hono/cookie'

import { authService } from '~/api/services/auth'
import { userService } from '~/api/services/users'

import { schemas } from './user.schema'

const userRouter = new Hono()
  .get('/', async c => {
    const token = getCookie(c, COOKIE_NAME)

    const { data: authData, error: authError } =
      await authService.checkSession(token)

    if (authError) {
      deleteCookie(c, COOKIE_NAME, COOKIE_OPTIONS)
      throw new HTTPException(401, authError)
    }

    const { data: userData, error: userError } = await userService.findById(
      authData.userId,
    )

    if (userError) {
      throw new HTTPException(404, userError)
    }

    return c.json(userData)
  })

  .post('/login', schemas.login, async c => {
    const body = c.req.valid('json')

    const { data: userData, error: userError } = await userService.findByPhone({
      ...body,
      role: 'patient',
    })

    if (userError) {
      throw new HTTPException(500, userError)
    }

    const { error: authError } = await authService.sendOtp(userData)

    if (authError) {
      throw new HTTPException(500, authError)
    }

    return c.json(userData)
  })
  .post('/login/check', schemas.checkOtp, async c => {
    const { otp, userId } = c.req.valid('json')

    const { data: userData, error: userError } =
      await userService.findById(userId)

    if (userError) {
      throw new HTTPException(404, { message: 'User not found' })
    }

    const { data: authData, error: authError } = await authService.checkOtp(
      userData,
      otp,
    )

    if (authError) {
      throw new HTTPException(401, authError)
    }

    setCookie(c, COOKIE_NAME, authData.token, COOKIE_OPTIONS)

    return c.json(authData)
  })

  .post('/logout', async c => {
    const token = getCookie(c, COOKIE_NAME)

    const { data, error } = await authService.signOut(token)

    if (error) {
      throw new HTTPException(401, error)
    }

    deleteCookie(c, COOKIE_NAME, COOKIE_OPTIONS)

    return c.json(data)
  })

const ONE_YEAR_IN_S = 365 * 24 * 60 * 60

const COOKIE_NAME = 'token'
const COOKIE_OPTIONS = {
  secure: true,
  httpOnly: true,
  sameSite: 'lax',
  maxAge: ONE_YEAR_IN_S,
} satisfies CookieOptions

export { userRouter }
