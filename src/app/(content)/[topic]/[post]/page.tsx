import { notFound } from 'next/navigation'

import type { Page } from '~/lib/types'

import { fetchPostById } from '~/controllers/posts'

type Params = {
  post: string
}

const PostPage: Page<Params> = async props => {
  const params = await props.params

  const slug = params.post

  const post = await fetchPostById(slug)

  if (!post) {
    notFound()
  }

  return (
    <div>
      <pre className="font-mono">{JSON.stringify(post, null, 2)}</pre>
      <h1 className="my-4 text-4xl font-bold">
        {[post.topic.name, post.section.name, post.name].join(' / ')}
      </h1>
    </div>
  )
}

export default PostPage
