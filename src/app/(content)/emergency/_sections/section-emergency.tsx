import { cn } from '~/lib/utils'
import { StyleProps } from '~/lib/types'

import { fetchFAQ } from '~/controllers/faq'

import { Markdown } from '~/components/markdown'
import { Accordion } from '~/components/ui/accordion'

import { EmergencyAccordionItem } from '../components/emergency-accordion'

const SectionEmergency = async ({ style, className }: StyleProps) => {
  const faq = await fetchFAQ()

  return (
    <div style={style} className={cn('flex flex-col space-y-10', className)}>
      <Accordion type="single" collapsible className="space-y-5">
        {faq.map((item, idx) => (
          <EmergencyAccordionItem
            key={idx}
            id={String(idx)}
            color="#F293954D"
            title={item.title}
            image={item.image ?? undefined}
          >
            <Markdown source={item.content} />
          </EmergencyAccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export { SectionEmergency }
