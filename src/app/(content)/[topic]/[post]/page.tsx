import { notFound, redirect } from 'next/navigation'

import type { Page } from '~/lib/types'

import { fetchPostById } from '~/controllers/posts'

import { Title } from '~/components/title'
import { Markdown } from '~/components/markdown'
import { DirectusImage } from '~/components/(images)/directus-image'
import { StyleAccent } from '~/modules/style-accent'

import { PostBreadcrumbs } from '../_components/post-breadcrumbs'

type Params = {
  post: string
}

const PostPage: Page<Params> = async props => {
  redirect('/')

  const params = await props.params

  const slug = params.post

  const post = await fetchPostById(slug)

  if (!post) {
    notFound()
  }

  return (
    <div>
      <StyleAccent color={post.topic.color} />
      <PostBreadcrumbs
        topic={post.topic}
        section={post.section}
        current={post.name}
      />

      <DirectusImage image={post.cover} />

      <Title as="h1" className="my-4">
        {post.name}
      </Title>

      <Markdown source={post.content} />
    </div>
  )
}

export default PostPage
