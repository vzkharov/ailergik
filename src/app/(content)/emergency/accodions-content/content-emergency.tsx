import { Image } from '~/components/ui/image'

const EmergencyContent = () => (
  <article className="flex flex-col-reverse gap-10 md:flex-row md:px-8 md:pb-10">
    <div className="flex-1 space-y-5 md:space-y-10">
      <div className="space-y-4">
        <h5 className="text-xl uppercase">Звонок в скорую помощь</h5>
        <p className="font-helveticaLight text-base leading-5">
          Это всегда огромный стресс. Не важно кто и для кого вызывает службу.
          Случилось что-то особенно важное для сохранения жизни. А значит нужна
          четкость, способность совладать с собой и донести верно информацию до
          оператора.
        </p>
        <h5 className="text-xl uppercase">
          Служба экстренной медицинской помощи
          <strong className="font-helveticaBold"> - по номеру 103</strong> в
          Беларуси!
        </h5>
        <p className="font-helveticaLight text-base leading-5">
          При развитии экстренных состояний,
          <strong className="font-helveticaBold">
            {' '}
            анафилаксия и отек Квинке – как раз относятся к ним, важна каждая
            секунда.
          </strong>{' '}
          Именно поэтому общение с оператором скорой помощи – большой шаг на
          пути к спасению. Ниже последовательность действий, которая поможет
          рационально общаться со службой 103.
        </p>

        <div className="space-y-4">
          <ol className="list-outside list-decimal space-y-2 pl-6 font-helveticaLight text-base leading-5">
            <li>
              Выдохните, постарайтесь отключить эмоции, на некоторое время.
            </li>
            <li>
              <strong className="font-helveticaBold">
                Назовите ФИО, адрес места нахождения и номер телефона
              </strong>
              , а также возраст (примерный возраст) того, кто экстренно
              нуждается в помощи.
            </li>
            <li>
              <strong className="font-helveticaBold">
                Далее сообщите ваши данные ФИО, а также номер телефона
              </strong>
              , если он не совпадает с тем, с которого вы звоните.
            </li>
            <li>
              <strong className="font-helveticaBold">
                Отчетливо сообщите повод для вызова.
              </strong>{' '}
              Если вы уже сталкивались с ситуацией или достоверно знаете причину
              состояния, например, отек Квинке — сообщите о ваших подозрениях.
            </li>
            <li>
              Будьте внимательны. Специалисты 103 зададут уточняющие вопросы.
            </li>
            <li>
              <strong className="font-helveticaBold">
                Ваша задача - не оставлять больного без внимания
              </strong>
              , а в ожидании скорой помощи помочь ему.
            </li>
            <li>
              <strong className="font-helveticaBold">
                Уточните у медиков все, что можете сделать лично.
              </strong>{' '}
              Например, проконсультируйтесь относительно безрецептурных
              антигистаминных, которые планируете принять или дать больному.
            </li>
            <li>
              <strong className="font-helveticaBold">
                {' '}
                Обеспечьте быстрый доступ бригады скорой помощи к больному
              </strong>
              (сообщите код домофона, заранее откройте дверь).
            </li>
          </ol>
        </div>
        <h5 className="text-xl uppercase">
          И самое главное – не оставляйте пациента одного!
        </h5>
      </div>
    </div>

    <div className="flex justify-center md:order-last">
      <Image
        src="/emergency/emergencies/_1.png"
        alt="Emergency"
        width={250}
        height={500}
        className="h-[200px] w-[100px] overflow-hidden object-cover md:h-[600px] md:w-[500px]"
      />
    </div>
  </article>
)

export { EmergencyContent }
