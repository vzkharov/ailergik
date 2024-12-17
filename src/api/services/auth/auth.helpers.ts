import { AltrAuth } from '@alterdepression/auth'
import { ConsoleProvider } from '@alterdepression/auth/providers'

import {
  JWT_SECRET,
  JWT_EXPIRED_MS,
  UPSTASH_REDIS_URL,
  UPSTASH_REDIS_TOKEN,
} from '~/env'

import type { Account, Payload } from './auth.constants'

const { methods, middleware } = AltrAuth<Account, Payload>({
  jwtOptions: { secret: JWT_SECRET, expiredIn: JWT_EXPIRED_MS },
  totpOptions: { count: 4, digits: true },
  redisOptions: {
    prefix: 'user',
    url: UPSTASH_REDIS_URL,
    token: UPSTASH_REDIS_TOKEN,
  },

  // @ts-expect-error what the fuck is that error from ?
  sendProvider: new ConsoleProvider({}),
})

export { methods, middleware }
