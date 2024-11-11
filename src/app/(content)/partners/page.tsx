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
import { DoctorCard } from './components/doctor-card'
import { ServiceCard } from './components/service-card'
import { BenefitCard } from './components/benefit-card'
import { HighlightedTitle } from './components/hilighted-title'
import { Card, CardDescription, CardTitle } from './components/cards'

import { Header } from './_sections/header'
import { Section } from './_sections/section'
import { SectionProblems } from './_sections/section-problems'
import {
  PartnersAccordion,
  PartnersAccordionItem,
} from './components/partners-accordion'
import {
  ServiceAccordion,
  ServiceAccordionItem,
} from './components/service-accordion'
import { ContactsCard } from './components/contacts-card'

const title = 'Приглашаем компании и врачей к  сотрудничеству!'
const subtitle =
  'Инновационные подходы и стратегии для повышения качества обслуживания клиентов'

const PartnersPage: Page = () => (
  <main className="flex flex-col gap-y-24 pb-5 pt-8">
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

      <div className="flex flex-col space-y-10">
        <PartnersAccordion defaultValue={[topics[0]?.id || '']}>
          {topics.map(topic => (
            <PartnersAccordionItem
              title={topic.title}
              description={topic.description}
              value={topic.id}
              key={topic.id}
              color={topic.color}
            >
              <div className="flex flex-row gap-10 p-8">
                <div className="flex flex-1">
                  <div className="flex flex-col gap-10">
                    {topic.content.map((block, index) => (
                      <div key={index} className="flex flex-col gap-2">
                        <h5 className="font-helveticaLight text-xl uppercase">
                          {block.title}
                        </h5>
                        <p className="font-helveticaLight text-base leading-5">
                          {block.text}
                        </p>
                      </div>
                    ))}

                    <button className="inline-flex h-10 w-fit items-center justify-center rounded-full bg-[#142850] px-7 py-5 font-helveticaLight text-sm text-white">
                      <span className="translate-y-px uppercase leading-none">
                        Отправить сообщение
                      </span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-row gap-5">
                  {topic.image.map((img, index) => (
                    <div key={index}>
                      <Image
                        src={img}
                        alt="Medicine Image 1"
                        width={250}
                        height={500}
                        style={{ width: 250, height: 520 }}
                        className="overflow-hidden rounded-2xl object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </PartnersAccordionItem>
          ))}
        </PartnersAccordion>
      </div>
    </Section>

    <Separator />

    <Section>
      <HighlightedTitle>
        Какие проблемы <br />
        пользователей решает ailergik
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
        <ServiceAccordion defaultValue={[topics[0]?.id || '']}>
          {services.map(card => (
            <ServiceAccordionItem
              value={card.id}
              key={card.id}
              header={<ServiceCard key={card.id} {...card} />}
            >
              <Spacer y="xl" />
              <div className="grid grid-cols-2 grid-rows-2 gap-20">
                {card.content.map((item, index) => (
                  <div
                    key={index}
                    className="flex border-l-2 border-l-[#9ED8F6]"
                  >
                    <div className="ml-5 flex flex-col items-start gap-y-5">
                      <h5 className="font-helveticaMedium text-sm uppercase">
                        {item.title}
                      </h5>
                      <p className="font-helveticaLight text-base leading-5">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ServiceAccordionItem>
          ))}
        </ServiceAccordion>
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
    <Section id={navigation.contacts.id}>
      <ContactsCard />
    </Section>
    <footer>
      <h5 className="font-gilroy text-[10px] leading-5">
        Copyright 2024 © ООО “Экселлент Софт” УНП 193682290
      </h5>
    </footer>
  </main>
)

export default PartnersPage
