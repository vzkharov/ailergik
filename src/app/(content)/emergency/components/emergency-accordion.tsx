import { cn } from '~/lib/utils'
import type { StyleProps, ReactChildren } from '~/lib/types'
import type { DirectusFile } from '~/lib/directus/_generated'

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '~/components/ui/accordion'
import { DetailButton } from '~/components/(buttons)/detail-button'
import { DirectusImage } from '~/components/(images)/directus-image'

type EmergencyAccordionItemProps = StyleProps & {
  id: string
  title: string
  color: string

  image?: DirectusFile

  children?: ReactChildren
}

const EmergencyAccordionItem = ({
  id,
  title,
  color,
  image,
  className,
  children,
}: EmergencyAccordionItemProps) => (
  <AccordionItem
    id={id}
    value={id}
    style={{ color }}
    className={cn(
      'rounded-md border border-foreground hover:border-transparent hover:bg-current data-[state=open]:border-transparent data-[state=open]:bg-current',
      'transition-all duration-200',
      className,
    )}
  >
    <AccordionTrigger className="group/accordion-trigger gap-2 px-6 py-2 text-foreground md:px-8 md:py-4">
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
    <AccordionContent className="flex gap-x-10 text-foreground max-md:px-6 md:px-8 md:pb-10">
      {children}
      {image ? (
        <DirectusImage
          image={image}
          className="h-auto w-1/2 object-scale-down object-top"
        />
      ) : null}
    </AccordionContent>
  </AccordionItem>
)

export { EmergencyAccordionItem }
