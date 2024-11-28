import Link from 'next/link'
import { tv } from 'tailwind-variants'

type FooterLink = {
  href: string
  name: string
}

type FooterColumnProps = {
  title: string
  links: FooterLink[]
}

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className={styles.root()}>
    <h3 className={styles.title()}>{title.toLocaleUpperCase()}</h3>
    <ul className={styles.column()}>
      {links.map((link, idx) => (
        <li key={idx}>
          <Link href={link.href} className={styles.link()}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const styles = tv({
  slots: {
    root: 'flex flex-col gap-y-sm',
    title: 'text-sm font-medium',
    column: '',
    link: 'inline-block w-full py-sm hover:underline',
  },
})()

export { FooterColumn }
