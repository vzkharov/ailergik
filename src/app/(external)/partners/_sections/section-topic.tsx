import { cn } from '~/lib/utils'
import { StyleProps } from '~/lib/types'

import { topics } from '../_data/topic'

import { Accordion } from '~/components/ui/accordion'
import { PartnersAccordionItem } from '../components/partners-accordion'

const SectionTopic = ({ style, className }: StyleProps) => (
  <div style={style} className={cn('flex flex-col space-y-10', className)}>
    <Accordion
      type="multiple"
      className="space-y-5"
      defaultValue={[topics[0]?.id || '']}
    >
      {topics.map(topic => (
        <PartnersAccordionItem key={topic.id} {...topic} />
      ))}
    </Accordion>
  </div>
)

export { SectionTopic }
