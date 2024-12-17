import { z } from 'zod'

const directusImage = z.object({
  id: z.string(),
  width: z.number(),
  height: z.number(),
})

type DirectusImage = z.infer<typeof directusImage>

export { directusImage }
export type { DirectusImage }
