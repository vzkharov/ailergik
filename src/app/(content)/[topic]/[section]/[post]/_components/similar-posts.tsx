import Link from 'next/link'
import { DirectusImage } from '~/components/(images)/directus-image'
import { Title } from '~/components/title'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '~/components/ui/carousel'
import { fetchPosts } from '~/controllers/posts'
import { Topic, TopicSection } from '~/lib/directus/_generated'

type SimilarPostsProps = {
  topic: Pick<Topic, 'id' | 'name' | 'slug'>
  section: Pick<TopicSection, 'id' | 'name' | 'slug'>
}

const SimilarPosts = async ({ topic, section }: SimilarPostsProps) => {
  const posts = await fetchPosts({
    count: 15,
    topic: String(topic.id),
    section: String(section.id),
  })

  return (
    <section>
      <Title className="mb-xl">Другие статьи из раздела</Title>
      <Carousel>
        <CarouselContent>
          {posts.map(post => (
            <CarouselItem key={post.slug} className="max-w-44">
              <div className="relative max-w-40 select-none">
                <DirectusImage
                  image={post.cover}
                  className="h-40 w-40 rounded-md"
                />

                <span className="mt-2 line-clamp-2 w-40 max-w-40 text-sm font-medium">
                  {post.name}
                </span>
                <Link
                  href={'/' + topic.slug + '/' + post.slug}
                  className="absolute inset-0 transition-all hover:bg-background/40"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export { SimilarPosts }
