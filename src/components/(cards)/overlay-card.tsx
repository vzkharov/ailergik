import { cn } from '~/lib/utils'
import type { StyleProps, ReactChildren } from '~/lib/types'

type OverlayCardProps = StyleProps & {
  title: string
  description?: string

  children?: ReactChildren
}

const OverlayCard = ({
  title,
  style,
  children,
  className,
  description,
}: OverlayCardProps) => (
  <article
    style={style}
    className={cn(
      'absolute bottom-sm left-sm bg-popover/60 backdrop-blur-sm',
      'flex max-w-[500px] flex-col gap-y-2 rounded-sm p-lg leading-tight',
      className,
    )}
  >
    <h3 className="mb- line-clamp-2 text-2xl">{title}</h3>
    {description ? (
      <p className="mb-3 line-clamp-1 max-w-lg text-lg">{description}</p>
    ) : null}
    <div className="mt-auto">{children}</div>
  </article>
)

export { OverlayCard }
export type { OverlayCardProps }
