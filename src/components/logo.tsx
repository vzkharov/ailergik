import Link from 'next/link'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

type LogoProps = StyleProps & {
  href?: string
}

const Logo = ({ className, href = '/', ...props }: LogoProps) => (
  <Link
    {...props}
    href={href}
    className={cn(
      'group/logo relative block h-fit w-max flex-none select-none',
      'font-gilroy text-lg font-bold',
      className,
    )}
  >
    <span className="transition-colors group-hover/logo:text-[#6ED6B2]">
      Ai
    </span>
    LERGIK
  </Link>
)

export { Logo }
