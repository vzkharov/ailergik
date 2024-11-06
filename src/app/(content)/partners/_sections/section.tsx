import type { As, MergeWithHTMLProps } from '~/lib/types'

type Props = {
  as?: As
  bg?: string
  title?: string
}

type SectionProps<T extends As = 'section'> = MergeWithHTMLProps<T, Props>

const Section = <T extends As = 'section'>({
  id,
  as,
  bg,
  className,
  children,
}: SectionProps<T>) => {
  const Slot = as || 'section'

  return (
    <Slot id={id} className={bg}>
      <div className={className}>{children}</div>
    </Slot>
  )
}

export { Section }
export type { SectionProps }
