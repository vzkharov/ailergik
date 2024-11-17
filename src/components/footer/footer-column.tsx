import Link from 'next/link'

type FooterLink = {
  href: string
  name: string
}

type FooterColumnProps = {
  title: string
  links: FooterLink[]
}

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div>
    <h3 className="mb-sm text-sm font-medium">{title.toLocaleUpperCase()}</h3>
    <ul className="">
      {links.map((link, idx) => (
        <li key={idx}>
          <Link
            href={link.href}
            className="py-sm inline-block w-full hover:underline"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export { FooterColumn }
