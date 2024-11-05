type HighlightedTitleProps = {
    children: React.ReactNode
}
  
const HighlightedTitle = ({ children }: HighlightedTitleProps) => {
return (
    <h3 className="relative inline-block font-helveticaMedium text-4xl max-w-[740px] uppercase">
        <span className="absolute w-[96%] h-6 bottom-0 -right-2 bg-[#9ED8F6] rounded-md -z-10" />
        {children}
    </h3>
)
}

export  {HighlightedTitle}