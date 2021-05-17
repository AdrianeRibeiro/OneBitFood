export default function toCurrency(value) {
  const formatter = Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL'
  })
  return formatter.format(value)
}