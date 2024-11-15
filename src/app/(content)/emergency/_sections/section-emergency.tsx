import { cn } from '~/lib/utils'
import { StyleProps } from '~/lib/types'

import { emergency } from '../_data/_emergency'

import { Accordion } from '~/components/ui/accordion'
import { EmergencyAccordionItem } from '../components/emergency-accordion'

const SectionEmergency = ({ style, className }: StyleProps) => (
  <div style={style} className={cn('flex flex-col space-y-10', className)}>
    <Accordion
      type="multiple"
      className="space-y-5"
      defaultValue={[emergency[0]?.id || '']}
    >
      {emergency.map(item => (
        <EmergencyAccordionItem key={item.id} {...item}>
          {item.content}
        </EmergencyAccordionItem>
      ))}
    </Accordion>
  </div>
)

export { SectionEmergency }
