import { cn } from '~/lib/utils'
import { StyleProps } from '~/lib/types'

import { benefits } from '../_data/benefits'

import { BenefitCard } from '../components/benefit-card'

const SectionBenefit = ({ style, className }: StyleProps) => (
  <div style={style} className={cn('flex flex-col gap-y-5', className)}>
    {benefits.map(benefit => (
      <BenefitCard
        key={benefit.id}
        {...benefit}
        className="max-md:flex-col md:odd:flex-row-reverse [&>*]:h-[300px] [&>*]:first:h-[385px]"
      />
    ))}
  </div>
)

export { SectionBenefit }

// const SectionProblems = ({ style, className }: StyleProps) => ()
