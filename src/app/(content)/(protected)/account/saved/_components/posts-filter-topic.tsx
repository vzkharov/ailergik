'use client'

import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'

import { usePostsFilterState } from '~/features/(posts)/use-posts-filter-state'

import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

type PostsFilterTopicProps = StyleProps & {
  topics: Array<{ slug: string; name: string }>
}

const ALL_VALUE = ''

const PostsFilterTopic = ({
  topics,
  style,
  className,
}: PostsFilterTopicProps) => {
  const [state, setState] = usePostsFilterState(0)

  return (
    <Tabs
      style={style}
      className={styles.root({ className })}
      defaultValue={state.topic || ALL_VALUE}
      onValueChange={(value: string) => setState({ page: 1, topic: value })}
    >
      <div className={styles.tabs()}>
        <TabsList className={styles.tabsList()}>
          <TabsTrigger value={ALL_VALUE} className={styles.tabsTrigger()}>
            Все
          </TabsTrigger>

          {topics.map(({ name, slug }) => (
            <TabsTrigger
              key={slug}
              value={slug}
              className={styles.tabsTrigger()}
            >
              {name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
    </Tabs>
  )
}

const styles = tv({
  slots: {
    root: '',
    tabs: 'relative after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:top-0 after:w-16 after:bg-gradient-to-r after:from-transparent after:to-background',
    tabsList: 'h-fit pb-4 pr-4',
    tabsTrigger: 'uppercase',
    tabsContent: 'grid grid-cols-3 gap-x-md gap-y-sm data-[state=active]:pt-sm',
  },
})()

export { PostsFilterTopic }
