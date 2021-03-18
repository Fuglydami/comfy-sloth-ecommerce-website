export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
}
// export const formatPrice = (number) => {
//   const newNumber = (number / 100).toLocaleString('en-NG', {
//     style: 'currency',
//     currency: 'NGN',
//   })
//   return newNumber
// }

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  if (type === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}
