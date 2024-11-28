import { tv } from 'tailwind-variants'

const styles = tv({
  slots: {
    root: 'grid md:h-[900px] grid-cols-3 grid-rows-3 gap-x-md gap-y-sm data-[state=active]:pt-sm',
  },
})()

export { styles }
