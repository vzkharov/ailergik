import { tv } from 'tailwind-variants'

import { fetchPosts } from '~/controllers/posts'
import type { Topic, TopicSection } from '~/controllers/topics'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '~/components/ui/carousel'
import { Title } from '~/components/title'
import { PostCard } from '~/components/post-card'

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
    <section className={styles.root()}>
      <Title className={styles.title()}>Другие статьи из раздела</Title>
      <Carousel className={styles.carousel()}>
        <CarouselContent className={styles.carouselContent()}>
          {posts.map(post => (
            <CarouselItem key={post.slug} className={styles.carouselItem()}>
              <PostCard
                index={0}
                post={post}
                view="small"
                className={styles.card()}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

const styles = tv({
  slots: {
    root: '',
    title: 'mb-xl',
    carousel: '',
    carouselContent: '',
    carouselItem: 'w-64',
    card: 'w-full h-full',
  },
})()

export { SimilarPosts }
