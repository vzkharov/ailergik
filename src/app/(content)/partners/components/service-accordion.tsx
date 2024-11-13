import { cn } from '~/lib/utils'
import type { StyleProps, ReactChildren } from '~/lib/types'

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '~/components/ui/accordion'
import { ServiceCard } from './service-card'

type ServiceAccordionItemProps = StyleProps & {
  id: string
  href: string
  img: string
  title: string
  content: Content[]
  children?: ReactChildren
}

type Content = {
  title: string
  text: string
}

const ServiceAccordionItem = ({
  id,
  img,
  title,
  content,
  className,
  children,
}: ServiceAccordionItemProps) => (
  <AccordionItem
    id={id}
    value={id}
    className={cn(
      'rounded-none border-b py-10 first:pt-0 last:border-0 last:pb-0',
      className,
    )}
  >
    <AccordionTrigger className="group/accordion-trigger">
      <ServiceCard title={title} img={img} />
    </AccordionTrigger>
    <AccordionContent>
      <div className="grid gap-5 md:mt-10 md:grid-cols-2 md:grid-rows-2 md:gap-20">
        {content.map((item, index) => (
          <div key={index} className="flex border-l-2 border-l-[#9ED8F6]">
            <div className="ml-5 flex flex-col items-start gap-y-5">
              <h5 className="font-helveticaMedium text-sm uppercase">
                {item.title}
              </h5>
              <p className="font-helveticaLight text-xs leading-5 md:text-base">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      {children}
    </AccordionContent>
  </AccordionItem>
)

export { ServiceAccordionItem }
