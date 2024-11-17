import Image from 'next/image'

import { Header } from '~/components/header'
import { DetailButton } from '~/components/(buttons)/detail-button'

const WelcomeSection = () => {
  return (
    <div className="relative">
      <div className="top-md absolute w-full">
        <Header />
      </div>

      <Image
        alt="easy"
        src="/welcome.png"
        width={1128}
        height={572}
        className="max-md:h-[450px] max-md:rounded-3xl"
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
}

export { WelcomeSection }
