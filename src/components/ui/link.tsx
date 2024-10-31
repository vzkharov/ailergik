import { cva, type VariantProps } from 'class-variance-authority'
import InternalLink, { LinkProps as InternalLinkProps } from 'next/link'

type LinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof InternalLinkProps
> &
  InternalLinkProps &
  LinkVariants & {}

const Link = ({
  href,
  className,
  full = false,
  truncate = false,
  variant = 'default',
  ...props
}: LinkProps) => {
  const lastSegment = href.toString().split('/').at(-1) as string
  const isFile = lastSegment.includes('.pdf')

  return (
    <InternalLink
      href={href}
      {...props}
      download={isFile ? lastSegment : null}
      className={linkVariants({ full, truncate, variant, className })}
    />
  )
}

const linkVariants = cva('inline-block whitespace-nowrap', {
  variants: {
    variant: {
      default: 'font-gilroy-bold',
      underline: 'font-gilroy underline',
      gradient: 'hover:text-gradient focus:text-gradient',
    },
    full: { true: 'w-full', false: '' },
    truncate: {
      true: 'w-full overflow-hidden text-ellipsis whitespace-nowrap',
    },
  },
  defaultVariants: {
    full: false,
    truncate: false,
    variant: 'default',
  },
})

type LinkVariants = VariantProps<typeof linkVariants>

export { Link }
