/* eslint-disable  @typescript-eslint/no-explicit-any*/
import type { ComponentPropsWithoutRef, ElementType, FC } from 'react'

type As = ElementType<any>
type ReactPropsOf<T extends As> = ComponentPropsWithoutRef<T>

type IconProps = ReactPropsOf<'svg'> & {
	size?: number | string
}

type IconElement = FC<IconProps>

export type { IconElement, IconProps }
