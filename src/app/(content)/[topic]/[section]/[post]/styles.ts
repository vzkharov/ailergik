import { tv } from 'tailwind-variants'

const styles = tv({
  slots: {
    cover: '',
    main: 'flex gap-md',
    toc: 'sticky top-32 h-fit w-[263px] min-w-[263px] max-w-[263px]',
    content: 'flex flex-1 flex-col gap-y-xl',
    markdown: 'max-w-2xl',
  },
})()

export { styles }
