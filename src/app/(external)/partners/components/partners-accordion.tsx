import { cn } from '~/lib/utils'
import type { StyleProps, ReactChildren } from '~/lib/types'

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '~/components/ui/accordion'

import { TopicCard, TopicContent } from './topic-card'

type Content = {
  title: string
  text: string
}

type PartnersAccordionItemProps = StyleProps & {
  id: string
  title: string
  color: string
  image: string[]
  content: Content[]
  description: string
  children?: ReactChildren
}

const PartnersAccordionItem = ({
  id,
  title,
  color,
  image,
  content,
  className,
  children,
  description,
}: PartnersAccordionItemProps) => (
  <AccordionItem
    id={id}
    value={id}
    style={{ color: color }}
    className={cn(
      'rounded-xl border border-black hover:border-transparent hover:bg-current data-[state=open]:border-none data-[state=open]:bg-current',
      className,
    )}
  >
    <AccordionTrigger className="group/accordion-trigger cursor-pointer gap-2 p-6 text-[#142850] md:p-8">
      <TopicCard title={title} description={description} />
    </AccordionTrigger>
    <AccordionContent className="text-[#142850] max-md:px-6">
      <TopicContent content={content} images={image} />
      {children}
    </AccordionContent>
  </AccordionItem>
)

export { PartnersAccordionItem }
