import type { Page } from '~/lib/types'

import { navigation } from './_data/links'

import { Image } from '~/components/ui/image'
import { Spacer } from '~/components/ui/spacer'
import { Separator } from '~/components/ui/separator'
import { DetailButton } from '~/components/(buttons)/detail-button'

import { Header } from './_sections/header'
import { Section } from './_sections/section'
import { SectionTopic } from './_sections/section-topic'
import { SectionDoctors } from './_sections/section-doctors'
import { SectionBenefit } from './_sections/section-benefit'
import { SectionProblems } from './_sections/section-problems'
import { SectionServices } from './_sections/section-services'

import { JoinCard } from './components/join-card'
import { ContactsCard } from './components/contacts-card'
import { HighlightedTitle } from './components/hilighted-title'
import { Card, CardDescription, CardTitle } from './components/cards'
import { OrganizationCopyright } from '~/components/organization-copyright'

const title = 'Приглашаем компании и врачей к  сотрудничеству!'
const subtitle =
  'Инновационные подходы и стратегии для повышения качества обслуживания клиентов'

const PartnersPage: Page = () => (
  <main className="flex flex-col gap-y-16 pb-5 pt-8">
    <div className="absolute inset-x-0 top-0 -z-10 h-[454px] bg-[#9ED8F6]" />

    <div className="relative">
      <Header />

      <Spacer y="lg" />

      <Image
        alt="easy"
        src="/partners/welcome.png"
        width={1128}
        height={572}
        className="max-md:h-[450px] max-md:rounded-xl"
      />

      <Card className="max-md:bottom-0 max-md:left-0">
        <CardTitle>Умный веб-сервис для аллергиков</CardTitle>
        <CardDescription>
          Легкий способ управлять аллергией с помощью данных и технологий
        </CardDescription>
        <DetailButton>ПРИСОЕДИНИТЬСЯ</DetailButton>
      </Card>
    </div>

    <div className="flex flex-col items-center justify-center gap-y-5 text-center">
      <h2 className="font-normal uppercase">{title}</h2>
      <p className="text-lg">{subtitle}</p>
    </div>

    <Separator />

    <Section id={navigation.benefits.id}>
      <HighlightedTitle>Что вы получите?</HighlightedTitle>

      <Spacer y="xl" />

      <SectionBenefit />
    </Section>

    <Separator />

    <Section id={navigation.sections.id}>
      <HighlightedTitle className="max-md:after:right-14 max-md:after:w-[55%]">
        Основные разделы веб-сервиса
      </HighlightedTitle>

      <Spacer y="xl" />

      <h5 className="text-center text-lg">
        Мы предоставляем важную информацию, которую необходимо знать всем, кто
        страдает от аллергии, инновационные программы, которые позволят вам и
        другим людям быть в курсе последних событий, а также услуги поддержки,
        которые сделают жизнь людей с аллергией более комфортной.
      </h5>

      <Spacer y="3xl" />

      <SectionTopic />
    </Section>

    <Separator />

    <Section>
      <HighlightedTitle className="max-md:after:right-10 max-md:after:w-[70%]">
        Какие проблемы <br />
        пользователей решает ailergik
      </HighlightedTitle>

      <SectionProblems />
    </Section>

    <Separator />

    <Section id={navigation.funcs.id}>
      <HighlightedTitle className="after:right-20 after:w-[74%] max-md:after:right-12 max-md:after:w-[60%]">
        КАКИЕ ФУНКЦИИ ДЛЯ ПОЛЬЗОВАТЕЛЕЙ МЫ ВНЕДРИЛИ В ВЕБ-ПРИЛОЖЕНИЕ?
      </HighlightedTitle>

      <Spacer y="3xl" />

      <SectionServices />
    </Section>

    <Separator />

    <Section>
      <HighlightedTitle>С нами сотрудничают врачи</HighlightedTitle>

      <Spacer y="3xl" />

      <SectionDoctors />
    </Section>

    <Section id={navigation.join.id}>
      <JoinCard />
    </Section>
    <Section id={navigation.contacts.id}>
      <ContactsCard />
    </Section>
    <footer>
      <OrganizationCopyright />
    </footer>
  </main>
)

export default PartnersPage
