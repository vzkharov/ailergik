'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '~/lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={cn(
			'flex h-20 items-center gap-x-1.5 overflow-x-auto overflow-y-hidden px-1 py-2',
			className,
		)}
		{...props}
	/>
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Trigger
		ref={ref}
		className={cn(
			'inline-flex select-none items-center justify-center whitespace-nowrap rounded-full border px-4 py-1.5 text-xs focus-visible:outline-none',
			'focus-visible:ring-1 focus-visible:ring-dark focus-visible:ring-offset-2',
			'hover:bg-border',
			'disabled:pointer-events-none disabled:opacity-50',
			'border-border bg-transparent text-dark',
			'data-[state=active]:border-dark data-[state=active]:bg-dark data-[state=active]:text-white',
			className,
		)}
		{...props}
	/>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

export { Tabs, TabsList, TabsTrigger }
