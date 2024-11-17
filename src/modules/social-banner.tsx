import Link from 'next/link'

import { cn } from '~/lib/utils'
import { fetchSocials } from '~/controllers/social'

import { Button } from '~/components/ui/button'
import { DirectusImage } from '~/components/(images)/directus-image'

const SocialBanner = async () => {
  const socials = await fetchSocials()

  return (
    <div className={cn(styles.root)}>
      <h2 className={styles.title}>Подписывайтесь на соц. сети</h2>
      <div className={styles.socials.root}>
        {socials.map(social => (
          <Link key={social.name} target="_blank" href={social.url}>
            <Button
              variant="default"
              className={styles.socials.item}
              icon={
                <DirectusImage
                  image={social.icon}
                  className={styles.socials.icon}
                />
              }
            >
              {social.name.toLocaleUpperCase()}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}

const styles = {
  root: 'flex flex-col items-center gap-y-xl rounded-md bg-muted py-2xl',
  title: 'w-fit font-medium text-2xl',
  socials: {
    root: 'grid grid-cols-3 gap-x-md',
    item: 'w-full gap-x-sm px-6 text-xs',
    icon: 'h-5 w-5',
  },
}

export { SocialBanner }
