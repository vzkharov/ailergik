import Image from 'next/image'
import { Title } from '~/components/title'
import { Button } from '~/components/ui/button'
import { PostAccordionItem } from './post-accordion'
import { Separator } from '~/components/ui/separator'
import { Accordion } from '~/components/ui/accordion'
import { ListBlock } from '~/components/(blocks)/list-block'
import { CheckBlock } from '~/components/(blocks)/check-block'
import { PostActions } from '../[post]/_components/post-action'
import { DoctorCard } from '../../partners/components/doctor-card'
import { DetailButton } from '~/components/(buttons)/detail-button'

// Это все просто контент одной страницы, и этот компонент нужно удалить
const PostPage = () => (
  <section className="flex max-w-2xl flex-col gap-y-5">
    <Title as="h3" className="text-xl">
      Как записаться на прием онлайн?
    </Title>

    <p className="inline text-md leading-normal">
      Простые шаги для удобной записи к врачу без очередей: узнайте, как легко и
      быстро записаться на прием онлайн, используя нашу платформу!
    </p>

    <ListBlock>
      {[
        {
          step: 'ШАГ 1',
          text: 'Зарегистрируйтесь в личном кабинете на нашем сайте;',
        },
        {
          step: 'ШАГ 2',
          text: 'Выберите доктора на странице',
          button: 'ВЫБРАТЬ ДОКТОРА',
        },
        {
          step: 'ШАГ 3',
          text: (
            <>
              Нажмите кнопку{' '}
              <span className="font-bold">
                &quot;Запись на прием онлайн&quot;
              </span>
            </>
          ),
        },
        {
          step: 'ШАГ 4',
          text: 'Выберите в календаре удобную дату и время;',
        },
        {
          step: 'ШАГ 5',
          text: (
            <>
              Нажмите кнопку{' '}
              <span className="font-bold">&quot;Забронировать&quot;</span>
            </>
          ),
        },
        {
          step: 'ШАГ 6',
          text: 'При успешном бронировании вы получите сообщение - подтверждение.',
        },
      ].map((item, index) => (
        <div key={index} className="flex flex-col gap-y-3">
          <p className="inline text-xl leading-normal">{item.step}</p>
          <p className="inline text-sm leading-normal">{item.text}</p>
          {item.button && (
            <DetailButton variant="outline">{item.button}</DetailButton>
          )}
        </div>
      ))}
    </ListBlock>

    <Separator className="my-[40px]" />

    <Title as="h3" className="text-xl">
      Услуги
    </Title>

    <Accordion className="space-y-5" type="multiple">
      {[
        {
          title: 'Индивидуальные консультации',
          content:
            'Получение  персонализированные рекомендации от аллергологов через видеозвонки или чат. Врачи помогут определить возможные аллергены, оценить симптомы и предложить подходящие методы диагностики и лечения.',
        },
        {
          title: 'Анализ тестов и результатов',
          content: '',
        },
        {
          title: 'Подбор терапии',
          content: '',
        },
        {
          title: 'Образовательные материалы',
          content: '',
        },
        {
          title: 'Поддержка в режиме онлайн',
          content: '',
        },
      ].map((item, index) => (
        <PostAccordionItem
          key={index}
          id={String(index)}
          title={item.title}
          content={item.content}
          color="#D1F9EB"
        />
      ))}
    </Accordion>

    <Separator className="my-[40px]" />

    <Title as="h3" className="text-xl">
      Услуги
    </Title>

    <p className="inline text-md leading-normal">
      Простые шаги для удобной записи к врачу без очередей: узнайте, как легко и
      быстро записаться на прием онлайн, используя нашу платформу!
    </p>

    <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-20">
      {doctors.map(item => (
        <DoctorCard key={item.id} {...item} />
      ))}
    </div>

    <Separator className="my-[40px]" />

    <Title as="h3" className="text-xl">
      Петрова Ирина николаевна
    </Title>

    <p className="inline text-md leading-normal">
      Врач-аллерголог-иммунолог высшей категории, кандидат медицинских наук.
      Заведующий аллергологическим отделением 4-ой детской клинической больницы
      г. Минска.
    </p>

    <Image
      alt=""
      src="/medicine/doctor_5.png"
      width={552}
      height={320}
      className="my-md h-auto w-full rounded-md"
    />

    <div className="flex gap-x-3">
      <Button variant="colored" className="uppercase">
        Образование
      </Button>
      <Button variant="outline">Дипломы</Button>
      <Button variant="outline">Опыт</Button>
      <Button variant="outline">Публикации</Button>
    </div>

    <CheckBlock>
      Закончила Московский Государственный Медицинский Университет (лечебный
      факультет)
    </CheckBlock>

    <CheckBlock>
      Дополнительно проходила повышение квалификации в Московском Институте
    </CheckBlock>

    <Separator className="my-[40px]" />

    <Title as="h3" className="text-xl">
      Специализация врача
    </Title>

    <p className="inline text-md leading-normal">
      высококвалифицированный врач-аллерголог-иммунолог с более чем 10-летним
      опытом работы в области диагностики и лечения аллергических заболеваний.
      Она специализируется на лечении широкого спектра состояний, включая
      аллергический ринит, бронхиальную астму, атопический дерматит, пищевую
      аллергию и поллиноз. Наталья Сергеевна проводит тщательное обследование
      пациентов, включая современные тесты на аллергию и анализы крови, чтобы
      точно определить аллергены и оценить состояние иммунной системы. На основе
      результатов она разрабатывает индивидуальный план лечения, включающий
      медикаментозную терапию, аллергенспецифическую иммунотерапию и
      рекомендации по изменению образа жизни.
    </p>
    <PostActions />
    <Separator className="my-[40px]" />
  </section>
)

export { PostPage }

type Doctor = {
  id: string
  img: string
  title: string
}

const doctors = [
  {
    id: '1',
    img: '/medicine/doctors_1.png',
    title: 'Петрова И.Н.',
  },
  {
    id: '2',
    img: '/medicine/doctors_2.png',
    title: 'Кузнецова Д.Д.',
  },
  {
    id: '3',
    img: '/medicine/doctors_3.png',
    title: 'Иванова И.И.',
  },
  {
    id: '4',
    img: '/medicine/doctors_4.png',
    title: 'Смирнова А.А.',
  },
] satisfies Doctor[]
