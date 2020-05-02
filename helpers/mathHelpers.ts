export const sumArrayProperties = (array, property) => {
  return array ? array.reduce((accumulator, item) => accumulator + item[property], 0) : 0
}
