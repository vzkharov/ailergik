import { cn } from '~/lib/utils'
import { StyleProps } from '~/lib/types'

import { Title } from '~/components/title'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'
import { DetailButton } from '~/components/(buttons)/detail-button'

type PostAccordionItemProps = StyleProps & {
  id: string
  title: string
  content?: string
  color: string
}

const PostAccordionItem = ({
  id,
  title,
  content,
  className,
  color,
}: PostAccordionItemProps) => (
  <AccordionItem
    id={id}
    value={id}
    style={{ color: color }}
    className={cn(
      'rounded-xl border border-black hover:border-transparent hover:bg-current data-[state=open]:border-none data-[state=open]:bg-current',
      className,
    )}
  >
    <AccordionTrigger className="group/accordion-trigger gap-2 p-6 text-[#142850] md:p-8">
      <Title as="h4" className="w-full flex-1 text-start text-lg">
        {title}
      </Title>
      <DetailButton
        variant="regular"
        className="border-none group-[[data-state=open]]/accordion-trigger:hidden max-md:[&>div]:hidden"
      />
      <DetailButton
        rotate
        variant="regular"
        className="hidden border-none group-[[data-state=open]]/accordion-trigger:inline-flex max-md:[&>div]:hidden"
      >
        Скрыть
      </DetailButton>
    </AccordionTrigger>
    <AccordionContent className="px-6 text-[#142850] max-md:px-6">
      <p className="inline w-full text-start text-md leading-normal">
        {content}
      </p>
    </AccordionContent>
  </AccordionItem>
)

export { PostAccordionItem }
