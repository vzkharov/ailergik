import type { Page } from '~/lib/types'

import { Text } from '~/components/ui/text'
import { Image } from '~/components/ui/image'
import { Spacer } from '~/components/ui/spacer'
import { Separator } from '~/components/ui/separator'
import { DetailButton } from '~/components/(buttons)/detail-button'

import { topics } from './_data/topic'
import { doctors } from './_data/doctors'
import { benefits } from './_data/benefits'
import { services } from './_data/services'
import { navigation } from './_data/links'

import { JoinCard } from './components/join-card'
import { TopicCard } from './components/topic-card'
import { DoctorCard } from './components/doctor-card'
import { ServiceCard } from './components/service-card'
import { BenefitCard } from './components/benefit-card'
import { HighlightedTitle } from './components/hilighted-title'
import { Card, CardDescription, CardTitle } from './components/cards'

import { Header } from './_sections/header'
import { Section } from './_sections/section'
import { SectionProblems } from './_sections/section-problems'

const title = 'Приглашаем компании и врачей к  сотрудничеству!'
const subtitle =
  'Инновационные подходы и стратегии для повышения качества обслуживания клиентов'

const PartnersPage: Page = () => (
  <main className="flex flex-col gap-y-24 pb-24 pt-8">
    <div className="absolute inset-x-0 top-0 -z-10 h-[454px] bg-[#9ED8F6]" />

    <div className="relative">
      <Header />

      <Spacer y="lg" />

      <Image alt="easy" src="/partners/welcome.png" width={1128} height={572} />
      <Card>
        <CardTitle>Умный веб-сервис для аллергиков</CardTitle>
        <CardDescription>
          Легкий способ управлять аллергией с помощью данных и технологий
        </CardDescription>
        <DetailButton>ПРИСОЕДИНИТЬСЯ</DetailButton>
      </Card>
    </div>

    <div className="flex flex-col items-center justify-center gap-y-10 text-center">
      <h1 className="uppercase">{title}</h1>
      <h5>{subtitle}</h5>
    </div>

    <Separator />

    <Section id={navigation.benefits.id}>
      <HighlightedTitle>Что вы получите?</HighlightedTitle>

      <Spacer y="xl" />

      <div className="flex flex-col gap-y-5">
        {benefits.map(benefit => (
          <BenefitCard
            key={benefit.id}
            {...benefit}
            className="odd:flex-row-reverse max-md:flex-col [&>*]:h-[300px] [&>*]:first:h-[385px]"
          />
        ))}
      </div>
    </Section>

    <Separator />

    <Section id={navigation.sections.id}>
      <HighlightedTitle>Основные разделы веб-сервиса</HighlightedTitle>

      <Spacer y="xl" />

      <p className="text-center font-helveticaLight">
        Мы предоставляем важную информацию, которую необходимо знать всем, кто
        страдает от аллергии, инновационные программы, которые позволят вам и
        другим людям быть в курсе последних событий, а также услуги поддержки,
        которые сделают жизнь людей с аллергией более комфортной.
      </p>

      <Spacer y="xl" />

      <div className="flex flex-col gap-y-4">
        {topics.map(topic => (
          <TopicCard key={topic.id} {...topic} />
        ))}
      </div>
    </Section>

    <Separator />

    <Section>
      <HighlightedTitle>
        Какие проблемы пользователей решает ailergik
      </HighlightedTitle>

      <Spacer y="3xl" />

      <SectionProblems />
    </Section>

    <Separator />

    <Section id={navigation.funcs.id}>
      <HighlightedTitle>
        КАКИЕ ФУНКЦИИ ДЛЯ ПОЛЬЗОВАТЕЛЕЙ МЫ ВНЕДРИЛИ В ВЕБ-ПРИЛОЖЕНИЕ?
      </HighlightedTitle>

      <Spacer y="3xl" />

      <div className="flex flex-col">
        {services.map(card => (
          <ServiceCard
            key={card.id}
            {...card}
            className="rounded-none border-b py-10 first:pt-0 last:border-0 last:pb-0"
          />
        ))}
      </div>
    </Section>

    <Separator />

    <Section>
      <HighlightedTitle>С нами сотрудничают врачи</HighlightedTitle>

      <Spacer y="4xl" />

      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-20">
        {doctors.map(item => (
          <DoctorCard key={item.id} {...item} />
        ))}
      </div>

      <Spacer y="3xl" />

      <Text className="text-center font-helveticaLight text-xl">
        Мы - за комплексный подход, это принципиально. Кроме аллерголога
        иммунолога мы пригласили врачей экспертов из сопутствующих специализаций
        - дерматолога, невролога, гастроэнтеролога, педиатра и других...
      </Text>
    </Section>

    <Section id={navigation.join.id}>
      <JoinCard />
    </Section>
  </main>
)

export default PartnersPage
