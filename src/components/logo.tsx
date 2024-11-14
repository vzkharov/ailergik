import Link from 'next/link'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

const Logo = ({ className, ...props }: StyleProps) => (
  <Link
    {...props}
    href="/partners"
    className={cn(
      'relative block h-fit w-max flex-none select-none',
      className,
    )}
  >
    <h2 className="translate-y-0.5 font-helveticaBold text-xl">AiLERGIK</h2>
  </Link>
)

export { Logo }
