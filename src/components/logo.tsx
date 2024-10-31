import Link from 'next/link'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Image } from '~/components/ui/image'

const Logo = ({ className, ...props }: StyleProps) => (
  <Link
    {...props}
    href="/"
    className={cn(
      'relative block h-fit w-max flex-none select-none',
      className,
    )}
  >
    <Image
      width={300}
      height={100}
      alt="logo"
      loading="eager"
      src="/logo.png"
      className="aspect-[3/1] h-9 w-auto object-contain lg:h-11"
    />
  </Link>
)

export { Logo }
