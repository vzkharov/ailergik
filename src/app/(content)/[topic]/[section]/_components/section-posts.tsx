import { tv } from 'tailwind-variants'

import {
  fetchTopicSubsections,
  type Topic,
  type TopicSection,
} from '~/controllers/topics'
import { fetchPosts } from '~/controllers/posts'

import { PostCard } from '~/components/post-card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '~/components/ui/tabs'

type SectionPostsProps = {
  topic: Topic
  section: TopicSection
}

const SectionPosts = async (props: SectionPostsProps) => {
  const { topic, section } = props

  const subsections = await fetchTopicSubsections().then(items =>
    items.filter(
      item =>
        !!section.subsections?.find(subsection => subsection.id === item.id),
    ),
  )

  const posts = await fetchPosts({
    count: 9,
    topic: String(topic.id),
    section: String(section.id),
  })

  return (
    <Tabs defaultValue={ALL_VALUE} className={styles.root()}>
      <div className={styles.tabs()}>
        <TabsList className={styles.tabsList()}>
          <TabsTrigger value={ALL_VALUE} className={styles.tabsTrigger()}>
            Все
          </TabsTrigger>

          {subsections.map(subsection => (
            <TabsTrigger
              key={subsection.slug}
              value={subsection.slug}
              className={styles.tabsTrigger()}
            >
              {subsection.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <TabsContent value={ALL_VALUE} className={styles.tabsContent()}>
        {posts.map(post => (
          <PostCard key={post.slug} index={0} post={post} view="small" />
        ))}
      </TabsContent>
      {subsections.map(subsection => (
        <TabsContent
          key={subsection.slug}
          value={subsection.slug}
          className={styles.tabsContent()}
        >
          {posts
            .filter(post => post.subsection?.id === subsection.id)
            .map(post => (
              <PostCard key={post.slug} index={0} post={post} view="small" />
            ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}

const ALL_VALUE = ''

const styles = tv({
  slots: {
    root: 'min-h-[600px]',
    tabs: 'relative after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:top-0 after:w-16 after:bg-gradient-to-r after:from-transparent after:to-background',
    tabsList: 'h-fit pb-4 pr-4',
    tabsTrigger: 'uppercase',
    tabsContent: 'grid grid-cols-3 gap-x-md gap-y-sm data-[state=active]:pt-sm',
  },
})()

export { SectionPosts }
