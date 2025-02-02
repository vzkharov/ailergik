/** @todo */

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Image } from '~/components/ui/image'
import { Button } from '~/components/ui/button'
import { Dialog, DialogTrigger } from '~/components/ui/dialog'
import { DetailButton } from '~/components/(buttons)/detail-button'
import { JoinForm } from '~/components/(dialog-forms)/join-form'

type Content = {
  title: string
  text: string
}

type TopicContentProps = {
  content: Content[]
  images: string[]
}

type TopicCardProps = StyleProps & {
  title: string
  description: string
}

const TopicCard = ({
  title,
  description,
  style,
  className,
}: TopicCardProps) => (
  <article
    style={style}
    className={cn('flex w-full items-center gap-2 md:h-11', className)}
  >
    <div className="flex-1 space-y-2 self-start group-[[data-state=open]]/accordion-trigger:hidden">
      <p className="flex w-full items-center text-start text-sm font-normal md:justify-between md:text-md">
        {description}
      </p>
      <h4 className="text-start text-xl font-medium">{title}</h4>
    </div>
    <h6 className="w-full text-start text-xl font-medium group-[[data-state=closed]]/accordion-trigger:hidden md:text-2xl">
      {title}
    </h6>
    <DetailButton
      hideChildrenOnMobile
      className="border-none group-[[data-state=open]]/accordion-trigger:hidden max-md:[&>div]:hidden"
    />
    <DetailButton
      hideChildrenOnMobile
      rotate
      className="hidden border-none group-[[data-state=open]]/accordion-trigger:inline-flex max-md:[&>div]:hidden"
    >
      Скрыть
    </DetailButton>
  </article>
)

const TopicContent = ({ content, images }: TopicContentProps) => (
  <article className="flex flex-col-reverse gap-10 md:mb-10 md:mt-4 md:flex-row md:px-8">
    <div className="flex-1 space-y-5 md:space-y-10">
      {content.map((block, index) => (
        <div key={index} className="space-y-2">
          <h5 className="text-lg uppercase">{block.title}</h5>
          <p className="text-sm leading-5">{block.text}</p>
        </div>
      ))}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="colored" className="w-full uppercase md:w-fit">
            Отправить сообщение
          </Button>
        </DialogTrigger>
        <JoinForm />
      </Dialog>
    </div>

    <div className="flex flex-row justify-center gap-5 md:order-last">
      {images.map((img, index) => (
        <div key={index}>
          <Image
            src={img}
            alt="Medicine Image"
            width={250}
            height={500}
            className="aspect-[1/2] h-full overflow-hidden object-contain"
          />
        </div>
      ))}
    </div>
  </article>
)

export { TopicCard, TopicContent }
