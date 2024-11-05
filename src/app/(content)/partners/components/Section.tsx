// eslint-disable-next-line import/named
import { tv, VariantProps } from 'tailwind-variants'

import type { As, MergeWithHTMLProps } from '~/lib/types'

type Props = SectionVariants & {
	as?: As
	bg?: string
	title?: string
}

type SectionProps<T extends As = 'section'> = MergeWithHTMLProps<T, Props>

const Section = <T extends As = 'section'>({
	as,
	bg,
	color,
	className,
	children,
}: SectionProps<T>) => {
	const Slot = as || 'section'

	const styles = sectionVariants({ color })

	return (
		<Slot className={styles.base({ className: bg })}>
			<div	
                
				className={styles.content({ className })}
			>
				{children}
			</div>
		</Slot>
	)
}

const sectionVariants = tv({
	slots: {
		base: '',
		content: 'container',
	},
	variants: {
		color: {
			white: { base: 'bg-white', content: 'text-dark' },
			dark: { base: 'bg-dark', content: 'text-white' },

			metal: { base: 'bg-gradient-to-r from-gray-200 to-dark', content: 'text-white' },
			brand: {
				base: 'bg-gradient-to-r from-gradient-start to-gradient-end',
				content: 'min-h-[96px] text-dark',
			},
		},
	},
})

type SectionVariants = VariantProps<typeof sectionVariants>

export { Section }
export type { SectionProps }
