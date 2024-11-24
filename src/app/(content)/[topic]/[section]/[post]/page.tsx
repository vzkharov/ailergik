import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { DOMAIN_URL } from '~/env'
import type { Page } from '~/lib/types'

import { fetchTopics } from '~/controllers/topics'
import { fetchPosts, fetchPostBySlug } from '~/controllers/posts'

import { Spacer } from '~/components/ui/spacer'
import { Markdown } from '~/components/markdown'
import { NavigationBreadcrumbs } from '~/components/navigation-breadcrumbs'

import { TopicToC } from '~/modules/topic-toc'
import { StyleAccent } from '~/modules/style-accent'
import { SuggestPosts } from '~/modules/suggest-posts'

import { PostCover } from './_components/post-cover'
import { PostActions } from './_components/post-action'
import { SimilarPosts } from './_components/similar-posts'

import { styles } from './styles'

type Params = {
  post: string
  topic: string
  section: string
}

const PostPage: Page<Params> = async props => {
  const params = await props.params

  const slug = params.post

  const post = await fetchPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const topics = await fetchTopics().then(topics =>
    topics.filter(topic => topic.slug !== post.topic.slug),
  )

  return (
    <>
      <StyleAccent color={post.topic.color} />

      <NavigationBreadcrumbs
        items={[
          { name: post.topic.name, href: '/' + post.topic.slug },
          {
            name: post.section.name,
            href: '/' + post.topic.slug + '/' + post.section.slug,
          },
          { name: post.name },
        ]}
      />

      <Spacer y="md" />

      <div className={styles.main()}>
        <TopicToC
          activeSlug={post.section.slug}
          baseUrl={'/' + post.topic.slug}
          className={styles.toc()}
        />
        <div className={styles.content()}>
          <PostCover post={post} />
          <PostActions />
          <Markdown source={post.content} className={styles.markdown()} />
        </div>
      </div>

      <Spacer y="2xl" />

      <SimilarPosts topic={post.topic} section={post.section} />

      <Spacer y="2xl" />

      {topics.map(topic => (
        <SuggestPosts
          key={topic.slug}
          topic={topic}
          className="border-t py-2xl"
        />
      ))}
    </>
  )
}

export const generateStaticParams = async (): Promise<Params[]> => {
  const posts = await fetchPosts()

  const params = posts.map(post => ({
    post: post.slug,
    topic: post.topic.slug,
    section: post.section.slug,
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
