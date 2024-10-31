const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return date.toLocaleDateString('ru-RU', options)
}

const getCurrentYear = () => new Date(Date.now()).getFullYear()

export { formatDate, getCurrentYear }
