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
              <div className="max-w-40">
                <DirectusImage
                  image={post.cover}
                  className="h-40 w-40 rounded-md"
                />

                {/* <span className="mt-2 line-clamp-2 w-40 max-w-40 text-sm">
                  {post.name}
                </span> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export { SimilarPosts }
