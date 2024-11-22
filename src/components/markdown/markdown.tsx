import { evaluate } from 'next-mdx-remote-client/rsc'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { options, components, type Scope } from './utils'

type MarkdownProps = StyleProps & {
  source: string
}

const Markdown = async ({ source, style, className }: MarkdownProps) => {
  const { content } = await evaluate<{}, Scope>({
    source,
    options,
    components,
  })

  return (
    <section style={style} className={cn('flex gap-x-10', className)}>
      <div className="flex flex-col gap-y-5">{content}</div>
    </section>
  )
}

export { Markdown }
