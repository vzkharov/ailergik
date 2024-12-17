import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const schemas = {
  protected: zValidator('cookie', z.object({ token: z.string() })),

  login: zValidator(
    'json',
    z.object({
      phone: z.string(),
      email: z.string().nullish(),
    }),
  ),
  checkOtp: zValidator(
    'json',
    z.object({
      userId: z.string(),
      otp: z.string().or(z.number()),
    }),
  ),
}

export { schemas }
