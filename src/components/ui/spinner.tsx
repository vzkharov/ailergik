import { cn } from '~/lib/utils'

const Spinner = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    aria-label="Loading"
    className="relative inline-flex flex-col items-center justify-center gap-2"
  >
    <div
      {...props}
      className={cn('relative flex h-[1.25em] w-[1.25em]', className)}
    >
      <i className="animate-spinner-ease-spin absolute h-full w-full rounded-full border-2 border-solid border-b-[currentColor] border-l-transparent border-r-transparent border-t-transparent"></i>
      <i className="animate-spinner-linear-spin absolute h-full w-full rounded-full border-2 border-dotted border-b-[currentColor] border-l-transparent border-r-transparent border-t-transparent opacity-75"></i>
    </div>
  </div>
)

export { Spinner }
