type BePartnerState = Partial<{
  name: string
  email: string
  phone: string
  details: string
  referral: string
}>

type BePartnerFields = keyof BePartnerState

export type { BePartnerState, BePartnerFields }
