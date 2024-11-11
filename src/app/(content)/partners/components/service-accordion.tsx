import { cn } from '~/lib/utils'
import type { StyleProps, ReactChildren } from '~/lib/types'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionCloseIcon,
} from '~/components/ui/accordion'
import { Spacer } from '~/components/ui/spacer'

type ServiceAccordionProps = StyleProps & {
  children: ReactChildren
  defaultValue?: string[]
}

const ServiceAccordion = ({
  children,
  className,
  defaultValue,
  ...props
}: ServiceAccordionProps) => (
  <Accordion
    {...props}
    type="multiple"
    className={cn('space-y-2', className)}
    defaultValue={defaultValue}
  >
    {children}
  </Accordion>
)

type ServiceAccordionItemProps = {
  value: string
  header: ReactChildren
  children?: ReactChildren
}

const ServiceAccordionItem = ({
  value,
  header,
  children,
}: ServiceAccordionItemProps) => (
  <AccordionItem
    id={value}
    value={value}
    className="rounded-none border-b py-10 first:pt-0 last:border-0 last:pb-0"
  >
    <AccordionTrigger className="group/accordion-trigger">
      {header}
      <AccordionCloseIcon></AccordionCloseIcon>
    </AccordionTrigger>
    <AccordionContent className="max-md:px-6">
      {children}
      <Spacer y="xl" />
    </AccordionContent>
  </AccordionItem>
)

export { ServiceAccordion, ServiceAccordionItem }
