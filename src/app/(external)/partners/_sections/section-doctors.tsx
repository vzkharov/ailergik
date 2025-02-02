import { cn } from '~/lib/utils'
import { StyleProps } from '~/lib/types'

import { doctors } from '../_data/doctors'

import { Spacer } from '~/components/ui/spacer'
import { DoctorCard } from '../components/doctor-card'

const SectionDoctors = ({ style, className }: StyleProps) => (
  <>
    <div
      style={style}
      className={cn(
        'grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-20',
        className,
      )}
    >
      {doctors.map(item => (
        <DoctorCard key={item.id} {...item} />
      ))}
    </div>

    <Spacer y="3xl" />

    <h5 className="text-center text-lg leading-5 max-md:text-md">
      Мы - за комплексный подход, это принципиально. Кроме аллерголога
      иммунолога мы пригласили врачей экспертов из сопутствующих специализаций -
      дерматолога, невролога, гастроэнтеролога, педиатра и других...
    </h5>
  </>
)

export { SectionDoctors }
