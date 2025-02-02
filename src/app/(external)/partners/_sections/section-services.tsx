import { cn } from '~/lib/utils'
import { StyleProps } from '~/lib/types'

import { services } from '../_data/services'

import { Accordion } from '~/components/ui/accordion'
import { ServiceAccordionItem } from '../components/service-accordion'

const SectionServices = ({ style, className }: StyleProps) => (
  <div style={style} className={cn('flex flex-col', className)}>
    <Accordion
      type="multiple"
      className="space-y-5"
      defaultValue={[services[0]?.id || '']}
    >
      {services.map(card => (
        <ServiceAccordionItem key={card.id} {...card} />
      ))}
    </Accordion>
  </div>
)

export { SectionServices }
