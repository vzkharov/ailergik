type nullable<T> = T | null | undefined
type AnyObject = {
  [x: string | number | symbol]: unknown
}
type ArrowFunction<P extends Array<unknown> = [], R = unknown> = (
  ...arguments_: P
) => R

type As = keyof JSX.IntrinsicElements
type ReactPropsOf<T extends As> = React.ComponentPropsWithoutRef<T>
type ReactChildren =
  | React.ReactNode
  | React.ReactNode[]
  | undefined
  | null
  | string

type MergeWithHTMLProps<T extends As, P = {}> = Omit<ReactPropsOf<T>, keyof P> &
  P & {
    as?: As
  }

type StyleProps = Partial<{
  className: string
  style: React.CSSProperties
}>

type Provider = (props: { children: ReactChildren }) => React.ReactNode
type Layout = (props: Readonly<{ children: ReactChildren }>) => React.ReactNode

type PageProps<P = {}, S = {}> = Readonly<{
  params: Promise<P>
  searchParams: Promise<S>
}>
type Page<P = {}, S = {}> = (
  props: PageProps<P, S>,
) =>
  | Promise<React.ReactElement<PageProps<P, S>>>
  | React.ReactElement<PageProps<P, S>>

type HTMLImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>

export type {
  As,
  Page,
  Layout,
  Provider,
  nullable,
  AnyObject,
  StyleProps,
  ReactPropsOf,
  ReactChildren,
  ArrowFunction,
  HTMLImageProps,
  MergeWithHTMLProps,
}
