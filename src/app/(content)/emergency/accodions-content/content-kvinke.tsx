const KvinkeContent = () => (
  <article className="flex flex-col-reverse gap-10 md:flex-row md:px-8 md:pb-10">
    <div className="flex-1 space-y-5 md:space-y-10">
      <div className="space-y-5">
        <div className="space-y-3">
          <h5 className="font-helveticaMedium text-xl uppercase">
            Внезапно и стремительно -
          </h5>
          <p className="font-helveticaLight text-base leading-5">
            это первое, что важно знать об отеке Квинке (его второе название
            ангионевротический). В этом кроется опасность и важность понимания
            экстренных действий. Мировая статистика говорит, что чаще он
            возникает у женщин. Вероятно, это связано с тем, что те чаще
            контактируют с бытовой химией, косметикой.
          </p>
        </div>
        <div className="space-y-3">
          <h5 className="font-helveticaMedium text-xl uppercase">
            Также важно понимать -
          </h5>
          <p className="font-helveticaLight text-base leading-5">
            этот вид отека может возникнуть из-за действия температурных
            факторов (холод\тепло), укусов насекомых (даже привычного комара,
            помните о важности репеллентов), контакта с любым химическим
            веществом (тушь для ресниц сюда же), а значит у всех...
          </p>
        </div>
        <div className="space-y-3">
          <h5 className="font-helveticaMedium text-xl uppercase">
            Если сформулировать сам ФАКТ ОТЕКА КВИНКЕ В ОДНОМ ПРЕДЛОЖЕНИИ –
          </h5>
          <p className="font-helveticaLight text-base leading-5">
            это визуализация немедленной аллергической реакции, угрожающая
            прекращением дыхания.
          </p>
        </div>
        <div className="space-y-3">
          <h5 className="font-helveticaMedium text-xl uppercase">
            При этом важно понимать, как отличить отек Квинке от любого другого?
          </h5>

          <div className="space-y-4">
            <ul className="list-outside list-disc space-y-2 pl-6 font-helveticaLight text-base leading-5">
              <li>
                Участок тела, подверженный отечности быстро увеличивается в
                размере, а если симптоматика имела папульный вид на первом
                этапе, то ко второму – границы между папулами соединяются.
                Контуры буквально сглаживаются.
              </li>
              <li>
                На ощупь отечные участки очень плотные и неподвижные, а кожа на
                них не изменена.
              </li>
              <li>Ощущается сильное жжение, желание «снять кожу».</li>
              <li>
                Сдавливание, удушье, изменения голоса (обычно хриплость),
                возможен кашель
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <h5 className="font-helveticaMedium text-xl uppercase">
            Помощь при экстренном отеке Квинке:
          </h5>

          <div className="space-y-4">
            <ol className="list-outside list-decimal space-y-2 pl-6 font-helveticaLight text-base leading-5">
              <li>Устранить воздействие аллергена (если известно)</li>
              <li>Вызвать скорую помощь</li>
              <li>
                На место отека приложить компресс. Он должен быть прохладным,
                можно добавить раствор соды, соли. Эти агенты помогут
                адсорбировать жидкость из тканей, а значит снизить сдавливание.
              </li>
              <li>Важно обеспечить приток свежего воздуха в помещение.</li>
              <li>Принять (помочь больному) безрецептурные антигистаминные.</li>
              <li>В нос закапать безрецептурные сосудосуживающие капли.</li>
              <li>Дождаться скорой и следовать всем рекомендациям.</li>
            </ol>
          </div>
        </div>

        <div className="space-y-3">
          <h5 className="font-helveticaMedium text-xl uppercase">
            Обратите внимание!!!
          </h5>
          <p className="font-helveticaLight text-base leading-5">
            Часто, при правильно оказанной первой помощи (даже на этапе солевого
            компресса) симптомы отека могут сойти на нет. Это хороший знак. Но
            обратиться к специалисту важно в любом случае, сделать это нужно,
            как можно скорее.
          </p>
        </div>
      </div>
    </div>
  </article>
)

export { KvinkeContent }
