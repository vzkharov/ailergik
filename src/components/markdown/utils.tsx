import Image from 'next/image'
import rehypeSlug from 'rehype-slug'
import remarkFlexibleToc, { type TocItem } from 'remark-flexible-toc'
import type { EvaluateOptions, MDXComponents } from 'next-mdx-remote-client/rsc'

import { Title } from '~/components/title'
import { Separator } from '~/components/ui/separator'

const createHeading =
  (
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  ): Exclude<MDXComponents['h1'], undefined> =>
  // eslint-disable-next-line react/display-name
  ({ children, ...props }) => (
    <Title as={as} {...props}>
      {children}
    </Title>
  )

const components: MDXComponents = {
  ul: ({ children }) => (
    <ul className="my-md flex list-inside list-disc flex-col gap-y-sm text-md leading-normal">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-md flex list-inside list-decimal flex-col gap-y-sm text-md leading-normal">
      {children}
    </ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="relative my-md overflow-hidden rounded-xs px-6 py-4">
      <div className="absolute inset-0 -z-10 bg-topic opacity-50" />
      {children}
    </blockquote>
  ),
  p: ({ children }) => (
    <p className="inline text-md leading-normal">{children}</p>
  ),
  strong: ({ children }) => <strong className="font-medium">{children}</strong>,
  img: ({ src }) =>
    src ? (
      <Image
        alt=""
        src={src}
        width={552}
        height={320}
        className="my-md h-auto w-full rounded-md"
      />
    ) : null,

  hr: () => <Separator className="my-[40px]" />,
  h1: createHeading('h1'),
  h2: createHeading('h2'),
  h3: ({ id, title, children }) => (
    <Title as="h3" id={id} title={title} className="text-xl">
      {children}
    </Title>
  ),
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
