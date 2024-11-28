const filters = {
  published: {
    status: { _eq: 'published' },
  },
} as const

const fields = {
  ids: ['slug'],
  default: [
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
} as const

export { fields, filters }
