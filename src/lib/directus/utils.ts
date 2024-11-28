import { DIRECTUS_HOST } from '~/env'

type Asset = {
  id: string | number
}

const getDirectusFileUrl = (asset: Asset) =>
  [DIRECTUS_HOST, 'assets', asset.id].join('/')

export { getDirectusFileUrl }
