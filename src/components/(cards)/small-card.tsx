import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { DirectusFile } from '~/lib/directus/_generated'

import { Button } from '~/components/ui/button'
import { DirectusImage } from '~/components/(images)/directus-image'

type SmallCardProps = {
  href: string
  title: string
  image: DirectusFile
}

const SmallCard = ({ href, image, title }: SmallCardProps) => (
  <article className="w-full">
    <div className="relative">
      <DirectusImage
        image={image}
        className="h-96 rounded-md object-cover"
        style={{
          clipPath: clipBottomTriangle(80),
        }}
      />
      <div className="absolute bottom-0 right-0 z-0 flex -rotate-45 items-center justify-center">
        <Link href={href}>
          <Button
            icon
            size="icon"
            variant="outline"
            className="!h-10 !w-10 !p-0"
          >
            <ArrowRight strokeWidth={1} />
          </Button>
        </Link>
      </div>
    </div>
    <h5 className="mt-md line-clamp-3 text-lg">{title}</h5>
  </article>
)

const clipBottomTriangle = (offset: number) =>
  `polygon(0 0, 100% 0, 100% calc(100% - ${offset}px), calc(100% - ${offset}px) 100%, 0 100%)`

export { SmallCard }
