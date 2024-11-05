import { Image } from '~/components/ui/image'
import { Text } from '~/components/ui/text'

import { CardBlur } from './cards'

const SectionBenefits = () => (
  <div className="grid grid-cols-3 grid-rows-3 gap-5">
    <div className="relative col-span-3">
      <Image alt="" src="/partners/partners_2.png" width={1128} height={572} />
      <CardBlur
        className="absolute bottom-5 left-5 bg-[#E9EEF2CC]/80 backdrop-blur-sm"
        title="Интересный видео-контент для ваших социальных сетей"
      />
    </div>
    <div className="col-span-2">{/* Image + Card */}</div>
    <div className="flex items-center justify-center rounded-3xl bg-[#9ED8F6] text-left">
      <Text className="max-w-[300px] font-helveticaMedium text-4xl">
        Дополнительная бесплатная реклама
      </Text>
    </div>
    <div className="flex items-center justify-center rounded-3xl bg-[#9ED8F6] text-left">
      <Text className="max-w-[300px] font-helveticaMedium text-4xl">
        Обмен аудиториями, расширение клиентской базы
      </Text>
    </div>
    <div className="relative col-span-2">{/* Image + Card */}</div>
  </div>
)

export { SectionBenefits }
