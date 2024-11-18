import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { DOMAIN_URL } from '~/env'
import type { Page } from '~/lib/types'

import { fetchPostBySlug, fetchPosts } from '~/controllers/posts'
import { fetchTopicSections } from '~/controllers/topics'

import { Markdown } from '~/components/markdown'
import { StyleAccent } from '~/modules/style-accent'

import { TopicToC } from '../_components/topic-toc'
import { NavigationBreadcrumbs } from '../_components/navigation-breadcrumbs'

import { PostCover } from './_components/post-cover'
import { PostActions } from './_components/post-action'

type Params = {
  post: string
}

const PostPage: Page<Params> = async props => {
  const params = await props.params

  const slug = params.post

  const post = await fetchPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const sections = await fetchTopicSections().then(items =>
    items.map(item => ({
      ...item,
      active: item.slug === post.section.slug,
    })),
  )

  return (
    <div className="mt-[100px] flex flex-col">
      <StyleAccent color={post.topic.color} />

      <div className="fixed inset-0 -z-20 bg-[#F7F7F9]" />

      <NavigationBreadcrumbs
        items={[
          { href: '/' + post.topic.slug, name: post.topic.name },
          {
            href: '/' + post.topic.slug + '#' + post.section.slug,
            name: post.section.name,
          },
          { name: post.name },
        ]}
        className="py-md"
      />

      <div className="flex gap-md">
        <TopicToC
          items={sections}
          baseUrl={'/' + post.topic.slug}
          className="sticky top-32 h-fit w-[263px] min-w-[263px] max-w-[263px]"
        />
        <div className="flex flex-1 flex-col gap-y-xl">
          <PostCover post={post} />
          <PostActions />
          <Markdown source={post.content} className="max-w-2xl" />
        </div>
      </div>
    </div>
  )
}

export const dynamic = 'force-static'
export const revalidate = false

export const generateStaticParams = async (): Promise<Params[]> => {
  const posts = await fetchPosts()

  const params = posts.map(post => ({
    post: post.slug,
    topic: post.topic.slug,
  }))

  return params
}

export const generateMetadata = async (props: {
  params: Promise<Params>
}): Promise<Metadata> => {
  const params = await props.params
  const slug = params.post

  const post = await fetchPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const title = [post.name, post.topic.name].join(' • ')
  const description = post.description ?? undefined
  const cover = {
    alt: title,
    width: post.cover.width ?? undefined,
    height: post.cover.height ?? undefined,
    url: ['https://cms.allergik.by/assets', post.cover.id].join('/'),
  }

  return {
    title,
    description,
    alternates: {
      canonical: new URL([post.topic.slug, post.slug].join('/'), DOMAIN_URL),
    },
    twitter: {
      card: 'summary_large_image',
      site: 'allergik',
      images: [cover],
    },
    openGraph: {
      title,
      description,
      images: [cover],
      type: 'article',
      section: post.topic.name,
      publishedTime: post.date_created ?? undefined,
      tags: [post.topic.name, post.section.name],
    },
  }
}

export default PostPage
