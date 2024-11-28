import { tv } from 'tailwind-variants'

const styles = tv({
  slots: {
    root: 'grid md:min-h-[600px] grid-cols-3 gap-x-md gap-y-sm data-[state=active]:pt-sm',
    card: 'h-72',
  },
})()

export { styles }
