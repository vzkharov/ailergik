import { Image } from '~/components/ui/image'

import { DetailButton } from '~/components/(buttons)/detail-button'
import { Separator } from '~/components/ui/separator'
import { Spacer } from '~/components/ui/spacer'
import {
  Card,
  CardDescription,
  CardTitle,
} from '../../partners/components/cards'
import { BlogCard } from '../../partners/components/blog-card'
import { blogs } from '../_data/blogs'

const SectionDelete = () => (
  <>
    <div className="flex flex-col gap-y-5">
      <h5 className="font-helveticaMedium text-[#506184]">Полезное</h5>

      <div className="relative">
        <Image
          alt="easy"
          src="/home/medicine/useful.png"
          width={1128}
          height={550}
          className="max-md:h-[450px] max-md:rounded-3xl"
        />

        <Card className="max-md:bottom-0 max-md:left-0">
          <CardTitle>
            Аллергия – эволюционное приспособление или дисфункция?
          </CardTitle>
          <CardDescription>
            Разбор главных теорий происхождения аллергий
          </CardDescription>
          <DetailButton>подробнее</DetailButton>
        </Card>
      </div>
      <Spacer y="lg" />
      <Separator />
      <Spacer y="lg" />
      <h5 className="font-helveticaMedium text-[#506184]">Лайфстайл</h5>
      <div className="flex flex-col gap-y-12 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-x-20 md:gap-y-20">
        <div className="row-span-1">
          <BlogCard button key={blogs[0].id} {...blogs[0]} />
        </div>
        <div className="col-start-2 row-span-2 row-start-1 place-self-center">
          <BlogCard button key={blogs[1].id} {...blogs[1]} />
        </div>
        <div className="col-span-1 row-span-2 row-start-2 place-content-center">
          <BlogCard button key={blogs[2].id} {...blogs[2]} />
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-y-5">
      <h5 className="font-helveticaMedium text-[#506184]">Полезное</h5>
      <div className="relative">
        <Image
          alt="easy"
          src="/home/food/useful.png"
          width={1128}
          height={550}
          className="max-md:h-[450px] max-md:rounded-3xl"
        />

        <Card className="max-md:bottom-0 max-md:left-0">
          <CardTitle>
            Приговор аллергику или диета? <br /> Продукты, которые могут
            поддержать при аллергии…
          </CardTitle>

          <DetailButton>подробнее</DetailButton>
        </Card>
      </div>
      <Spacer y="lg" />
      <Separator />
      <Spacer y="lg" />
      <div className="flex flex-col gap-y-12 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-x-20 md:gap-y-20">
        <div className="row-span-1">
          <BlogCard button key={blogs[3].id} {...blogs[3]} />
        </div>
        <div className="col-start-2 row-span-2 row-start-1 place-self-center">
          <BlogCard button key={blogs[4].id} {...blogs[4]} />
        </div>
        <div className="col-span-1 row-span-2 row-start-2 place-content-center">
          <BlogCard button key={blogs[5].id} {...blogs[5]} />
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-y-5">
      <h5 className="font-helveticaMedium text-[#506184]">Полезное</h5>
      <div className="relative">
        <Image
          alt="easy"
          src="/home/house/useful.png"
          width={1128}
          height={550}
          className="max-md:h-[450px] max-md:rounded-3xl"
        />

        <Card className="max-md:bottom-0 max-md:left-0">
          <CardTitle>
            Аллергены в подушках и одеялах: как выбрать постельные
            принадлежности?
          </CardTitle>

          <DetailButton>подробнее</DetailButton>
        </Card>
      </div>
      <Spacer y="lg" />
      <Separator />
      <Spacer y="lg" />
      <div className="flex flex-col gap-y-12 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-x-20 md:gap-y-20">
        <div className="row-span-1">
          <BlogCard button key={blogs[6].id} {...blogs[6]} />
        </div>
        <div className="col-start-2 row-span-2 row-start-1 place-self-center">
          <BlogCard button key={blogs[7].id} {...blogs[7]} />
        </div>
        <div className="col-span-1 row-span-2 row-start-2 place-content-center">
          <BlogCard button key={blogs[8].id} {...blogs[8]} />
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-y-5">
      <h5 className="font-helveticaMedium text-[#506184]">Полезное</h5>
      <div className="relative">
        <Image
          alt="easy"
          src="/home/tourism/useful.png"
          width={1128}
          height={550}
          className="max-md:h-[450px] max-md:rounded-3xl"
        />

        <Card className="max-md:bottom-0 max-md:left-0">
          <CardTitle>
            Аллергия – не повод отказываться от отпуска. Лайфхаки...
          </CardTitle>

          <DetailButton>подробнее</DetailButton>
        </Card>
      </div>
      <Spacer y="lg" />
      <Separator />
      <Spacer y="lg" />
      <div className="flex flex-col gap-y-12 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-x-20 md:gap-y-20">
        <div className="row-span-1">
          <BlogCard button key={blogs[9].id} {...blogs[9]} />
        </div>
        <div className="col-start-2 row-span-2 row-start-1 place-self-center">
          <BlogCard button key={blogs[10].id} {...blogs[10]} />
        </div>
        <div className="col-span-1 row-span-2 row-start-2 place-content-center">
          <BlogCard button key={blogs[11].id} {...blogs[11]} />
        </div>
      </div>
    </div>
  </>
)

export { SectionDelete }
