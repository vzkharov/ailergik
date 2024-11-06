const JoinCard = () => (
  <div className="rounded-[35px] bg-[#9ED8F6]">
    <div className="flex w-full flex-col items-center justify-center px-4 py-32">
      <h3 className="mb-10 max-w-[700px] text-center font-helveticaMedium text-4xl">
        ОБЪЕДИНЯЕМСЯ, ЧТОБЫ СДЕЛАТЬ СЕРВИС ЛУЧШЕ!
      </h3>
      <h5 className="mb-14 max-w-[700px] text-center font-helveticaLight text-xl">
        Мы стремимся создать более безопасный мир для людей с потенциально
        опасными для жизни аллергиями с помощью информации на веб-сервисе.
      </h5>
      <button className="inline-flex h-14 w-full max-w-[900px] items-center justify-center rounded-3xl bg-[#142850] px-4 py-2 font-helveticaMedium text-sm text-white">
        <span className="translate-y-px leading-none">
          СТАТЬ ПАРТНЕРОМ СЕРВИСА
        </span>
      </button>
    </div>
  </div>
)

export { JoinCard }
