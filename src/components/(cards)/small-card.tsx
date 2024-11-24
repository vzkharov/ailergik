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
  <article className="group relative flex w-full cursor-pointer flex-col">
    <DirectusImage
      image={image}
      className="aspect-[4/3] w-full max-w-72 rounded-sm object-cover"
    />
    <h5 className="mt-md line-clamp-2 text-sm">{title}</h5>

    <div className="mt-auto">
      <Button
        variant="ghost"
        icon={<ArrowRight className="h-4 w-4 transition-all" />}
        className="gap-x-1"
      >
        Читать
      </Button>
    </div>

    <Link
      href={href}
      className="absolute inset-0 bg-background opacity-0 transition-all group-hover:opacity-30"
    />
  </article>
)

export { SmallCard }
