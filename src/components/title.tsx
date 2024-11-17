import { cva, type VariantProps } from 'class-variance-authority'

type TitleProps = React.HTMLAttributes<HTMLHeadingElement> & TitleVariants

const Title = ({
  children,
  style,
  className,
  as = 'h3',
  align = 'left',
  highlight = false,
  ...props
}: TitleProps) => {
  const Slot = as || 'h3'

  return (
    <Slot
      {...props}
      style={style}
      className={titleVariants({ as, align, highlight, className })}
    >
      {children}
    </Slot>
  )
}

const titleVariants = cva(
  [
    'relative block max-w-[740px] font-medium uppercase',
    'after:absolute after:-right-2 after:bottom-0 after:-z-10 after:h-4 after:w-[96%] after:rounded-md after:bg-topic',
  ],
  {
    variants: {
      as: {
        h1: 'text-[40px]',
        h2: 'text-[]',
        h3: 'text-lg font-normal',
        h4: 'text-[]',
        h5: 'text-[]',
        h6: 'text-[]',
      },
      align: {
        left: 'text-left',
        center: 'w-fit mx-auto text-center',
        right: 'text-right',
      },
      highlight: {
        true: 'w-fit',
        false: 'after:hidden',
      },
    },
  },
)

type TitleVariants = VariantProps<typeof titleVariants>

export { Title }
export type { TitleProps, TitleVariants }
