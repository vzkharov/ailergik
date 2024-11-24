import type { Page } from '~/lib/types'

import { Image } from '~/components/ui/image'

import { Title } from '~/components/title'

import { SectionEmergency } from './_sections/section-emergency'
import { NavigationBreadcrumbs } from '../../../components/navigation-breadcrumbs'

const EmergencyPage: Page = () => (
  <div className="mt-[100px] flex flex-col gap-y-[50px]">
    <div className="absolute inset-x-0 top-0 -z-10 h-[292px] bg-destructive" />

    <div className="relative">
      <NavigationBreadcrumbs
        items={[{ href: '/emergency', name: 'Экстренная помощь' }]}
        className="py-md"
      />

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
  </div>
)

export default EmergencyPage
