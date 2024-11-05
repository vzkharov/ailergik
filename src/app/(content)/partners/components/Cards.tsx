import { cn } from '~/lib/utils'
import { Image } from '~/components/ui/image'
import type { StyleProps, ReactChildren } from '~/lib/types'

type CardProps = StyleProps &
{
		title: string
        description?: string
		children?: ReactChildren
		endContent?: ReactChildren
		startContent?: ReactChildren
}

const CardBlur = ({	
	title,
	children,
	endContent,
    className,
}: CardProps) => {
    return (
		<article	
            className={cn('rounded-2xl flex items-center p-6 gap-2', className)}
		>	
			<div className='flex-1 space-y-3 self-start'>
				{title ? (
					<h5 className='max-w-[400px] flex items-center justify-between gap-x-2 text-3xl font-helveticaMedium'>
						{title}
						
					</h5>
				) : null}
				{children ? <div className='font-helveticaLight max-w-[500px]'>{children}</div> : null}

                {endContent}
			</div>	
		</article>
	)
}


const CardOutlined = ({
	title,
	children,
	endContent,
    className,
}: CardProps) => {
    return (
		<article	
            className={cn('relative rounded-2xl flex items-center p-6 gap-2', className)}
		>
			
			<div className='flex-1 space-y-1  self-start'>
				{title ? (
					<h6 className='w-full flex items-center justify-between  text-base font-helveticaItalicLight'>
						{title}
						
					</h6>
				) : null}
				{children ? <div className='font-helveticaMedium text-2xl '>{children}</div> : null}
                
			</div>
			{endContent}
		</article>
	)
}


type CardProblemsProps = CardProps & {
    src: string;
  }
  
const CardProblems = ( { title, description, src }: CardProblemsProps) => {
return (
    <div className="w-full overflow-hidden">
        <Image src={src} alt={title} className="w-full object-cover rounded-lg" />
        <div className="p-4">
            <h3 className="font-helveticaMedium text-3xl mb-2">{title}</h3>
            <p className="text-xl font-helveticaLight">{description}</p>
        </div>
    </div>
)
}
  

const CardFunctions = ({
title,
children,
endContent,
className,
}: CardProps) => {
return (
    <article	
        className={cn('relative rounded-2xl flex items-center gap-10 p-6', className)}
    >
        <div className='flex-1 space-y-20 '>
            {title ? (
                <h6 className='max-w-[550px] flex items-center justify-between text-4xl font-helveticaMedium'>
                    {title}
                    
                </h6>
            ) : null}
            {children ? <div className='font-helveticaMedium text-2xl '>{children}</div> : null}
            
        </div>
        {endContent}
    </article>
)
}


export { CardBlur, CardOutlined, CardProblems, CardFunctions }