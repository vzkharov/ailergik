type BePartnerState = Partial<{
  name: string
  occupation: string
  phone: string
}>

type BePartnerFields = keyof BePartnerState

export type { BePartnerState, BePartnerFields }
