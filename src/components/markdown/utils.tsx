import rehypeSlug from 'rehype-slug'
import remarkFlexibleToc, { type TocItem } from 'remark-flexible-toc'
import type { EvaluateOptions, MDXComponents } from 'next-mdx-remote-client/rsc'

import { Title } from '~/components/title'

const createHeading =
  (
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  ): Exclude<MDXComponents['h1'], undefined> =>
  // eslint-disable-next-line react/display-name
  ({ children, ...props }) => (
    <Title as={as} highlight {...props}>
      {children}
    </Title>
  )

const components: MDXComponents = {
  ul: ({ children }) => (
    <ul className="gap-y-sm flex list-inside list-disc flex-col">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="gap-y-sm flex list-inside list-decimal flex-col">
      {children}
    </ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="rounded-xl bg-_accent px-6 py-4">
      {children}
    </blockquote>
  ),
  p: ({ children }) => (
    <p className="text-md inline leading-normal">{children}</p>
  ),
  h1: createHeading('h1'),
  h2: createHeading('h2'),
  h3: createHeading('h3'),
  h4: createHeading('h4'),
  h5: createHeading('h5'),
  h6: createHeading('h6'),
}

type Scope = {
  toc?: TocItem[]
}

const options: EvaluateOptions<Scope> = {
  mdxOptions: {
    rehypePlugins: [rehypeSlug],
    remarkPlugins: [remarkFlexibleToc],
  },
  vfileDataIntoScope: 'toc',
}

export { options, components }
export type { Scope }
