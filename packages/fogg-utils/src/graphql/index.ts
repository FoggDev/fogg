// Interfaces
interface Error {
  error: boolean
  message: string
}

export function getGraphQlError(error: object): Error {
  return {
    error: true,
    message: error.toString().replace('Error: GraphQL error: ', '')
  }
}

export function validateFields(validations: any, values: any, alert = 'Error trying to create the item'): object {
  const messages: any = {}

  Object.keys(validations).forEach(field => {
    const { len, isEmpty } = validations[field]

    if (len && len.arg) {
      if (values[field].length !== len.arg) {
        messages[field] = {
          msg: len.msg
        }
      }
    }

    if (isEmpty) {
      if (values[field] === '' || !values[field]) {
        messages[field] = {
          msg: isEmpty.msg
        }
      }
    }
  })

  return Object.keys(messages).length > 0
    ? {
        error: true,
        alert,
        messages
      }
    : {
        error: false
      }
}
