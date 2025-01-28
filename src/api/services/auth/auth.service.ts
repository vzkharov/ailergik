import type { ServiceError } from '~/api/lib/error'

import type { Account } from './auth.constants'
import { methods, middleware } from './auth.helpers'

class AuthService {
  async sendOtp(account: Account) {
    try {
      await methods.sendTotp(account)

      return { data: true, error: null }
    } catch (error) {
      return { data: false, error: error as ServiceError }
    }
  }

  async checkOtp(account: Account, otp: string | number) {
    try {
      const data = await methods.verifyTotp(account, otp, {
        userId: account.id,
      })

      if (!data) {
        throw new Error('OTP is invalid')
      }

      return { data, error: null }
    } catch (error) {
      return { data: null, error: error as ServiceError }
    }
  }

  async signOut(token: string | undefined) {
    try {
      if (!token) {
        throw new Error('Token is missing')
      }

      await methods.signOut(token, true)
      return { data: true, error: null }
    } catch (error) {
      return { data: false, error: error as ServiceError }
    }
  }

  async checkSession(token: string | undefined) {
    try {
      if (!token) {
        throw new Error('Token is missing')
      }

      const payload = await middleware(token)

      if (!payload) {
        throw new Error('Token is invalid')
      }

      return { data: payload, error: null }
    } catch (error) {
      return { data: null, error: error as ServiceError }
    }
  }
}

const authService = new AuthService()

export { authService }
