import { tv } from 'tailwind-variants'

const styles = tv({
  slots: {
    layout: 'mt-[100px] flex flex-col py-md',
    overlay: 'absolute inset-x-0 top-0 -z-10 h-[292px] bg-topic',
    breadcrumbs: 'pb-md',
    cover: 'h-[385px] rounded-md',
    titleWrapper:
      'absolute bottom-0 left-0 text-4xl max-md:-bottom-2 max-md:left-0 max-md:text-[19px]',
    title:
      'relative rounded-tr-md bg-background pl-2 pr-8 pt-8 text-4xl font-normal uppercase',

    main: 'flex flex-col md:flex-row gap-md',
    toc: 'sticky top-32 h-fit w-[263px]',
    content: 'flex-1',
  },
})()

export { styles }
