import { problems } from '../_data/problems'

import { ProblemCard } from '../components/problem-card'

const SectionProblems = () => (
  <div className="flex flex-col gap-y-12 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-x-20 md:gap-y-20">
    <div className="row-span-1">
      <ProblemCard key={problems[0].id} {...problems[0]} />
    </div>
    <div className="col-start-2 row-span-3 row-start-1 place-self-center">
      <ProblemCard key={problems[1].id} {...problems[1]} />
    </div>
    <div className="col-span-1 row-span-2 row-start-2 place-content-end">
      <ProblemCard key={problems[2].id} {...problems[2]} />
    </div>
  </div>
)

export { SectionProblems }
