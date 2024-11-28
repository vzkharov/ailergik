import Image from 'next/image'
import { tv } from 'tailwind-variants'

import { Separator } from '~/components/ui/separator'
import { OrganizationCopyright } from '~/components/organization-copyright'

import { FooterColumn } from './footer-column'

const Footer = () => (
  <footer className={styles.root()}>
    <div className={styles.columns()}>
      <FooterColumn
        title="ИНФОРМАЦИЯ:"
        links={[
          { href: '#', name: 'О портале' },
          { href: '#', name: 'Контакты редакции' },
          { href: '#', name: 'Вакансии' },
          { href: '#', name: 'Правовая информация' },
          { href: '#', name: 'Рекламодателям' },
        ]}
      />

      <FooterColumn
        title="МЫ В СОЦ СЕТЯХ:"
        links={[
          { href: '#', name: 'Telegram' },
          { href: '#', name: 'Instagram' },
          { href: '#', name: 'Реклама' },
          { href: '#', name: 'Тарифы' },
        ]}
      />

      <FooterColumn
        title="ПРАВИЛА И УСЛОВИЯ ИСПОЛЬЗОВАНИЯ:"
        links={[
          { href: '#', name: 'Пользовательское соглашение' },
          { href: '#', name: 'Публичные договоры' },
          { href: '#', name: 'Политика обработки персональных данных' },
        ]}
      />

      <p className={styles.note()}>
        Перепечатка материалов AiLergik возможна только с письменного разрешения
        владельца сайта.
      </p>
    </div>

    <div>
      <Separator orientation="horizontal" />
    </div>

    <div>
      <OrganizationCopyright />
    </div>

    <div>
      <Image
        src="/footer.svg"
        alt="footer logo"
        width={1236}
        height={347}
        className={styles.logo()}
      />
    </div>
  </footer>
)

const styles = tv({
  slots: {
    root: 'flex flex-col gap-y-lg bg-[#EDEDEF] pt-8 text-sm [&>*]:container',
    columns: 'flex justify-between',
    note: 'max-w-40 text-right text-xs italic text-muted-foreground',
    logo: 'h-auto w-full',
  },
})()

export { Footer }
