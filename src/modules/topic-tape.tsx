import { tv } from 'tailwind-variants'
import Link from 'next/link'

import { fetchTopicSections, Topic } from '~/controllers/topics'

import { Title } from '~/components/title'
import { Button } from '~/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

import { SectionTape } from './section-tape'

const TopicTape = async ({ topic }: { topic: Topic }) => {
  const sections = await fetchTopicSections()

  if (sections.length === 0) {
    return null
  }

  return (
    <section id={topic.slug} className={styles.root()}>
      <Title as="h3" className={styles.title()}>
        [ {topic.name} ]
        <span
          style={{ backgroundColor: topic.color }}
          className={styles.titleBar()}
        />
      </Title>

      <Tabs defaultValue={ALL_VALUE} className="mb-lg">
        <TabsList>
          <Link href={'#' + topic.slug}>
            <TabsTrigger value={ALL_VALUE} className={styles.tab()}>
              Все
            </TabsTrigger>
          </Link>

          {sections.map(section => (
            <Link
              key={section.slug}
              href={'#' + topic.slug + '-' + section.slug}
            >
              <TabsTrigger value={section.slug} className={styles.tab()}>
                {section.name}
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>
      </Tabs>

      {sections.map(section => (
        <SectionTape
          id={topic.slug + '-' + section.slug}
          key={section.slug}
          topic={topic}
          section={section}
        />
      ))}

      <Link href={'/' + topic.slug} className={styles.link()}>
        <Button variant="outline" className={styles.linkButton()}>
          Перейти в раздел &quot;{topic.name}&quot;
        </Button>
      </Link>
    </section>
  )
}

const ALL_VALUE = 'all'

const styles = tv({
  slots: {
    root: 'flex flex-col gap-y-xl',
    title: 'relative mb-xl w-fit !text-3xl',
    titleBar: 'absolute bottom-0 left-6 -z-10 h-1/2 w-[95%] rounded-[8px]',
    link: 'mb-xl mt-2xl w-full',
    linkButton: 'h-24 w-full',
    tab: 'uppercase',
  },
})()

export { TopicTape }
