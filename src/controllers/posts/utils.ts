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
      subsection: ['name', 'slug'],
    },
  ],
  full: [
    'id',
    'slug',
    'name',
    'content',
    'description',
    'date_created',
    {
      cover: ['*'],
      topic: ['id', 'name', 'color', 'slug'],
      section: ['id', 'name', 'slug'],
      subsection: ['id', 'name', 'slug'],
    },
  ],
  ids: ['slug'],
} as const

export { fields, filters }
