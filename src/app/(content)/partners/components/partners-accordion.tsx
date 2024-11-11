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
import { DetailButton } from '~/components/(buttons)/detail-button'

type PartnersAccordionProps = StyleProps & {
  children: ReactChildren
  defaultValue?: string[]
}

const PartnersAccordion = ({
  children,
  className,
  defaultValue,
  ...props
}: PartnersAccordionProps) => (
  <Accordion
    {...props}
    type="multiple"
    className={cn('space-y-2', className)}
    defaultValue={defaultValue}
  >
    {children}
  </Accordion>
)

type PartnersAccordionItemProps = {
  title: string
  description: string
  value: string
  children?: ReactChildren
  color: string
}

const PartnersAccordionItem = ({
  value,
  title,
  description,
  children,
  color,
}: PartnersAccordionItemProps) => (
  <AccordionItem
    id={value}
    value={value}
    style={{ color: color }}
    className="rounded-2xl border border-black hover:border-transparent hover:bg-current data-[state=open]:border-none data-[state=open]:bg-current"
  >
    <AccordionTrigger className="group/accordion-trigger gap-2 p-6 text-[#142850]">
      <div className="flex flex-col items-start space-y-1 group-[[data-state=open]]/accordion-trigger:hidden">
        <p className="w-full font-helveticaItalicLight text-sm text-black md:text-base">
          {description}
        </p>
        <h6 className="font-helveticaMedium text-2xl">{title}</h6>
      </div>
      <h6 className="pl-2 pt-4 font-helveticaMedium text-4xl group-[[data-state=closed]]/accordion-trigger:hidden">
        {title}
      </h6>
      <AccordionCloseIcon>
        <DetailButton className="inline-flex border-none group-[[data-state=open]]/accordion-trigger:hidden" />
        <DetailButton
          className="hidden border-none pt-4 group-[[data-state=open]]/accordion-trigger:inline-flex"
          rotate={true}
        >
          Скрыть
        </DetailButton>
      </AccordionCloseIcon>
    </AccordionTrigger>
    <AccordionContent className="text-[#142850] max-md:px-6">
      {children}
      <Spacer y="xl" />
    </AccordionContent>
  </AccordionItem>
)

export { PartnersAccordion, PartnersAccordionItem }
