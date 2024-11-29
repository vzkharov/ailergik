import { Link } from '~/components/ui/link'
import { Image } from '~/components/ui/image'

const ContactsCard = () => (
  <div>
    <div className="rounded-[35px] bg-[#9ED8F633]/30">
      <div className="flex w-full flex-col items-center justify-center px-3 py-24 md:py-32">
        <h3 className="mb-10 max-w-[700px] text-center uppercase">
          наши контакты
        </h3>

        <h5 className="mb-14 w-full text-center text-lg leading-5 max-md:text-md">
          Если у вас есть вопросы или предложения, присылайте по адресу
          hello@ailergik.by <br /> Свяжитесь с нами через соц сети или по
          телефону:
        </h5>

        <div className="flex w-full flex-row justify-center gap-6">
          <Link href={''} className="w-fit">
            <Image
              alt="Telegram"
              src="/partners/contacts/telegram.png"
              width={40}
              height={40}
              className="w-full"
            />
          </Link>
          <Link href={''}>
            <Image
              alt="Viber"
              src="/partners/contacts/viber.png"
              width={40}
              height={40}
              className="w-full"
            />
          </Link>
          <Link href={''}>
            <Image
              alt="Whatsapp"
              src="/partners/contacts/whatsapp.png"
              width={40}
              height={40}
              className="w-full"
            />
          </Link>
          <Link href={''}>
            <Image
              alt="Call"
              src="/partners/contacts/call.png"
              width={40}
              height={40}
              className="w-full"
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export { ContactsCard }
