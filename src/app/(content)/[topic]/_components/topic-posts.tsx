import type { Topic, TopicSection } from '~/lib/directus/_generated'

import { fetchPosts } from '~/controllers/posts'

import { Title } from '~/components/title'
import { Button } from '~/components/ui/button'

import { SmallCard } from '~/components/(cards)/small-card'
import { CoverCard } from '~/components/(cards)/cover-card'

type TopicPostsProps = {
  topic: Pick<Topic, 'id' | 'name' | 'slug' | 'color'>
  section: Pick<TopicSection, 'id' | 'name' | 'slug'>
}

const TopicPosts = async ({ topic, section }: TopicPostsProps) => {
  const posts = await fetchPosts({
    count: 4,
    topic: String(topic.id),
    section: String(section.id),
  })

  if (posts.length === 0) {
    return null
  }

  const coverPosts = posts.slice(0, 1)
  const otherPosts = posts.slice(1)

  return (
    <section
      id={section.slug}
      className="border-b border-b-popover py-[60px] first:pt-0 last:border-b-0"
    >
      <Title highlight as="h4" className="mb-lg text-md font-bold after:!h-2/3">
        {section.name}
      </Title>

      {coverPosts.map(post => (
        <CoverCard
          key={post.slug}
          href={'/' + post.topic.slug + '/' + post.slug}
          image={post.cover}
          title={post.name}
          description={post.description}
          className="mb-2xl h-[430px]"
          detailLabel="Подробнее"
        />
      ))}

      {otherPosts.length > 0 ? (
        <div className="mb-2xl grid grid-cols-3 gap-lg">
          {otherPosts.map(post => (
            <SmallCard
              key={post.slug}
              href={'/' + post.topic.slug + '/' + post.slug}
              image={post.cover}
              title={post.name}
            />
          ))}
        </div>
      ) : null}

      <Button variant="outline" className="h-16 w-full">
        Показать больше
      </Button>
    </section>
  )
}

export { TopicPosts }
