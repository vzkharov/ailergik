type HighlightedTitleProps = {
  children: React.ReactNode
}

const HighlightedTitle = ({ children }: HighlightedTitleProps) => (
  <h3 className="relative inline-block max-w-[740px] font-helveticaMedium text-4xl uppercase">
    <span className="absolute -right-2 bottom-0 -z-10 h-6 w-[96%] rounded-md bg-[#9ED8F6]" />
    {children}
  </h3>
)

export { HighlightedTitle }
