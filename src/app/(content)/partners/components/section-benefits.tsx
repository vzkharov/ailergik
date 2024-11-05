import { CardBlur } from './cards'
import { Image } from '~/components/ui/image'
import { Text } from '~/components/ui/text'


const  SectionBenefits = () => {
return (
    <>
    <div className="grid grid-cols-3 grid-rows-3 gap-5">
        <div className="col-span-3 relative">
            <Image alt="" src="/partners/partners_2.png" width={1128} height={572} />
            <CardBlur className='absolute bottom-5 left-5 backdrop-blur-sm bg-[#E9EEF2CC]/80' title="Интересный видео-контент для ваших социальных сетей" />
        </div>
        <div className="col-span-2">
            {/* Image + Card */}
        </div>
        <div className="flex justify-center items-center bg-[#9ED8F6] text-left rounded-3xl">
            <Text className="font-helveticaMedium max-w-[300px] text-4xl">
            Дополнительная бесплатная реклама
            </Text>
        </div>
        <div className="flex justify-center items-center bg-[#9ED8F6] text-left rounded-3xl">
            <Text className="font-helveticaMedium max-w-[300px] text-4xl">
            Обмен аудиториями, расширение клиентской базы
            </Text>
        </div>
        <div className="col-span-2 relative">
            {/* Image + Card */}
        </div>
    </div>
    </>
)
}

export {SectionBenefits}