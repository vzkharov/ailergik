import { Resend } from 'resend'

import { RESEND_API_TOKEN } from '~/env'

const resend = new Resend(RESEND_API_TOKEN)

export { resend }
