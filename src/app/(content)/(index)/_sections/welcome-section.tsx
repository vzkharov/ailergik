import Image from 'next/image'

import { DetailButton } from '~/components/(buttons)/detail-button'

const WelcomeSection = () => (
  <div className="relative">
    <Image
      alt=""
      loading="eager"
      src="/welcome.png"
      width={1128}
      height={680}
      className="max-md:rounded-3xl max-md:h-[450px]"
    />

    <div className="absolute bottom-0 left-0">
      <div className="w-fit pt-6">
        <DetailButton>Пройти тест</DetailButton>
      </div>
      <h1 className="w-fit translate-y-3 pt-6 font-normal uppercase leading-none tracking-tight">
        умный веб-сервис <br /> для аллергиков
      </h1>
    </div>
  </div>
)

export { WelcomeSection }
