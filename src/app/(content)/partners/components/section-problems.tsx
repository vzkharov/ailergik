import { CardProblems } from './cards'

const SectionProblems = () => (
  <div className="grid grid-cols-2 grid-rows-3 gap-20">
    <div className="row-span-1">
      <CardProblems
        src="/partners/partners_3.png"
        title="Экономит время пользователей"
        description="Все необходимые сервисы в одном веб-приложении"
      />
    </div>

    <div className="col-start-2 row-span-3 row-start-1 place-self-center">
      <CardProblems
        src="/partners/partners_4.png"
        title="Полная и достоверная информация"
        description="Сотни статей с информацией на основе официальных источников доказательной медицины"
      />
    </div>
    <div className="col-span-1 row-span-2 row-start-2 place-content-end">
      <CardProblems
        src="/partners/partners_5.png"
        title="Ваш личный аллерголог всегда на связи"
        description="Онлайн-консультация с практикующими опытными врачамии"
      />
    </div>
  </div>
)

export { SectionProblems }
