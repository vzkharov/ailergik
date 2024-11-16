import type { Page } from '~/lib/types'

import { Spacer } from '~/components/ui/spacer'
import { Image } from '~/components/ui/image'
import { Section } from '../partners/_sections/section'
import { HighlightedTitle } from '../partners/components/hilighted-title'
import { OrganizationCopyright } from '~/components/organization-copyright'
import { SectionEmergency } from './_sections/section-emergency'

const EmergencyPage: Page = () => (
  <main className="flex flex-col gap-y-16 pb-5 pt-8">
    <Section>
      <div className="relative">
        <Spacer y="lg" />

        <Image
          alt="easy"
          src="/emergency/emergency.png"
          width={1128}
          height={385}
          className="max-md:w-full max-md:rounded-3xl"
        />

        <h1 className="absolute -bottom-5 left-2 font-helveticaLight text-[58px] uppercase max-md:-bottom-2 max-md:left-0 max-md:text-[19px]">
          [ экстренная помощь ]
        </h1>
      </div>

      <Spacer y="3xl" />

      <HighlightedTitle className="after:bg-[#F29395] max-md:after:right-0 max-md:after:w-[90%]">
        экстренная помощь
      </HighlightedTitle>

      <Spacer y="xl" />

      <h5 className="text-center">
        Важная информацию, которую необходимо знать всем!
      </h5>
      <Spacer y="xl" />

      <SectionEmergency />
    </Section>

    <footer>
      <OrganizationCopyright />
    </footer>
  </main>
)

export default EmergencyPage
