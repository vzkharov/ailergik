import type { Page } from '~/lib/types'

import { Image } from '~/components/ui/image'

import { Title } from '~/components/title'
import { Header } from '~/components/header'

import { SectionEmergency } from './_sections/section-emergency'

const EmergencyPage: Page = () => (
  <>
    <div className="absolute inset-x-0 top-0 -z-10 h-[292px] bg-destructive" />

    <Header className="mt-5 bg-white" />

    <div className="relative">
      <Image
        alt="easy"
        src="/emergency/welcome.png"
        width={1128}
        height={385}
        className="max-md:w-full max-md:rounded-md"
      />

      <h1 className="absolute bottom-0 left-2 text-[58px] font-normal uppercase max-md:-bottom-2 max-md:left-0 max-md:text-[19px]">
        [ экстренная помощь ]
      </h1>
    </div>

    <div className="py-lg">
      <Title
        highlight
        as="h6"
        align="center"
        className="after:!bg-[#F29395] max-md:after:right-0 max-md:after:w-[90%]"
      >
        экстренная помощь
      </Title>
      <h5 className="mt-lg text-center">
        Важная информацию, которую необходимо знать всем!
      </h5>
    </div>

    <SectionEmergency />
  </>
)

export default EmergencyPage
