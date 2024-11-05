const filters = {
  published: {
    status: { _eq: 'published' },
  },
} as const

const fields = {
  brief: [
    'slug',
    'name',
    'content',
    'description',
    'date_created',

    {
      cover: ['*'],
      topic: ['name', 'color', 'slug'],
      section: ['name', 'slug'],
    },
  ],
  full: [
    'slug',
    'name',
    'content',
    'date_created',
    {
      cover: ['*'],
      topic: ['name', 'color', 'slug'],
      section: ['name', 'slug'],
    },
  ],
  ids: ['slug'],
} as const

export { fields, filters }
