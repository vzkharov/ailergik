import type { Page } from '~/lib/types'

import { Text } from '~/components/ui/text'
import { Image } from '~/components/ui/image'
import { Spacer } from '~/components/ui/spacer'
import { Separator } from '~/components/ui/separator'
import { ArrowIcon } from '~/components/ui/icons/arrow-icon'

import { Section } from './components/section'
import { SectionBenefits } from './components/section-benefits'
import { SectionProblems } from './components/section-problems'
import { HighlightedTitle } from './components/hilighted-title'
import { SectionBePartner } from './components/section-be-partner'
import { CardBlur, CardFunctions, CardOutlined } from './components/cards'

const title = 'Приглашаем компании и врачей к  сотрудничеству!'.toUpperCase()
const subtitle =
  'Инновационные подходы и стратегии для повышения качества обслуживания клиентов'

const PartnersPage: Page = () => (
  <>
    <Spacer y="4xl" />

    <Section>
      <div className="relative">
        <Image
          alt="easy"
          src="/partners/partners_1.png"
          width={1128}
          height={572}
        />
        <CardBlur
          className="absolute bottom-5 left-5 bg-[#E9EEF2CC]/80 backdrop-blur-sm"
          title="Умный веб-сервис для аллергиков"
          endContent={
            <button className="flex items-center rounded-3xl border border-black bg-transparent px-4 py-2 font-helveticaMedium text-sm">
              <span className="inline-flex h-full w-full items-center justify-center gap-x-2 whitespace-nowrap">
                ПРИСОЕДЕНИТЬСЯ <ArrowIcon />
              </span>
            </button>
          }
        >
          Легкий способ управлять аллергией с помощью данных и технологий
        </CardBlur>
      </div>
    </Section>

    <Spacer y="4xl" />

    <Section>
      <div className="flex flex-col items-center justify-center gap-y-10 text-center">
        <h1>{title}</h1>
        <h5>{subtitle}</h5>
      </div>
    </Section>

    <Spacer y="4xl" />

    <Section>
      <Separator />
    </Section>

    <Spacer y="4xl" />

    <Section>
      <div className="flex flex-col items-center justify-center gap-y-10 text-center">
        <HighlightedTitle>Что вы получите?</HighlightedTitle>
      </div>

      <Spacer y="xl" />

      <SectionBenefits />
    </Section>

    <Spacer y="4xl" />

    <Section>
      <Separator />
    </Section>

    <Spacer y="4xl" />

    <Section>
      <div className="flex flex-col items-center justify-center gap-y-10 text-center">
        <HighlightedTitle>Основные раздели веб-сервиса</HighlightedTitle>
        <h5>
          Мы предоставляем важную информацию, которую необходимо знать всем, кто
          страдает от аллергии, инновационные программы, которые позволят вам и
          другим людям быть в курсе последних событий, а также услуги поддержки,
          которые сделают жизнь людей с аллергией более комфортной.
        </h5>
      </div>

      <Spacer y="xl" />

      <div className="flex flex-col gap-y-4">
        {[
          {
            title:
              'Приглашаем врачей, мед.центры, лаборатории, аптеки, фарма- компании',
            content: 'МЕДИЦИНА',
          },
          {
            title:
              'Приглашаем специалистов по питанию, магазины с доставкой, фуд сервисы здорового питания',
            content: 'ЕДА',
          },
          {
            title:
              'Приглашаем магазины предметов интерьера для дома, гаджетов, эко- бытовой химии, клининоговые компании...',
            content: 'ДОМ',
          },
          {
            title: 'Приглашаем тур-агентства, страховые компании',
            content: 'ТУРИЗМ',
          },
        ].map((card, index) => (
          <CardOutlined
            key={index}
            className="border border-black"
            title={card.title}
            endContent={
              <button className="flex items-center bg-transparent px-4 py-2 font-helveticaMedium text-sm">
                <span className="inline-flex h-full w-full items-center justify-center gap-x-2 whitespace-nowrap">
                  ПОДРОБНЕЕ <ArrowIcon />
                </span>
              </button>
            }
          >
            {card.content}
          </CardOutlined>
        ))}
      </div>
    </Section>

    <Spacer y="4xl" />

    <Section>
      <Separator />
    </Section>

    <Spacer y="4xl" />

    <Section>
      <div className="flex flex-col items-center justify-center gap-y-10 text-center">
        <HighlightedTitle>Какие проблемы решает ailergik</HighlightedTitle>
      </div>

      <Spacer y="3xl" />

      <SectionProblems />
    </Section>

    <Spacer y="4xl" />

    <Section>
      <Separator />
    </Section>

    <Spacer y="4xl" />

    <Section>
      <div className="flex flex-col items-center justify-center gap-y-10 text-center">
        <HighlightedTitle>
          КАКИЕ ФУНКЦИИ ДЛЯ ПОЛЬЗОВАТЕЛЕЙ МЫ ВНЕДРИЛИ В ВЕБ-ПРИЛОЖЕНИЕ?
        </HighlightedTitle>
      </div>
      <Spacer y="3xl" />

      <div className="flex flex-col gap-5">
        {[
          {
            title:
              'Первая умная AI-платформа для аллергиков на базе инновационных технологий',
            imageSrc: '/partners/partners_6.png',
          },
          {
            title: '1000 статей и видео полезной информации об аллергии',
            imageSrc: '/partners/partners_7.png',
          },
          {
            title:
              'Все необходимые сервисы для аллергиков в одном интернет - ресурсе',
            imageSrc: '/partners/partners_8.png',
          },
          {
            title:
              'Онлайн - консультация практикующего врача аллерголога в удобное время',
            imageSrc: '/partners/partners_9.png',
          },
        ].map((card, index) => (
          <div key={index}>
            <CardFunctions
              title={card.title}
              endContent={
                <Image
                  src={card.imageSrc}
                  className="max-w-[550px]"
                  alt={card.title}
                />
              }
            >
              <button className="flex items-center rounded-3xl border border-black bg-transparent px-4 py-2 font-helveticaMedium text-sm">
                <span className="inline-flex h-full w-full items-center justify-center gap-x-2 whitespace-nowrap">
                  ПОДРОБНЕЕ
                  <ArrowIcon />
                </span>
              </button>
            </CardFunctions>
            <Separator />
          </div>
        ))}
      </div>
    </Section>

    <Spacer y="4xl" />

    <Section>
      <Separator />
    </Section>

    <Spacer y="4xl" />

    <Section>
      <div className="flex flex-col items-center justify-center gap-y-10 text-center">
        <HighlightedTitle>С нами сотрудничают врачи</HighlightedTitle>
      </div>

      <Spacer y="4xl" />

      <div className="flex flex-row justify-center gap-20">
        {[
          {
            src: '/partners/partners_10.png',
            alt: 'Аллергологи',
            text: 'Аллергологи',
          },
          {
            src: '/partners/partners_11.png',
            alt: 'Гастроэнтерологи',
            text: 'Гастроэнтерологи',
          },
          {
            src: '/partners/partners_12.png',
            alt: 'Дерматологи',
            text: 'Дерматологи',
          },
          {
            src: '/partners/partners_13.png',
            alt: 'Неврологи',
            text: 'Неврологи',
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col gap-5">
            <Image
              src={item.src}
              alt={item.alt}
              width={200}
              height={200}
              className="w-[230px] rounded-full border border-solid border-black p-2"
            />
            <Text className="text-center font-helveticaItalicLight text-base">
              {item.text}
            </Text>
          </div>
        ))}
      </div>

      <Spacer y="3xl" />

      <Text className="text-center font-helveticaLight text-xl">
        Мы - за комплексный подход, это принципиально. Кроме аллерголога
        иммунолога мы пригласили врачей экспертов из сопутствующих специализаций
        - дерматолога, невролога, гастроэнтеролога, педиатра и других...
      </Text>
    </Section>

    <Spacer y="4xl" />

    <Section>
      <SectionBePartner />
    </Section>

    <Spacer y="4xl" />
  </>
)

export default PartnersPage
