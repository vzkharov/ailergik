import { Separator } from '~/components/ui/separator'

import { Image } from '~/components/ui/image'
import {
  Card,
  CardDescription,
  CardTitle,
} from '~/app/(external)/partners/components/cards'
import { Button } from '~/components/ui/button'
import { YouTubeIcon } from '~/components/ui/icons/youtube-icon'
import { NoteIcon } from '~/components/ui/icons/note-icon'
import { ShareIcon } from '~/components/ui/icons/share-icon'

type MenuItem = {
  title: string
  path: string
  subMenu?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { title: 'ЭКСПЕРТЫ', path: '/topic/experts' },
  {
    title: 'СПРАВОЧНИК',
    path: '/topic/guide',
    subMenu: [
      { title: 'Общая информация', path: '/topic/guide/general-info' },
      { title: 'Дети', path: '/topic/guide/children' },
    ],
  },
  { title: 'ПОЛЕЗНОЕ', path: '/topic/useful' },
  { title: 'ЛАЙФСТАЙЛ', path: '/topic/lifestyle' },
  { title: 'УСЛУГИ', path: '/topic/services' },
  { title: 'ТОВАРЫ', path: '/topic/products' },
]

const HeaderMenu = ({ videobutton = false }: { videobutton: boolean }) => (
  <div className="flex flex-row gap-6">
    <div className="min-w-[263px]">
      <nav className="rounded-3xl font-helveticaMedium w-full bg-white px-6 py-5">
        <ul className="space-y-3">
          {/* поменять тут MenuItems на какой topics navigation */}
          {menuItems.map(item => (
            <li key={item.path} className="space-y-3">
              <a href={item.path}>
                <span className="block py-1 text-xs uppercase">
                  {item.title}
                </span>
              </a>
              {/* Тут короче подменю если оно есть*/}
              {item.subMenu && (
                <ul className="font-helveticaLight ml-2 mt-3 list-inside list-disc space-y-4 text-sm">
                  {item.subMenu.map(subItem => (
                    <li key={subItem.path}>
                      <a href={subItem.path}>
                        <span className="inline-block">{subItem.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              <Separator />
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <div className="flex flex-1 flex-col gap-5">
      <div className="relative">
        <Image
          alt="topics"
          src="/partners/wel.png"
          width={845}
          height={429}
          className="max-md:rounded-3xl max-md:h-[450px]"
        />

        <Card className="max-md:bottom-20 max-md:left-0">
          <CardTitle>Неожиданные аллергические реакции</CardTitle>
          <CardDescription>
            О неожиданных проявлениях аллергических реакций рассказывает
            клинический фармаколог Ирина Козловская
          </CardDescription>
        </Card>

        {videobutton ? (
          <Button
            className="rounded-3xl font-helveticaMedium absolute right-1 top-0 gap-y-2 space-x-2 text-xs"
            variant="colored"
          >
            <div className="translate-y-px uppercase">Смотреть видео</div>
            <YouTubeIcon className="w-full" />
          </Button>
        ) : null}
        <Button
          className="rounded-3xl font-helveticaMedium absolute right-1 top-0 gap-y-2 space-x-2 text-xs"
          variant="colored"
        >
          <div className="translate-y-px uppercase">Смотреть видео</div>
          <YouTubeIcon className="w-full" />
        </Button>
      </div>
      <div className="flex flex-row space-x-5">
        <Button
          className="rounded-3xl font-helveticaMedium gap-y-2 space-x-2 text-xs"
          variant="outline"
        >
          <div className="translate-y-px uppercase">В закладки</div>
          <NoteIcon className="w-full" />
        </Button>
        <Button
          className="rounded-3xl font-helveticaMedium gap-y-2 space-x-2 text-xs"
          variant="colored"
        >
          <div className="translate-y-px uppercase">поделиться</div>
          <ShareIcon className="w-full" />
        </Button>
      </div>
    </div>
  </div>
)

export { HeaderMenu }
