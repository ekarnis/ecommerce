export const convertSnakeToCamelCase = (jsonObject) => {
  return JSON.parse(
    JSON.stringify(jsonObject)
      .replace(/([_][a-z])/g
        , group => group.toUpperCase().replace('_', '')
      )
  )
}
