import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'

import { fetchPosts } from '~/controllers/posts'
import type { Topic } from '~/controllers/topics'

import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from '~/components/ui/carousel'
import { Title } from '~/components/title'
import { PostCard } from '~/components/post-card'
import { Button } from '~/components/ui/button'
import Link from 'next/link'

type SuggestPostsProps = StyleProps & {
  count?: number
  topic: Pick<Topic, 'id' | 'slug' | 'name' | 'color'>
}

const SuggestPosts = async (props: SuggestPostsProps) => {
  const { style, className, topic, count = 10 } = props

  const posts = await fetchPosts({ count, topic: String(topic.id) })

  return (
    <section style={style} className={styles.root({ className })}>
      <Title as="h3" className={styles.title()}>
        [ {topic.name} ]
        <span
          style={{ backgroundColor: topic.color }}
          className={styles.titleBar()}
        />
      </Title>
      <Carousel className={styles.carousel()}>
        <CarouselContent>
          {posts.map((post, idx) => (
            <CarouselItem key={post.id} className={styles.carouselItem()}>
              <PostCard post={post} index={idx} view="small" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Link href={'/' + topic.slug} className={styles.link()}>
        <Button variant="outline" className={styles.linkButton()}>
          Перейти в раздел
        </Button>
      </Link>
    </section>
  )
}

const styles = tv({
  slots: {
    root: 'flex flex-col gap-y-2xl',
    title: 'relative w-fit !text-3xl',
    titleBar: 'absolute bottom-0 left-6 -z-10 h-1/2 w-[95%] rounded-[8px]',
    carousel: '',
    carouselItem: 'w-64 select-none',
    link: 'w-full max-w-xl',
    linkButton: 'h-16 w-full',
  },
})()

export { SuggestPosts }
