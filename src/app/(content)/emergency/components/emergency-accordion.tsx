import { cn } from '~/lib/utils'
import type { StyleProps, ReactChildren } from '~/lib/types'

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '~/components/ui/accordion'
import { DetailButton } from '~/components/(buttons)/detail-button'

type EmergencyAccordionItemProps = StyleProps & {
  id: string
  title: string
  color: string

  children?: ReactChildren
}

const EmergencyAccordionItem = ({
  id,
  title,
  color,

  className,
  children,
}: EmergencyAccordionItemProps) => (
  <AccordionItem
    id={id}
    value={id}
    style={{ color: color }}
    className={cn(
      'rounded-3xl border border-black hover:border-transparent hover:bg-current data-[state=open]:border-none data-[state=open]:bg-current',
      className,
    )}
  >
    <AccordionTrigger className="group/accordion-trigger gap-2 p-6 text-[#142850] md:p-8">
      <article className="flex w-full items-center gap-2 md:h-16">
        <h6 className="w-full text-start">{title}</h6>
        <DetailButton className="border-none group-[[data-state=open]]/accordion-trigger:hidden max-md:[&>div]:hidden" />
        <DetailButton
          rotate
          className="hidden border-none group-[[data-state=open]]/accordion-trigger:inline-flex max-md:[&>div]:hidden"
        >
          Скрыть
        </DetailButton>
      </article>
    </AccordionTrigger>
    <AccordionContent className="text-[#142850] max-md:px-6">
      {children}
    </AccordionContent>
  </AccordionItem>
)

export { EmergencyAccordionItem }
