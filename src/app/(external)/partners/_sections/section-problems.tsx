import { problems } from '../_data/problems'

import { BlogCard } from '../components/blog-card'

const SectionProblems = () => (
  <div className="flex flex-col gap-y-12 max-md:mt-20 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-x-24 md:gap-y-0">
    <div className="row-span-1 place-content-end">
      <BlogCard key={problems[0].id} {...problems[0]} />
    </div>
    <div className="col-start-2 row-span-3 row-start-1 place-content-center">
      <BlogCard key={problems[1].id} {...problems[1]} />
    </div>
    <div className="col-span-1 row-start-3">
      <BlogCard key={problems[2].id} {...problems[2]} />
    </div>
  </div>
)

export { SectionProblems }
