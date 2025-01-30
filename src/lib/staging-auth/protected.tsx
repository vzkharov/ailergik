import { IS_STAGING } from '~/env'
import type { ReactChildren } from '~/lib/types'

import { isAuth } from './utils'
import { PasswordForm } from './password-form'

const StagingProtected = async ({ children }: { children: ReactChildren }) => {
  const isAuthenticated = await isAuth()

  if (IS_STAGING && !isAuthenticated) {
    return <PasswordForm />
  }

  return children
}

export { StagingProtected }
