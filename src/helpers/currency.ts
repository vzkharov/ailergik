const getCurrency = () => 'BYN'

const formatCurrency = (price: number) => `${price.toFixed(2)} ${getCurrency()}`

export { getCurrency, formatCurrency }
