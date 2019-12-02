export const getGraphQlError = error => {
  return {
    error: true,
    message: error.toString().replace('Error: GraphQL error: ', '')
  }
}
