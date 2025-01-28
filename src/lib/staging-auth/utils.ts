import { cookies } from 'next/headers'

import { STAGING_PASSWORD } from '~/env'

const COOKIE_NAME = 'staging_auth'

const isAuth = async () => {
  const _cookies = await cookies()
  return _cookies.get(COOKIE_NAME)?.value === 'true'
}

const validatePassword = async (formData: FormData) => {
  const _cookies = await cookies()

  const password = formData.get('password') as string

  if (password === STAGING_PASSWORD) {
    _cookies.set(COOKIE_NAME, 'true')
  }
}

export { isAuth, validatePassword }
