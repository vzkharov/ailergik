const getCurrency = () => 'BYN'

const formatCurrency = (price: number, currency: string = getCurrency()) => {
  // Handle negative amounts
  const isNegative = price < 0
  const absoluteAmount = Math.abs(price)

  // Format the number to two decimal places
  const formattedAmount = absoluteAmount.toFixed(2)

  // Add commas for thousands
  const parts = formattedAmount.split('.')
  parts[0] = parts[0].replaceAll(/\B(?=(\d{3})+(?!\d))/g, ',')

  // Return the formatted string with currency
  return `${isNegative ? '-' : ''}${parts.join('.')} ${currency}`
}

export { getCurrency, formatCurrency }
