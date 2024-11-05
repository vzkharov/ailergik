import { cn } from '~/lib/utils'
import { Image } from '~/components/ui/image'
import type { StyleProps, ReactChildren } from '~/lib/types'

type CardProps = StyleProps & {
  title: string
  description?: string
  children?: ReactChildren
  endContent?: ReactChildren
  startContent?: ReactChildren
}

const CardBlur = ({ title, children, endContent, className }: CardProps) => (
  <article className={cn('flex items-center gap-2 rounded-2xl p-6', className)}>
    <div className="flex-1 space-y-3 self-start">
      {title ? (
        <h5 className="flex max-w-[400px] items-center justify-between gap-x-2 font-helveticaMedium text-3xl">
          {title}
        </h5>
      ) : null}
      {children ? (
        <div className="max-w-[500px] font-helveticaLight">{children}</div>
      ) : null}

      {endContent}
    </div>
  </article>
)

const CardOutlined = ({
  title,
  children,
  endContent,
  className,
}: CardProps) => (
  <article
    className={cn(
      'relative flex items-center gap-2 rounded-2xl p-6',
      className,
    )}
  >
    <div className="flex-1 space-y-1 self-start">
      {title ? (
        <h6 className="flex w-full items-center justify-between font-helveticaItalicLight text-base">
          {title}
        </h6>
      ) : null}
      {children ? (
        <div className="font-helveticaMedium text-2xl">{children}</div>
      ) : null}
    </div>
    {endContent}
  </article>
)

type CardProblemsProps = CardProps & {
  src: string
}

const CardProblems = ({ title, description, src }: CardProblemsProps) => (
  <div className="w-full overflow-hidden">
    <Image src={src} alt={title} className="w-full rounded-lg object-cover" />
    <div className="p-4">
      <h3 className="mb-2 font-helveticaMedium text-3xl">{title}</h3>
      <p className="font-helveticaLight text-xl">{description}</p>
    </div>
  </div>
)

const CardFunctions = ({
  title,
  children,
  endContent,
  className,
}: CardProps) => (
  <article
    className={cn(
      'relative flex items-center gap-10 rounded-2xl p-6',
      className,
    )}
  >
    <div className="flex-1 space-y-20">
      {title ? (
        <h6 className="flex max-w-[550px] items-center justify-between font-helveticaMedium text-4xl">
          {title}
        </h6>
      ) : null}
      {children ? (
        <div className="font-helveticaMedium text-2xl">{children}</div>
      ) : null}
    </div>
    {endContent}
  </article>
)

export { CardBlur, CardOutlined, CardProblems, CardFunctions }
