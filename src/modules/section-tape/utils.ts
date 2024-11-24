const getItemsCountByViewType = (view: string): number => {
  switch (view) {
    case 'small': {
      return 4
    }

    case 'medium': {
      return 4
    }

    case 'big': {
      return 1
    }

    case 'bento': {
      return 3
    }

    case 'cover': {
      return 1
    }

    default: {
      return 1
    }
  }
}

export { getItemsCountByViewType }
