import { Fragment } from 'react'
import Link from 'next/link'

import type { Topic, TopicSection } from '~/lib/directus/_generated'

import { fetchPosts } from '~/controllers/posts'
import { fetchTopicSections } from '~/controllers/topics'

import { Title } from '~/components/title'
import { Button } from '~/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

import { BigCard } from '~/components/(cards)/big-card'
import { CoverCard } from '~/components/(cards)/cover-card'
import { SmallCard } from '~/components/(cards)/small-card'

const TopicTape = async ({
  topic,
}: {
  topic: Pick<Topic, 'id' | 'slug' | 'name' | 'color'>
}) => {
  const topicSections = await fetchTopicSections().then(sections =>
    sections.slice(0, 4),
  )

  return (
    <section id={topic.slug} className="flex flex-col gap-y-xl">
      <Title as="h3" className="relative mb-xl w-fit !text-3xl">
        [ {topic.name} ]
        <span
          style={{ backgroundColor: topic.color }}
          className="absolute bottom-0 left-6 -z-10 h-1/2 w-[95%] rounded-[8px]"
        />
      </Title>

      <Tabs defaultValue="" className="mb-lg">
        <TabsList>
          <Link href={'#' + topic.slug}>
            <TabsTrigger value="" className="uppercase">
              Все
            </TabsTrigger>
          </Link>
          {topicSections.map(_section => (
            <Link
              href={'#' + topic.slug + '-' + _section.slug}
              key={_section.slug}
            >
              <TabsTrigger value={_section.slug} className="uppercase">
                {_section.name}
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>
      </Tabs>

      {topicSections.map(_section => (
        <Fragment key={_section.slug}>
          <SectionTape
            section={{ ..._section, view: _section.view.value }}
            topic={topic}
          />
        </Fragment>
      ))}

      <Link href={'/' + topic.slug} className="mb-xl mt-2xl w-full">
        <Button variant="outline" className="h-24 w-full">
          Перейти в раздел &quot;Медицина&quot;
        </Button>
      </Link>
    </section>
  )
}

const SectionTape = async ({
  topic,
  section,
}: {
  topic: Pick<Topic, 'id' | 'slug' | 'name' | 'color'>
  section: Pick<TopicSection, 'id' | 'name' | 'slug'> & { view: string }
}) => {
  const posts = await fetchPosts({
    topic: String(topic.id),
    section: String(section.id),
    count: 4,
  })

  if (posts.length === 0) {
    return null
  }

  const itemsCount: number = (() => {
    switch (section.view) {
      case 'small': {
        return 4
      }

      case 'big': {
        return 1
      }

      case 'bento': {
        return 3
      }

      case 'cover': {
        return 1
      }

      default: {
        return 1
      }
    }
  })()

  return (
    <div id={topic.slug + '-' + section.slug} className={styles.section.root}>
      <h5 className={styles.section.title}>{section.name}</h5>
      <div className={styles.section.layout[section.view]}>
        {posts.slice(0, itemsCount).map(post => {
          const href = ['', post.topic.slug, post.slug].join('/')

          if (section.view === 'cover') {
            return (
              <CoverCard
                key={post.slug}
                title={post.name}
                image={post.cover}
                description={post.description}
                detailLabel="Подробнее"
                href={href}
                className="h-[550px]"
              />
            )
          }

          if (section.view === 'big') {
            return (
              <BigCard
                key={post.slug}
                title={post.name}
                image={post.cover}
                description={post.description}
                detailLabel="Читать статью"
                href={href}
              />
            )
          }

          if (section.view === 'small') {
            return (
              <SmallCard
                key={post.slug}
                href={href}
                image={post.cover}
                title={post.name}
              />
            )
          }

          if (section.view === 'bento') {
          }

          return null
        })}
      </div>
    </div>
  )
}

const styles = {
  section: {
    root: 'flex flex-col gap-y-md border-t py-[40px]',
    title: 'text-md font-medium uppercase text-muted-foreground',
    layout: {
      small: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg',
      bento:
        'flex flex-col gap-y-12 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-x-20 md:gap-y-20',
      big: 'w-full',
      cover: 'w-full',
    } as Record<string, string>,
    item: '',
  },
}

export { TopicTape }
