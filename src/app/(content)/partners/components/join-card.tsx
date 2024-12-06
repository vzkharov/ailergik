import { JoinForm } from '~/components/(dialog-forms)/join-form'
import { Button } from '~/components/ui/button'
import { Dialog, DialogTrigger } from '~/components/ui/dialog'

const JoinCard = () => (
  <div className="rounded-[35px] bg-[#9ED8F6]">
    <div className="flex w-full flex-col items-center justify-center px-4 py-24 md:py-32">
      <h3 className="mb-10 max-w-[300px] text-center md:max-w-[700px]">
        ОБЪЕДИНЯЕМСЯ, ЧТОБЫ СДЕЛАТЬ СЕРВИС ЛУЧШЕ!
      </h3>
      <h5 className="mb-14 max-w-[700px] text-center text-lg leading-5 max-md:text-md">
        Мы стремимся создать более безопасный мир для людей с потенциально
        опасными для жизни аллергиями с помощью информации на веб-сервисе.
      </h5>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="colored"
            className="h-14 w-full max-w-[900px] rounded-full uppercase"
          >
            Стать партнером сервиса
          </Button>
        </DialogTrigger>
        <JoinForm />
      </Dialog>
    </div>
  </div>
)

export { JoinCard }
