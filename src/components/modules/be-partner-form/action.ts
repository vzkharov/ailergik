'use server'

import {
  BE_PARTNER_TO_EMAIL,
  BE_PARTNER_FROM_EMAIL,
  BE_PARTNER_TITLE,
  BE_PARTNER_SUBJECT,
} from '~/env'

import { resend } from '~/lib/resend'
import { extractFormData } from '~/helpers/form'

import type { BePartnerState } from './types'
import ContactEmail from '~/components/emails/contact-email'

type Response = { success: boolean; status: number; message: string }

const submitBePartnerform = async (formData: FormData): Promise<Response> => {
  const body = extractFormData<BePartnerState>(formData)

  if (!body.phone) {
    return constructResponse(false, messages.validationError)
  }

  if (!BE_PARTNER_FROM_EMAIL || !BE_PARTNER_TO_EMAIL) {
    return constructResponse(false, messages.variablesError)
  }

  const { error } = await resend.emails.send({
    from: `${BE_PARTNER_TITLE} <${BE_PARTNER_FROM_EMAIL}>`,
    to: [BE_PARTNER_TO_EMAIL],
    subject: BE_PARTNER_SUBJECT,
    react: ContactEmail(body),
  })

  if (error) {
    return constructResponse(false, messages.internalError)
  }

  return constructResponse(true, messages.success)
}

const constructResponse = (success: boolean, message: string) => ({
  message,
  success,
  status: success ? 200 : 400,
})

const messages = {
  variablesError: 'Подождите пока мы это исправим.',
  internalError: 'Попробуйте еще раз чуть позже.',
  validationError: 'Проверьте указаны ли все необходимые поля.',

  success: 'Ваша заявка принята и находится в обработке.',
} as const

export { submitBePartnerform }
