import Link from 'next/link'

import { Page } from '~/lib/types'

import { fetchTopics } from '~/controllers/topics'
import { SectionDelete } from './_sections/section-delete'

const Home: Page = async () => {
  const topics = await fetchTopics()
  return (
    <div>
      <h1 className="mb-4 font-sans text-4xl font-bold">Home Page</h1>
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>
            <Link
              href={'/' + topic.slug}
              style={{ color: topic.color }}
              className="font-[Helvetica] font-bold capitalize"
            >
              {topic.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Взять из нее что нужно и удалить */}
      <SectionDelete />
    </div>
  )
}

export default Home
